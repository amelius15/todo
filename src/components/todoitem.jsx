import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { connect } from 'react-redux'


class ToDo extends React.Component {
    
  render() {
    const onCheck = id => {
        this.props.onCheck(id);
    }
    let itemClass = classNames({
      'completed': this.props.checked
    });

    return (
        <li className={itemClass}>
            <div className={"view"}>
                <input className={"toggle"} type="checkbox" checked={this.props.checked} onChange={() => onCheck(this.props.id)}/>
                <label>{this.props.text}</label>
                <button className={"destroy"}></button>
            </div>
         <input className={"edit"} value="Create a TodoMVC template"></input>
        </li>
    );
  }
}

ToDo = connect()(ToDo)

export default ToDo;