//recupero dati
let nameSurname = document.getElementById('name');
let distance = document.getElementById('distance');
let age = document.getElementById('age');

//dati table
let elName = document.getElementById('elName');
let elOfferta = document.getElementById('elOfferta');
let elCarrozza = document.getElementById('elCarrozza');
let elCode = document.getElementById('elCode');
let elCost = document.getElementById('elCost');

// invia button
let createTicket = document.getElementById('create-ticket');
createTicket.addEventListener('click', function(){
    const ticketName = nameSurname.value;
    const travelDistance = distance.value;
    const ageTraveller = age.value;
    //calcoli perbiglietti
    let normalPrice = (travelDistance * 0.21);
    let underagePrice = (normalPrice - (normalPrice * (20 / 100)));
    let overPrice = (normalPrice - (normalPrice * (40 / 100)));
    console.log(ticketName, travelDistance, ageTraveller);
    let price;
    let offerta;

    if(ageTraveller == 'underage'){
        price = underagePrice
        offerta = '-20% Minorenne'
    } else if(ageTraveller == 'over65'){
        price = overPrice
        offerta = '-40% Over 65'
    } else {
        price = normalPrice
        offerta = 'Nessun offerta'
    };

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    let carrozza = getRndInteger(1, 12);
    let code = getRndInteger(5000, 10000)

    //stampo dati in table
    elName.innerText = ticketName;
    elOfferta.innerText = offerta;
    elCarrozza.innerText = carrozza;
    elCode.innerText = code;
    elCost.innerText = price.toFixed(2);
});

// annulla button
let cancelTicket = document.getElementById('reset');
cancelTicket.addEventListener('click', function() {
    document.getElementById('name').value = '';
    document.getElementById('distance').value = '';
    elName.innerText = '';
    elOfferta.innerText = '';
    elCarrozza.innerText = '';
    elCode.innerText = '';
    elCost.innerText = '';
});