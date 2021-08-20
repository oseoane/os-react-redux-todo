import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function TodoForm() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" component="h1">
          Todo list
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TodoForm;
