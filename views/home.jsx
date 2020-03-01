const React = require('react');
const Html = require('./layouts/default.jsx');
const Input = require('./components/input.jsx');
const List = require('./components/list.jsx');
const Cont = require('./components/container.jsx');

const Home = props => {
  return (
    <Html>  
      <Cont>
        <List />
        <Input />
        <List />
      </Cont>
    </Html>
  )
}

module.exports = Home;
