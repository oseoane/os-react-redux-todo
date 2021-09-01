import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" component="h1">
          To Do List
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
