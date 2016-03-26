import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {connect} from 'react-redux';
import ToDo from '../components/todoitem';
import Footer from '../components/footer';
import { toggleAllTodos } from '../actions';
import TodoForm from '../components/newTodoForm';
import { addTodo, toggleTodo } from '../actions';

class Page extends React.Component {

  render() {

    const route = this.props.route.path;

    const slice = route.slice(1);

    const selected = slice!="" ? slice : "all";
    
    const allCheck = () => {
        this.props.dispatch(toggleAllTodos());
    }

    const onSubmit = value => {
      this.props.dispatch(addTodo(value));
    }

    const onCheck = id => {
        this.props.dispatch(toggleTodo(id));
    }

    const isNotChecked = (value) => {
        return value.done===false;
    }

    const remaining = () => {
        return this.props.todos.filter(isNotChecked).length;
    }


    return (
    <div>
        <section className={"todoapp"}>
            <header className={"header"}>
                <h1>todos</h1>
            <TodoForm  onSubmit={onSubmit}/>  
            </header>
            <section className={"main"}>
                <input className={"toggle-all"} type="checkbox" onChange={() => allCheck()}></input>
                <label htmlFor={"toggle-all"}>Mark all as complete</label>
                <ul className={"todo-list"}>
                    {
                        this.props.todos.map(function(todo,index) {
                        if ( (!todo.done&& route==="/active") || (todo.done&& route==="/completed") || (route==="/"))
                          return (
                              <ToDo checked={todo.done} text={todo.text} id={index} onCheck={onCheck}></ToDo>
                          );
                          else
                                return (<div></div>);
                        })
                    }
                </ul>
            </section>
            <Footer items={remaining()} selected={selected}> </Footer>
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


const Connector = connect(mapStateToProps)(Page);

export default Connector;