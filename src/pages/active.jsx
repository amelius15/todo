import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames'; 
import {connect} from 'react-redux';
import ToDo from '../components/todoitem';
import Footer from '../components/footer';

class ActivePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todos = this.props.todos.map(function(todo) {
      if (!todo.done)
      return (
        <ToDo checked={todo.done} text={todo.text} id={todo.id}></ToDo>
      );
      else
        return (<div></div>);
    });

    return (
    <div>
        <section className={"todoapp"}>
            <header className={"header"}>
                <h1>todos</h1>
                <form onSubmit={this.props.addItem}>
                <input className={"new-todo"} placeholder="What needs to be done?" autofocus></input>
                </form>
            </header>
            <section className={"main"}>
                <input className={"toggle-all"} type="checkbox"></input>
                <label htmlFor={"toggle-all"}>Mark all as complete</label>
                <ul className={"todo-list"}>
                    {todos}
                </ul>
            </section>
            <Footer items={"5"} selected={"active"}> </Footer>
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

const Connector = connect(mapStateToProps)(ActivePage);

export default Connector;