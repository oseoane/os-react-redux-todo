import Box from "@material-ui/core/Box";

import TodoListItem from "./TodoListItem";

function TodoList(props) {
  return (
    <div>
      <Box my={4}>
        {props.todos.map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
}

export default TodoList;
