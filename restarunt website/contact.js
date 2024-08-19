
setTimeout(() => {
    prompt("could you please  share your feedback");
}, 8000);


function sendMessage() {
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !subject || !message) {
        alert("Please enter all contact details before sending the message.");
        return;
    }
    alert("Your message has been sent successfully!");
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}