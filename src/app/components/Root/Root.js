import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import TodoForm from "../TodoForm/TodoForm";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

import { selectTodos } from '../../features/todo/todosSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    height: "100vh",
  },
}));

function Root() {
  const classes = useStyles();
  const [spacing, setSpacing] = useState(2);

  const todos = useSelector(selectTodos);

  return (
    <div>
      <CssBaseline />

      <Paper
        className={classes.root}
        levation={0}
        square={true}
        variant="outlined"
      >
        <Header />
        <Container maxWidth="lg">
          <div className="App">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={spacing}
            >
              <Grid item xs={12} sm={8} md={6}>
                <TodoForm />
                <TodoList todos={todos} />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Paper>
    </div>
  );
}

export default Root;
