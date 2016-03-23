import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Footer extends React.Component {
  render() {

    let allClass = classNames({
      'selected': this.props.selected==="all"
    });
    let activeClass = classNames({
      'selected': this.props.selected==="active"
    });
    let completedClass = classNames({
      'selected': this.props.selected==="completed"
    });

    return (
            <footer className={"footer"}>
                <span className={"todo-count"}><strong>{this.props.items}</strong> item left</span>
                <ul className={"filters"}>
                    <li>
                      <a className={allClass} href="#/">All</a>
                    </li>
                    <li>
                      <a className={activeClass} href="#/active">Active</a>
                    </li>
                    <li>
                      <a className={completedClass} href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className={"clear-completed"}>Clear completed</button>
            </footer>
    );
  }
}

export default Footer;