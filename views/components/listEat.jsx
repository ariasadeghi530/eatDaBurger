const React = require('react');


function ListTrue() {
  return (
    <div className="col-md-4 col-sm-12 mt-3">
      <h6 id="isEaten">Your devoured burgers</h6>
      <ul class="list-group" id="eaten">
        {/* <li class="list-group-item">Cras justo odio</li>  */}
      </ul>
    </div>
  );
}

module.exports = ListTrue;