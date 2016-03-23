import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {connect} from 'react-redux';
import ToDo from '../components/todoitem';
import Footer from '../components/footer';
import { toggleAllTodos } from '../actions';
import TodoForm from '../components/newTodoForm';

class AllPage extends React.Component {

  render() {

    const allCheck = () => {
        this.props.dispatch(toggleAllTodos());
    }

    return (
    <div>
        <section className={"todoapp"}>
            <header className={"header"}>
                <h1>todos</h1>
            <TodoForm/>  
            </header>
            <section className={"main"}>
                <input className={"toggle-all"} type="checkbox" onChange={() => allCheck()}></input>
                <label htmlFor={"toggle-all"}>Mark all as complete</label>
                <ul className={"todo-list"}>
                    {
                        this.props.todos.map(function(todo,index) {
                          return (
                            <ToDo checked={todo.done} text={todo.text} id={index}></ToDo>
                          );
                        })
                    }
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
    todos: state.items
  };
}


const Connector = connect(mapStateToProps)(AllPage);

export default Connector;