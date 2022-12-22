function formSwitchFlight(){
    var hotelElement = document.getElementById("hotel")
    var rentalElement = document.getElementById("rental")
    var flightElement = document.getElementById("flight")
    flightElement.classList.add("show")
    rentalElement.classList.remove("show")
    hotelElement.classList.remove("show")
    var flightTag = document.getElementById("flight-tag")
    var rentalTag = document.getElementById("rental-tag")
    var hotelTag = document.getElementById("hotel-tag")
    flightTag.classList.add("highlightTag")
    rentalTag.classList.remove("highlightTag")
    hotelTag.classList.remove("highlightTag")
}

function formSwitchHotel(){
    var flightElement = document.getElementById("flight")
    var rentalElement = document.getElementById("rental")
    var hotelElement = document.getElementById("hotel")
    flightElement.classList.remove("show")
    rentalElement.classList.remove("show")
    hotelElement.classList.add("show")
    var flightTag = document.getElementById("flight-tag")
    var rentalTag = document.getElementById("rental-tag")
    var hotelTag = document.getElementById("hotel-tag")
    flightTag.classList.remove("highlightTag")
    rentalTag.classList.remove("highlightTag")
    hotelTag.classList.add("highlightTag")
}

function formSwitchRental(){
    var hotelElement = document.getElementById("hotel")
    var flightElement = document.getElementById("flight")
    var rentalElement = document.getElementById("rental")
    flightElement.classList.remove("show")
    rentalElement.classList.add("show")
    hotelElement.classList.remove("show")
    var flightTag = document.getElementById("flight-tag")
    var rentalTag = document.getElementById("rental-tag")
    var hotelTag = document.getElementById("hotel-tag")
    flightTag.classList.remove("highlightTag")
    rentalTag.classList.add("highlightTag")
    hotelTag.classList.remove("highlightTag")
}