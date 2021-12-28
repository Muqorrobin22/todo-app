import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Oval } from "../assets/images/Oval.svg";
import { ReactComponent as Fill } from "../assets/images/Fill.svg";
import { ReactComponent as Close } from "../assets/images/icon-cross.svg";

function TodosItemjs(props) {
  const { item, updateTodo, removeTodo, completeTodo } = props;
  // const [click, setClick] = useState(false);
  const inputRef = useRef();

  const clickHandler = () => {
    completeTodo(item.id);
  };

  return (
    <ListWrap key={item.id} className="list" tema={props.tema}>
      {item.completed ? (
        <Fill onClick={clickHandler} />
      ) : (
        <Oval onClick={clickHandler} />
      )}

      <p
        style={
          item.completed
            ? { textDecoration: "line-through", opacity: 0.6 }
            : { textDecoration: "none", opacity: 1 }
        }
      >
        {item.item}
      </p>
      <Close onClick={() => removeTodo(item.id)} />
    </ListWrap>
  );
}

const ListWrap = styled.li`
  background: ${(props) => (props.tema === "light" ? "white" : "#25273D")};
  color: ${(props) => (props.tema === "light" ? "black" : "white")};
  width: 80vw;
  height: 48px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1.4rem 2rem;
  justify-content: space-between;
  list-style: none;
  p {
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
    color: ${(props) => (props.tema === "light" ? "#393A4B" : "#C8CBE7")};
  }
`;

export default TodosItemjs;
