import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

test('renders TodoItem correctly', () => {
  const { getByText, getByTestId } = render(<TodoItem text="Test Todo" />);
  expect(getByText('Test Todo')).toBeInTheDocument();
  expect(getByTestId('todo-item')).not.toHaveClass('completed');
});

test('toggles completion status on click', () => {
  const { getByTestId } = render(<TodoItem text="Toggle Test" />);
  const todoItem = getByTestId('todo-item');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveClass('completed');
});

test('deletes TodoItem on clicking delete button', () => {
  const { getByText, queryByText } = render(<TodoItem text="Delete Todo" />);
  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);
  expect(queryByText('Delete Todo')).not.toBeInTheDocument();
});

test('updates TodoItem text on double-click', () => {
  const { getByText, getByTestId } = render(<TodoItem text="Edit Me" />);
  const todoItem = getByTestId('todo-item');
  fireEvent.doubleClick(todoItem);
  expect(todoItem).toHaveClass('editing');
});

test('renders different TodoItem variations', () => {
  const { getByText } = render(<TodoItem text="Different Todo" />);
  expect(getByText('Different Todo')).toBeInTheDocument();
});
