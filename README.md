
# Todo List App Test Plan

## Introduction
This document details the testing strategy for the Todo List React application, aiming to ensure the reliability and functionality of each component and feature within the system.

## Testing Tools
- Jest: A JavaScript testing framework.
- React Testing Library: A testing utility for React.

## Folder Structure



## Test Cases

### TodoItem Component
#### Test Type: Unit Testing

1. **Rendering TodoItem**
   - **Case:** Renders without crashing.
   - **Case:** Renders the correct task text.
   - **Case:** Renders the correct completion status.

2. **Toggle TodoItem Completion**
   - **Case:** Clicking on the TodoItem toggles completion status.
   - **Case:** Completed TodoItem has appropriate styling.

3. **Delete TodoItem**
   - **Case:** Clicking on the delete button removes the TodoItem.
   - **Case:** Confirming deletion removes the TodoItem.

4. **Update TodoItem Text**
   - **Case:** Double-clicking on the text allows editing.
   - **Case:** Editing the text updates the TodoItem.

5. **Render Different TodoItem Variations**
   - **Case:** Renders TodoItem with different text.
   - **Case:** Renders incomplete TodoItem without "completed" class.

### TodoList Component
#### Test Type: Integration Testing

1. **Rendering TodoList**
   - **Case:** Renders without crashing.
   - **Case:** Renders the correct number of TodoItems.

2. **Adding TodoItems**
   - **Case:** Adding a new task updates the TodoList.
   - **Case:** Adding multiple tasks updates the TodoList accordingly.

3. **Filtering TodoItems**
   - **Case:** Clicking on "All" shows all TodoItems.
   - **Case:** Clicking on "Active" shows only active TodoItems.
   - **Case:** Clicking on "Completed" shows only completed TodoItems.

4. **Marking TodoItems as Completed**
   - **Case:** Clicking on a TodoItem marks it as completed.
   - **Case:** Completed TodoItems have appropriate styling.

5. **Clearing Completed TodoItems**
   - **Case:** Clicking "Clear Completed" removes completed TodoItems.
   - **Case:** Clearing does not affect active TodoItems.

6. **Rendering an Empty TodoList**
   - **Case:** Renders a message when there are no tasks.
   - **Case:** No message is displayed when there are tasks.

7. **Marking TodoItems as Uncompleted**
   - **Case:** Clicking on a completed TodoItem marks it as uncompleted.

8. **Editing TodoItem Text**
   - **Case:** Double-clicking on the text of a TodoItem allows editing.
   - **Case:** Editing the text updates the TodoItem.

## Running Tests
1. Install dependencies: `npm install`
2. Run tests: `npm test`

