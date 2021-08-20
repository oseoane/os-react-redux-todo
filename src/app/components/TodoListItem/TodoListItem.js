import { useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import { remove } from "../../features/todo/todosSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },
}));

function TodoListItem(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <Paper className={classes.root}>
      <Card variant="outlined">
        <Box p={4}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={10}>
              <Typography variant="h5" component="h5">
                {props.item.title}
              </Typography>
              <Typography component="p">{props.item.description}</Typography>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                onClick={() => handleRemove(props.item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Paper>
  );
}

export default TodoListItem;
