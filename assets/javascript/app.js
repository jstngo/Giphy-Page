var pokemon = ["abra", "bulbasaur", "charmander", "diglet", "eevee", "fennekin", "geodude", "hitmonlee", "ivysaur", "jigglypuff", "koffee", "lapras", "mr. mime", "nidoran", "onix", "pikachu", "snorlax", "mew", "ditto", "squirtle", "dragonite", "zapdos", "meowth", "psyduck", "gengar", "vaporeon"];
console.log(pokemon);
function renderButtons() {
    $('#buttons-view').empty();

    for (var i = 0; i < pokemon.length; i++) {
        createButton(pokemon[i]);
    }

}

function createButton(gName) {
    var b = $('<button>');
    b.attr('class', 'btn btn-primary')
    b.text(gName);
    $('#buttons-view').append(b);
}

$(document).on('click', 'button', function () {
    var gifName = $(this).text();

    var u = "https://api.giphy.com/v1/gifs/search?api_key=fqydCqSaHCiqVBtd38IfSjDm4vi4vSsI&q=" + gifName + "&limit=25&offset=0&rating=PG-13&lang=en";

    

    $('.col-9').empty();
    $('.col-3').append().empty();
    
    $.ajax({
        url: u,
        method: 'GET'
    }).then(function (response) {

        for (var j = 0; j < 10; j++) {

            var pokeStill = $('<img>').attr('src', response.data[j].images.fixed_height_small_still.url);

            // var pokeGif = $('<img>').attr('src', response.data[j].images.fixed_height_small.url);

            var pokeRating = $('<span>').text(response.data[j].rating);

            $("img").on("click", function (){

            $(this).attr('src', response.data[j].images.fixed_height_small_still.url).on("click", function (){
                $(this).attr('src', response.data[j].images.fixed_height_small.url)
            })

            $(this).attr('src', response.data[j].images.fixed_height_small.url).on("click", function (){
                $(this).attr('src', response.data[j].images.fixed_height_small_still.url);
            })
        })
            $('.col-9').append("Rating: ", pokeRating);

            $('.col-9').append(pokeStill);

        }

        event.preventDefault();

    })
    var pokedex = "https://pokeapi.co/api/v2/pokemon/" + gifName +"/"
    $.ajax({
        url: pokedex,
        method: 'GET'
    }).then(function (response){
        
        var pName = $('<p>').text(response.forms[0].name);
        var abilities1 = $('<p>').text(response.abilities[1].ability.name)
        var abilities2 = $('<p>').text(response.abilities[0].ability.name);
        var pType = $('<p>').text(response.types[0].type.name);
        var breakline = $('<br>');
        console.log(pName);
        $('<form>').html('<input>');
        $('.col-3').append("Name: ", pName, breakline);
        $('.col-3').append("Type: ", pType, breakline);
        $('.col-3').append("Abilities: ", abilities1, abilities2, breakline);


        // $('.col-3').append().empty();
    })
});

// This function handles events where one button is clicked
$(".regButton").on("click", function () {
    var v = $(".regInput").val();
    // v != "Search";
    pokemon.push(v);
    createButton(v);

    event.preventDefault();

    // $(".regButton").val("");
});

renderButtons();