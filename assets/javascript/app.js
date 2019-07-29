  var pokemon = ["Abra", "Bulbasaur", "Charmander", "Diglet", "Eevee", "Fennekin", "Geodude", "Hitmonlee", "Ivysaur", "Jigglypuff", "Koffee", "Lapras", "Mr. Mime", "Nidoran", "Onyx", "Pikachu", "Qwilfish", "Rhydon", "Snorlax"];
console.log(pokemon);
  function renderButtons() {
    $('#buttons-view').empty();

    for (var i=0; i<pokemon.length; i++){
        createButton(pokemon[i]);
    }

  }

  function createButton(gName){
      var b = $('<button>');
      b.attr('class', 'btn btn-primary')
      b.text(gName);
      $('#buttons-view').append(b);
  }

  $(document).on('click', 'button', function(){
      var gifName = $(this).text();

      var u = "https://api.giphy.com/v1/gifs/search?api_key=fqydCqSaHCiqVBtd38IfSjDm4vi4vSsI&q=" + gifName + "&limit=25&offset=0&rating=G&lang=en";

      $.ajax({
          url: u,
          method: 'GET'
      }).then(function(response){

    for (var p=0; p<10; p++){
      var pokeGif = $('<img>').attr('src', response.data[p].images.original.url);
   
      var p = $('<div>').html(pokeGif);
      console.log(p);
   
    //   var p = $('#pokemons').append(pokeGif);
    // $("#pokemons").html(pokeGif);
      $('#pokemons').prepend(p);
   
      event.preventDefault();
    }
      })
  });

  // This function handles events where one button is clicked
  $(".regButton").on("click", function() {
    var v = $(".regInput").val();
    
    pokemon.push(v);
    createButton(v);
    
    event.preventDefault();

    $(".regInput").val("");
  });

   renderButtons();