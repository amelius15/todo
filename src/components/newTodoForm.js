import React from 'react';

class TodoForm extends React.Component {
  render() {
    const onSubmit = (event) => {
      this.props.onSubmit(this.refs.newTodo.value);
      this.refs.newTodo.value = '';
      event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
        <input className="new-todo" ref="newTodo" placeholder="What needs to be done?" autoFocus />
        </form>
    );
  }
}
TodoForm.propTypes = { onSubmit: React.PropTypes.func.isRequired, };
export default TodoForm;
