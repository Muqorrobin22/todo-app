import React from "react";
import { MyInput } from "./Themes";
import { MyInputDesktop } from "./Themes";
import { HeaderDesktopWrap } from "./Themes";
import { HeaderMobileWrap } from "./Themes";
import { ReactComponent as Moon } from "../assets/images/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/images/icon-sun.svg";
import { ReactComponent as Oval } from "../assets/images/Oval.svg";
import { ReactComponent as Fill } from "../assets/images/Fill.svg";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyle";
import { lightTheme, darkTheme } from "./Themes";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "@mui/material/Button";
import { addTodos, removeTodos, completeTodos } from "../redux/reducer";
import { connect } from "react-redux";
import TodosItemjs from "./TodosItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

function HeaderMobile(props) {
  const [theme, setTheme] = useState("light");
  const [empty, setEmpty] = useState(false);
  const [todo, setTodo] = useState("");
  const [sort, setSort] = useState("active");

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const inputHandler = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  };

  const fillToggle = () => {
    setEmpty((prevState) => !prevState);
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const fillAction = empty ? (
    <Fill onClick={fillToggle} />
  ) : (
    <Oval onClick={fillToggle} />
  );

  const add = (event) => {
    event.preventDefault();
    if (todo === "") {
      alert("Todos Kosongg om!");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  const InputMobile = (
    <MyInput tema={theme}>
      {fillAction}
      <form onSubmit={add}>
        <input
          type="text"
          placeholder="Create a new todo..."
          required
          onChange={inputHandler}
          value={todo}
        />
      </form>
      <Button variant="contained" onClick={add}>
        Upload
      </Button>
    </MyInput>
  );
  const InputDesktop = (
    <MyInputDesktop tema={theme}>
      {fillAction}
      <form onSubmit={add}>
        <input
          type="text"
          placeholder="Create a new todo..."
          required
          onChange={inputHandler}
          value={todo}
        />
      </form>
      <Button variant="contained" onClick={add}>
        Upload
      </Button>
    </MyInputDesktop>
  );

  const headerMobile = (
    <HeaderMobileWrap images={theme} tema={theme}>
      <div className="wrap">
        <h1>todo</h1>
        {theme === "light" ? (
          <Moon onClick={themeToggler} />
        ) : (
          <Sun onClick={themeToggler} />
        )}
      </div>
      <div className="wrap_input">{InputMobile}</div>
      <div className="wrap_list">
        <ul>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodosItemjs
                      key={item.id}
                      item={item}
                      tema={theme}
                      completeTodo={props.completeTodo}
                      removeTodo={props.removeTodo}
                    ></TodosItemjs>
                  )
                );
              })
            : null}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodosItemjs
                      key={item.id}
                      item={item}
                      tema={theme}
                      completeTodo={props.completeTodo}
                      removeTodo={props.removeTodo}
                    ></TodosItemjs>
                  )
                );
              })
            : null}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodosItemjs
                    key={item.id}
                    item={item}
                    tema={theme}
                    completeTodo={props.completeTodo}
                    removeTodo={props.removeTodo}
                  ></TodosItemjs>
                );
              })
            : null}
        </ul>
        <div className="buttons">
          <p className="disabled">{props.todos.length} items left</p>
          <p className="disabled">Clear Complete</p>
        </div>
        <div className="buttons">
          <p
            onClick={() => setSort("all")}
            style={sort === "all" ? { color: "#3A7CFD" } : { color: "inherit" }}
          >
            All
          </p>
          <p
            onClick={() => setSort("active")}
            style={
              sort === "active" ? { color: "#3A7CFD" } : { color: "inherit" }
            }
          >
            Active
          </p>
          <p
            onClick={() => setSort("completed")}
            style={
              sort === "completed" ? { color: "#3A7CFD" } : { color: "inherit" }
            }
          >
            Completed
          </p>
        </div>
      </div>
    </HeaderMobileWrap>
  );

  const headerDesktop = (
    <HeaderDesktopWrap
      images={theme}
      tema={theme}
      isDesktop={isDesktopOrLaptop}
    >
      <div className="wrap">
        <h1>todo</h1>
        {theme === "light" ? (
          <Moon onClick={themeToggler} />
        ) : (
          <Sun onClick={themeToggler} />
        )}
      </div>
      <div className="wrap_input">{InputDesktop}</div>
      <div className="wrap_list">
        <ul>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodosItemjs
                      key={item.id}
                      item={item}
                      tema={theme}
                      completeTodo={props.completeTodo}
                      removeTodo={props.removeTodo}
                    ></TodosItemjs>
                  )
                );
              })
            : null}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodosItemjs
                      key={item.id}
                      item={item}
                      tema={theme}
                      completeTodo={props.completeTodo}
                      removeTodo={props.removeTodo}
                    ></TodosItemjs>
                  )
                );
              })
            : null}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodosItemjs
                    key={item.id}
                    item={item}
                    tema={theme}
                    completeTodo={props.completeTodo}
                    removeTodo={props.removeTodo}
                  ></TodosItemjs>
                );
              })
            : null}
        </ul>
        <div className="buttons">
          <p className="disabled">{props.todos.length} items left</p>
          <p
            onClick={() => setSort("all")}
            style={sort === "all" ? { color: "#3A7CFD" } : { color: "inherit" }}
          >
            All
          </p>
          <p
            onClick={() => setSort("active")}
            style={
              sort === "active" ? { color: "#3A7CFD" } : { color: "inherit" }
            }
          >
            Active
          </p>
          <p
            onClick={() => setSort("completed")}
            style={
              sort === "completed" ? { color: "#3A7CFD" } : { color: "inherit" }
            }
          >
            Completed
          </p>
          <p className="disabled">Clear Complete</p>
        </div>
      </div>
    </HeaderDesktopWrap>
  );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {isDesktopOrLaptop ? headerDesktop : headerMobile}
    </ThemeProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile);
