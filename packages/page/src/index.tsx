
import React from 'react';
import ReactDom from 'react-dom';

const txtStyle: React.CSSProperties = {
  textAlign: 'center',
}
class App extends React.Component {
  render() {

    return (
      <h1 style={txtStyle}>
        We are all in the gutter, but some of us are looking at the start!
      </h1>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
