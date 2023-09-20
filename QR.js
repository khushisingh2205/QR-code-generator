function generateQRCode() {
    const qrInput = document.getElementById('qr-input').value;
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrInput,
        width: 128,
        height: 128
    });
}