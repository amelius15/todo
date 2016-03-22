import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let all = <a href="#/">All</a>;
    let active = <a href="#/active">Active</a>;
    let completed = <a href="#/completed">Completed</a>;

    if(this.props.selected==="all")
      all = <a className={"selected"} href="#/">All</a>;
    else if(this.props.selected==="active")
      active = <a className={"selected"} href="#/active">Active</a>;
    else if(this.props.selected==="completed")
      completed = <a className={"selected"} href="#/completed">Completed</a>;

    return (
            <footer className={"footer"}>
                <span className={"todo-count"}><strong>{this.props.items}</strong> item left</span>
                <ul className={"filters"}>
                    <li>
                      {all} 
                    </li>
                    <li>
                      {active}
                    </li>
                    <li>
                      {completed}
                    </li>
                </ul>
                <button className={"clear-completed"}>Clear completed</button>
            </footer>
    );
  }
}

export default Footer;