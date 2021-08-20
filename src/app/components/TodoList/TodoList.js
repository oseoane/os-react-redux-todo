import Box from "@material-ui/core/Box";

import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList(props) {
  const todos = props.todos || [];

  return (
    <div>
      <Box my={4}>
        {todos.map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
}

export default TodoList;
