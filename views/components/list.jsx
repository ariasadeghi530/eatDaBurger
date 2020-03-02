const React = require('react');


function ListFalse() {
  return (
    <div className="col-md-4 col-sm-12 mt-3">
      <h6>Click on a burger to devour it!</h6>
      <ul class="list-group" id="unEaten">
        {/* <a><li class="list-group-item">Cras justo odio</li></a>  */}
      </ul>
    </div>
  );
}

module.exports = ListFalse;