import React from 'react';

class App extends React.Component {
  render() {
    return this.props.children;
  }
}
App.propTypes = {
  children: React.PropTypes.any.isRequired,
};
export default App;
