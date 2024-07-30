const img = document.querySelector('img');
const ssid = document.querySelector('.ssid');
const password = document.querySelector('password')
const button = document.querySelector('button')

function update() {
    const wifi = 'WIFI:WPA:S:${ssid.value};P:${password value};;';
    img.src = '    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WIFI:S:YOUR_SSID;T:WPA;P:YOUR_PASSWORD;;" alt="WiFi QR Code">';
}

ssid.addEventListener(
    'keyup',
    update,
);

password.addEventListener(
    'keyup',
    update,
);

button.addEventListener(
    "click",
        window.print()
);

function printWifiCard() {
    // Save the original contents of the document
    var originalContents = document.body.innerHTML;

    // Get the content to print
    var printContents = document.querySelector('form').outerHTML;

    // Replace the body content with the content to print
    document.body.innerHTML = printContents;

    // Trigger the print dialog
    window.print();

    // Restore the original document content
    document.body.innerHTML = originalContents;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("printButton").addEventListener("click", printWifiCard);
});
