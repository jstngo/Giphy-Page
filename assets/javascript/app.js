var pokemon = [
    "abra",
    "bulbasaur",
    "charmander",
    "diglet",
    "eevee",
    "fennekin",
    "geodude",
    "hitmonlee",
    "ivysaur",
    "jigglypuff",
    "koffee",
    "lapras",
    "mr. mime",
    "nidoran",
    "onix",
    "pikachu",
    "snorlax",
    "mew",
    "ditto",
    "squirtle",
    "dragonite",
    "zapdos",
    "meowth",
    "psyduck",
    "gengar",
    "vaporeon",
    "charizard",
    "blastoise",
    "venusaur",
    "pidgeot",
    "togepi"
];
console.log(pokemon);
function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < pokemon.length; i++) {
        createButton(pokemon[i]);
    }
}

function createButton(gName) {
    var b = $("<button>");
    b.attr("class", "btn btn-primary");
    b.text(gName);
    $("#buttons-view").append(b);
}

$(document).on("click", "button", function () {
    var gifName = $(this).text();

    // var searchBar = $('input[type="submit"], input[type="button"], button');

    var u =
        "https://api.giphy.com/v1/gifs/search?api_key=fqydCqSaHCiqVBtd38IfSjDm4vi4vSsI&q=" +
        gifName +
        "&limit=25&offset=0&rating=PG-13&lang=en";

    $(".col-9").empty();
    $(".col-3")
        .append()
        .empty();
    // $('.col-3').append(searchBar)

    $.ajax({
        url: u,
        method: "GET"
    }).then(function (response) {
        for (var j = 0; j < 10; j++) {
            var pokeStill = $("<img>").attr(
                "src",
                response.data[j].images.fixed_height_small_still.url
            );

            // var pokeRating = $('<span>').text(response.data[j].rating);

            // $('.col-9').append("Rating: ", pokeRating);

            $(".col-9").append(pokeStill);

            $("img").on("click", function () {
                if (
                    $(this).attr("src") ==
                    response.data[0].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[0].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[1].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[1].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[2].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[2].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[3].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[3].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[4].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[4].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[4].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[4].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[5].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[5].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[6].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[6].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[7].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[7].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[8].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[8].images.fixed_height_small.url);
                }
                if (
                    $(this).attr("src") ==
                    response.data[9].images.fixed_height_small_still.url
                ) {
                    $(this).attr("src", response.data[9].images.fixed_height_small.url);
                }
            });
        }
        event.preventDefault();
    });
    var pokedex = "https://pokeapi.co/api/v2/pokemon/" + gifName + "/";
    $.ajax({
        url: pokedex,
        method: "GET"
    }).then(function (response) {
        var pName = $("<p>").text(response.forms[0].name);
        var abilities1 = $("<p>").text(response.abilities[0].ability.name);
        var abilities2 = $("<p>").text(response.abilities[1].ability.name);
        var pType = $("<p>").text(response.types[0].type.name);
        var attacks1 = $("<p>").text(response.moves[0].move.name);
        var attacks2 = $("<p>").text(response.moves[1].move.name);
        var attacks3 = $("<p>").text(response.moves[2].move.name);
        var attacks4 = $("<p>").text(response.moves[3].move.name);
        var breakline = $("<br>");
        console.log(pName);
        $("<form>").html("<input>");
        $(".col-3").append("Name: ", pName, breakline);
        $(".col-3").append("Type: ", pType, breakline);
        $(".col-3").append("Abilities: ", abilities1, abilities2, breakline);
        $(".col-3").append(
            "Attacks: ",
            attacks1,
            attacks2,
            attacks3,
            attacks4,
            breakline
        );
    });
});

renderButtons();

// $(function () {
//     if ($(".regInput").val() == "") {
//         $(".regButton").prop("disabled", true);
//     } else {
//         $(".regButton").prop("disabled", false);
//         alert("something");
//     }

//     // $('.regInput').onkeyup(function () {

//     // });
// });

(function() {
    $('form > input').keyup(function() {

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled');
        } else {
            $('#register').removeAttr('disabled');

        }

    });
    searchThat()
})()

function searchThat(){
$(".regButton").on("click", function () {
    var v = $(".regInput").val();

    pokemon.push(v);
    createButton(v);

    event.preventDefault();
});

}