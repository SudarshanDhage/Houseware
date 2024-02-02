import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList correctly', () => {
  const { getByText, queryByText } = render(<TodoList todos={['Task 1', 'Task 2']} />);
  expect(getByText('Task 1')).toBeInTheDocument();
  expect(getByText('Task 2')).toBeInTheDocument();
  expect(queryByText('No tasks yet.')).not.toBeInTheDocument();
});

test('adds new TodoItem on input and submit', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  const input = getByPlaceholderText('Add a new task');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.submit(getByText('Add'));
  expect(getByText('New Task')).toBeInTheDocument();
});

test('filters TodoItems based on status', () => {
  const { getByText, getByTestId } = render(<TodoList todos={['Task 1', 'Task 2']} />);
  const activeFilter = getByTestId('filter-active');
  fireEvent.click(activeFilter);
  expect(getByText('Task 1')).toBeInTheDocument();
  expect(getByText('Task 2')).toBeInTheDocument();
});

test('marks TodoItem as completed when clicking on it', () => {
  const { getByText } = render(<TodoList todos={['Click Me']} />);
  const todoItem = getByText('Click Me');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveClass('completed');
});

test('clears completed TodoItems when clicking "Clear Completed"', () => {
  const { getByText, queryByText } = render(<TodoList todos={['Task 1', 'Task 2']} />);
  const todoItem = getByText('Task 1');
  fireEvent.click(todoItem);
  const clearCompletedButton = getByText('Clear Completed');
  fireEvent.click(clearCompletedButton);
  expect(queryByText('Task 1')).not.toBeInTheDocument();
  expect(queryByText('Task 2')).toBeInTheDocument();
});

test('renders an empty TodoList', () => {
  const { getByText } = render(<TodoList />);
  expect(getByText('No tasks yet.')).toBeInTheDocument();
});

test('marks TodoItem as uncompleted when clicking on it again', () => {
  const { getByText } = render(<TodoList todos={['Uncomplete Me']} />);
  const todoItem = getByText('Uncomplete Me');
  fireEvent.click(todoItem);
  fireEvent.click(todoItem); // Clicking again to mark as uncompleted
  expect(todoItem).not.toHaveClass('completed');
});

test('edits TodoItem text on double-click', () => {
  const { getByText, getByTestId } = render(<TodoList todos={['Edit Me']} />);
  const todoItem = getByTestId('todo-item');
  fireEvent.doubleClick(todoItem);
  expect(todoItem).toHaveClass('editing');
});