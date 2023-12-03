// Javascript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://6nzcnzdx4uehjpnuhcsh2n7udq0uyvev.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter()