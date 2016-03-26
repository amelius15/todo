import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames'; 
import {connect} from 'react-redux';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onSubmit = (event) => 
    {
        this.props.onSubmit(this.refs.newTodo.value);
        this.refs.newTodo.value="";
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
        <input className="new-todo" ref="newTodo" placeholder="What needs to be done?" autofocus/>
        </form>
    );
  }
}

export default TodoForm;