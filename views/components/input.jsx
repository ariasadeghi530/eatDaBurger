const React = require('react');

function Input() {
  return (
    <div className="col-md-4 mt-3">
      <form>
        <div class="form-group">
          <textarea class="form-control" id="textInput" rows="3"></textarea>
          <label htmlFor="exampleFormControlTextarea1">Enter a burger you want to eat and press submit!</label>
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-primary center" id="submit">Submit</button>
        </div>
      </form >
    </div>
  );
}

module.exports = Input;