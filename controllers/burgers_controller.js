const connection = require('../config/connection.js');

const burger = {
  selectAll(cb) {
    connection.query('SELECT * FROM burgers', (err, burgers) => {
      if (err) throw err;
      // return items
      cb(burgers);
    });
  },
  insertOne(burger, cb) {
    connection.query('INSERT INTO burgers SET ?', {burger_name: burger, devoured: false}, err => {
      if (err) throw err;
      cb();
    });
  },
  updateOne(update, id, cb) {
    connection.query('UPDATE burgers SET ? WHERE ?', [update, { id }], err => {
      if (err) throw err;
      cb();
    });
  }
}

module.exports = burger;