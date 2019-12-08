import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = (props) => {
    console.log(props);
    return (
        <ul className="todo-list">
            {props.a.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )};

const mapStateToProps = state => {
    return { a: state.todos }
};

export default connect(mapStateToProps, null)(TodoList);
