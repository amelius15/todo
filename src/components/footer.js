import React from 'react';
import classNames from 'classnames';

class Footer extends React.Component {
  render() {
      const onClick = () => this.props.onClick();

      let allClass = classNames({
          selected: this.props.selected === 'all',
        });
      let activeClass = classNames({
          selected: this.props.selected === 'active',
        });
      let completedClass = classNames({
          selected: this.props.selected === 'completed',
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
              <button className={"clear-completed"} onClick={onClick}>Clear completed</button>
          </footer>
      );
    }
}
Footer.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  selected: React.PropTypes.string.isRequired,
  items: React.PropTypes.number.isRequired,
};
export default Footer;
