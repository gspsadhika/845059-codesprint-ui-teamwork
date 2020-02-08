let formIsValid = false;

function toggleButtonState() {
    let button = document.getElementById("placeOrderBtn");
    if (formIsValid) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function checkOnlyText(ele) {
    let string = new String(ele.value);
    let id = new String(ele.id);
    let errMsg = document.getElementById(id+"Error")
    console.log('here');
    if (string.match("[a-zA-Z]+") && !string.match("[0-9]+")) {
        console.log('valid');
        errMsg.style.display = "none";
        formIsValid = true;
        toggleButtonState();
    }
    else {
        console.log('invalid');
        errMsg.style.display = "block";
        disableButton();
    }
}

function onlyText(event){
    let ascii = event.which ? event.which : event.keyCode;
}

function limitPaise(ele) {
    let errMsg = document.getElementById("limitError");
    if (ele.value > 100 || ele.value < 0) {console.log("here");
        errMsg.style.display = "block";
        disableButton();
    }
    else {
        errMsg.style.display = "none";

    }
}

function disableButton() {
    formIsValid = false;
    toggleButtonState();
}
function enableButton() {
    formIsValid = true;
    toggleButtonState();
}

function phoneDigit1(event) {
    let currentValue = event.target.value
    let ascii = event.which ? event.which : event.keyCode;
    if ((ascii < 49 || ascii > 57 || currentValue > 0) && (ascii !== 8 && ascii !== 46 && ascii !== 37 && ascii !== 39)) {
        event.preventDefault();
    }
}

function phoneDigits(event) {
    let currentValue = event.target.value
    let ascii = event.which ? event.which : event.keyCode;
    if ((ascii < 47 || ascii > 57 || currentValue > 0) && (ascii !== 8 && ascii !== 46 && ascii !== 37 && ascii !== 39)) {
        event.preventDefault();
    }
}

function gotoNextDigit(ele) {
    ele.nextElementSibling.focus();
}

function submitForm() {
    let amount = +(document.getElementById("amountINR").value.toString() + "." + document.getElementById("amountPaise").value.toString())
    let recipientName = document.getElementById("rFirstName").value + " " + document.getElementById("rLastName").value;
    let streetAddress = document.getElementById("streetAddress").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let country = document.getElementById("country").value
    let buyersName = document.getElementById("bFirstName").value + " " + document.getElementById("bLastName").value;
    let phoneNumber =
      document.getElementById("phoneNumCode").value +
      document.getElementById("phoneNumDigit1").value +
      document.getElementById("phoneNumDigit2").value +
      document.getElementById("phoneNumDigit3").value +
      document.getElementById("phoneNumDigit4").value +
      document.getElementById("phoneNumDigit5").value +
      document.getElementById("phoneNumDigit6").value +
      document.getElementById("phoneNumDigit7").value +
      document.getElementById("phoneNumDigit8").value +
      document.getElementById("phoneNumDigit9").value +
      document.getElementById("phoneNumDigit10").value;

    let email = document.getElementById("email").value;

    let record = {
        amount : amount,
        recipientName : recipientName,
        streetAddress : streetAddress,
        city : city,
        state : state,
        country : country,
        buyersName : buyersName,
        phoneNumber : phoneNumber,
        email : email
    }

    let array = JSON.parse(localStorage.getItem("giftRecords")) || [];
    array.push(record);
    localStorage.setItem("giftRecords",JSON.stringify(array))
    window.location = "viewOrders.html";
}