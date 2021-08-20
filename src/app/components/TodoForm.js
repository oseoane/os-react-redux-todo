import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { add } from "../features/todo/todosSlice";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "6rem",
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    display: "block",
  },
  button: {
    marginTop: "1rem",
  },
}));

function TodoForm() {
  const inputRef = useRef();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (item) => {
    if (isEmptyData(item)) {
      handleClickOpen();
      return;
    }
    const formattedItem = formatItem(item);
    dispatch(add(formattedItem));

    reset({});
    inputRef.current.focus();
  };

  const formatItem = (item) => {
    return { ...item, id: +new Date() };
  };

  const isEmptyData = (data) => {
    return (
      !data.title ||
      data.title === "" ||
      !data.description ||
      data.description === ""
    );
  };

  return (
    <div>
      <Card className={classes.card}>
        <Box p={4} border={1}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("title")}
              className={classes.input}
              fullWidth
              id="title"
              name="title"
              label="Title"
              variant="outlined"
              autoFocus
              inputRef={inputRef}
            />
            <TextField
              {...register("description")}
              className={classes.input}
              fullWidth
              id="description"
              name="description"
              label="Description"
              variant="outlined"
            />
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="primary"
              type="submit"
            >
              Add
            </Button>
          </form>
        </Box>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            All the fields must be filled
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TodoForm;
