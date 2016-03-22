import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import classNames from 'classnames';
import {connect} from 'react-redux';
import ToDo from '../components/todoitem';
import Footer from '../components/footer';

class AllPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const temp = this.props.todos.toList();
    let temp1 = []
    this.props.todos.toList().map(function(todo) {
    temp1 = todo
    });
    const todos = temp1.map(function(todo) {
      return (
    <ToDo checked={todo.done} text={todo.text} id={todo.id}></ToDo>
      );
    });


    return (
    <div>
        <section className={"todoapp"}>
            <header className={"header"}>
                <h1>todos</h1>
                <input className={"new-todo"} placeholder="What needs to be done?" autofocus></input>
            </header>
            <section className={"main"}>
                <input className={"toggle-all"} type="checkbox"></input>
                <label htmlFor={"toggle-all"}>Mark all as complete</label>
                <ul className={"todo-list"}>
                    {todos}
                </ul>
            </section>
            <Footer items={"5"} selected={"all"}> </Footer>
        </section>
    </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    todos: state.get('items')
  };
}


const Connector = connect(mapStateToProps)(AllPage);

export default Connector;