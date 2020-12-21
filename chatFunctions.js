let form = document.getElementById('form');
let messages = document.getElementById('messages')
let text = document.getElementById("text");

function submitChat() {
    let chatItem = document.createElement("li");
    chatItem.innerHTML = text.value;
    // let writtenText = text.value;
    console.log(text.value);
    messages.appendChild(chatItem);
    // chatItem.innerHTML(text.value);
    // chatItem.appendChild(writtenText);
    // messages.appendChild(chatItem);
}

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