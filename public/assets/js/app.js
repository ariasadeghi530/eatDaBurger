

function renderBurgers(){
$.ajax({
  method: 'GET',
  url: '/api/burgers'
})
  .then( (burgers) =>{
    console.log(burgers);
    $('#eaten').html('');
    $('#unEaten').html('');
    burgers.map(burger => {
      if(burger.devoured){
        $('#eaten').append($('<li>').addClass('list-group-item').text(burger.burger_name));
      }
      else {
        $('#unEaten').append($('<a><li>').addClass('list-group-item btn').attr('id', burger.id).text(burger.burger_name));
      }
    })
  })
  .catch(e => console.log(e));
}
renderBurgers();

$('#unEaten').click(function(event){
  $.ajax({
    method: 'PUT',
    url: '/api/burgers/' + event.target.id
  })
  .then(() => {
  renderBurgers()
  })
  .catch(e => console.log(e));
});


$('#submit').click(function(event){
  event.preventDefault();

  if($('#textInput').val()){
    $.ajax({
      method: 'POST',
      url: '/api/burgers',
      data: { burger_name: $('#textInput').val(),
              devoured: false 
            }
    })
    .then(() => {
      renderBurgers();
    })
    .catch(e => console.log(e));
  $('#textInput').val(''); 
  }
});
