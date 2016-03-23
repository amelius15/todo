import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {connect} from 'react-redux';
import ToDo from '../components/todoitem';
import Footer from '../components/footer';
import TodoForm from '../components/newTodoForm';
import { toggleAllTodos } from '../actions';

class CompletedPage extends React.Component {

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
                        if (todo.done)
                        return (
                          <ToDo checked={todo.done} text={todo.text} id={index}></ToDo>
                        );
                        else
                          return(<div></div>);
                      })
                    }
                </ul>
            </section>
            <Footer items={"5"} selected={"completed"}> </Footer>
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


const Connector = connect(mapStateToProps)(CompletedPage);

export default Connector;