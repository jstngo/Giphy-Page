var pokemon = ["Abra", "Bulbasaur", "Charmander", "Diglet", "Eevee", "Fennekin", "Geodude", "Hitmonlee", "Ivysaur", "Jigglypuff", "Koffee", "Lapras", "Mr. Mime", "Nidoran", "Onyx", "Pikachu", "Snorlax", "Mew", "Ditto", "Squirtle", "Dragonite", "Zapdos", "Meowth", "Psyduck", "Gengar", "Vaporeon"];
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

    $('.col-10').empty();
    
    $.ajax({
        url: u,
        method: 'GET'
    }).then(function (response) {

        for (var j = 0; j < 10; j++) {

            var pokeStill = $('<img>').attr('src', response.data[j].images.fixed_height_small_still.url);

            // var pokeGif = $('<img>').attr('src', response.data[j].images.fixed_height_small.url);

            var pokeRating = $('<span>').text(response.data[j].rating);
            
            $('.col-10').append("Rating: ", pokeRating);

            $('.col-10').append(pokeStill);     
        }

        $("img").on("click", function (){

            $(this).attr('src', response.data[j].images.fixed_height_small.url);

            // $(this).attr('src', response.data[j].images.fixed_height_small_still.url)
            event.preventDefault();
        })

    })
});

// This function handles events where one button is clicked
$(".regButton").on("click", function () {
    var v = $(".regInput").val();

    pokemon.push(v);
    createButton(v);

    event.preventDefault();

    // $(".regButton").val("");
});

renderButtons();