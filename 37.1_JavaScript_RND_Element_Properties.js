let usernameInput = document.getElementById('username-input');
let inputHtml = usernameInput.outerHTML;
console.log(usernameInput);

let inputPadding = window.getComputedStyle(usernameInput).padding;
console.log(inputPadding);
