const React = require('react');

function Container(props) {
  return (
    <div className="container">
      <div className="row">
        {props.children}
      </div>
    </div>
  );
}

module.exports = Container;