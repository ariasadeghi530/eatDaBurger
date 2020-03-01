const React = require('react');
const Html = require('./layouts/default.jsx');
const Input = require('./components/input.jsx');
const ListFalse = require('./components/list.jsx');
const ListTrue = require('./components/listEat.jsx');
const Cont = require('./components/container.jsx');

const Home = props => {
  return (
    <Html>  
      <Cont>
        <ListFalse />
        <Input />
        <ListTrue />
      </Cont>
    </Html>
  )
}

module.exports = Home;
