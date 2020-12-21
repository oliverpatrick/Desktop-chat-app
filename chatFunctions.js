let form = document.getElementById('form');
let messages = document.getElementById('messages')
let text = document.getElementById("text");

function submitChat() {
    let chatItem = document.createElement("li");
    chatItem.innerHTML = text.value;
    console.log(text.value);
    messages.appendChild(chatItem);
}

//hello
// var socket = io();
// //addeventlistener
// form.submit()
// //onchange or onsubmit
// //get value
// //prevent page reload
// e.preventDefault();
// //submit change
// form.submit()
// socket.emit('chat message', form.elements[0].value);
// //set input to blank
// $('#m').val('')