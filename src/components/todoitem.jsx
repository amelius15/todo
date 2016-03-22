import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { connect } from 'react-redux'

import { changeTODOState } from '../actions';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
  }
  onCheck(id){
    // this.setState({checked: !this.state.checked });
    this.props.dispatch(changeTODOState(id));
    console.log('dispatched');
  }
  render() {

    var liclass = classNames({
      'completed': this.props.checked
    });

    return (
        <li className={liclass}>
            <div className={"view"}>
                <input className={"toggle"} type="checkbox" checked={this.props.checked} onChange={() => this.onCheck(this.props.id)}></input>
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