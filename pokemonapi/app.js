console.log("App.js is running");

$('button#get_pokemon').on('click', function(){
  // we want to fire our XHR request
  var baseUrl = 'http://pokeapi.co/api/v2/pokemon/';
  var pokemonName = $('input#pokemon_input').val();

  $.ajax({
    url: baseUrl + pokemonName,
    method: 'GET',
    success: function(response, status){
      var imageSrc = response.sprites.front_default;
      var name = response.name;

      $('img#pokemonFrontDefault').attr('src', imageSrc);
      $('#pokemonName').text(name);

      // add the type of pokemon that it is...

      // Clear the input form after this is submitted...
    }
  });

});
