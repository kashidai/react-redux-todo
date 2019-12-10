import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";
import {deleteTodo} from "../actions";


class AddTodo extends React.Component {
    state = {aaa: ""};

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({aaa: e.target.value})
    };

    onClick = () =>{
        this.props.dispatch(addTodo(this.state.aaa));
    };




    delete = () =>{
        this.props.dispatch(deleteTodo(this.state.aaa));
    };


    render() {
        console.log(this.state);
        return (
            <div>
                <input onChange={this.onChange}/>
                <button type="submit" onClick={this.onClick}>Add</button>
                <button type="submit" onClick={this.delete}>Delete</button>

            </div>
        );
// aaaa
    }
};

export default connect(null, null)(AddTodo);
