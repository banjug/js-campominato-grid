/*

1. far selezionare la difficoltà -> promt/pulsanti
    1.1 a seconda della difficoltà generare la griglia (facile 10x10, medio 9x9, difficile 7x7) -> if con tre funzioni di generazione degli elementi
2. selezionata la difficoltà generare la griglia
    2.1 selezionare il contenitore della griglia
    2.2 generare il singolo div
    2.3 applicare le classi di stilizzazione e inserire il numero relativo al quadrato a seconda della difficoltà (1-100 / 1-81 / 1-49)
    2.4 generare il numero corretto di quadrati all'interno della griglia a seconda della difficoltà
    (tutto questo sta in una funzione - la posso richiamare al click o inserendo la difficoltà nel prompt)
3. al clic del giocatore cambiare il colore del singolo quadratino -> aggiungere classe active che cambia lo sfondo con addEventListener

*/

// seleziona container griglia
const gridContainer = document.getElementById('container');
// selezione difficoltà
const difficultySel = prompt("Seleziona la difficoltà tra 'facile', 'medio' e 'difficile'.");


// generazione griglia in base a difficoltà
if (difficultySel == "facile") {

    for (let i = 0; i < 100; i++) {
        let newElem = elementGenerator("div", "squareEasy");
        gridContainer.appendChild(newElem);
    }

} else if (difficultySel == "medio") {

    for (let i = 0; i < 81; i++) {
        let newElem = elementGenerator("div", "squareMedium");
        gridContainer.appendChild(newElem);
    }

} else if (difficultySel == "difficile") {

    for (let i = 0; i < 49; i++) {
        let newElem = elementGenerator("div", "squareHard");
        gridContainer.appendChild(newElem);
    }
}

// al click sul quadratino cambia lo sfondo
let squareClick = document.querySelectorAll('[class^="square"]');
console.log(squareClick);

for (let i = 0; i < squareClick.length; i++) {
        squareClick[i].addEventListener ('click', 
        function() {
            squareClick[i].classList.add('active');
        }
    );
}









// ------------------------------------------------------------
// funzioni----------------------------------------------------

function elementGenerator(x, y) {
    let gridSquare = document.createElement(x);
    gridSquare.classList.add(y);
    return gridSquare
}
