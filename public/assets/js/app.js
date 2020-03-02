

function renderBurgers(){
$.ajax({
  method: 'GET',
  url: '/api/burgers'
})
  .then( (burgers) =>{
    if(!burgers.length){
      $('#isEaten').hide()
      $('#notEaten').hide()
    }
    $('#eaten').html('');
    $('#unEaten').html('');
    burgers.map(burger => {
      if(burger.devoured){
        $('#eaten').append($('<li>').addClass('list-group-item text-muted').text(burger.burger_name));
        $('#isEaten').show()
      }
      if(!burger.devoured) {
        $('#unEaten').append($('<a><li>').addClass('list-group-item btn').attr('id', burger.id).text(burger.burger_name));
        $('#notEaten').show()
      }
    })
    
  })
  .catch(e => console.log(e));
}


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
              devoured: 0 
            }
    })
    .then(() => {
      renderBurgers();
    })
    .catch(e => console.log(e));
  $('#textInput').val(''); 

  }
});

renderBurgers();