import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames'; 
import {connect} from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {new:""};
  }

  render() {
    const onSubmit = (event) => {
      this.props.dispatch(addTodo(this.state.new));
      this.setState({new: ""});
      event.preventDefault();
    };
    const onChange = (event) => {
      this.setState({new: event.target.value});
    };
    
    return (
        <form onSubmit={onSubmit}>
        <input className={"new-todo"} value={this.state.new} onChange={onChange} placeholder="What needs to be done?" autofocus/>
        </form>
    );
  }
}

TodoForm = connect()(TodoForm);


export default TodoForm;