    var cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.onclick = function() {

        var randomNumber = Math.floor(Math.random() * 6) + 1;

        card.innerHTML = randomNumber;
        card.className = "number";

        checkWinner();
    };

});


function checkWinner() {

    var numbers = [];

    cards.forEach(function(card) {

        if (card.className === "number") {
            numbers.push(Number(card.innerHTML));
        }

    });


    for (var i = 1; i <= 6; i++) {

        var count = 0;

        numbers.forEach(function(number) {

            if (number === i) {
                count++;
            }

        });


        if (count >= 3) {

            alert("Congratulations! You won");

            return;
        }
    }
}


function resetGame() {

    cards.forEach(function(card) {

        card.className = "card";

        card.innerHTML =
            '<img src="images.png" alt="Card">';

    });

}