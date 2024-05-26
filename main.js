function convertBinaryToText() {
    var binaryInput = document.getElementById("binaryInput").value;
    var textOutput = binaryToText(binaryInput);
    document.getElementById("binaryOutput").textContent = textOutput;
}

function binaryToText(binary) {
    var binaryArray = binary.match(/.{1,8}/g); // Split binary into chunks of 8 bits
    var text = "";
    for (var i = 0; i < binaryArray.length; i++) {
        var decimal = parseInt(binaryArray[i], 2); // Convert binary to decimal
        var char = String.fromCharCode(decimal); // Convert decimal to character
        text += char;
    }
    return text;
}

function decodeRot13() {
    var rot13Input = document.getElementById("rot13Input").value;
    var textOutput = rot13(rot13Input);
    document.getElementById("rot13Output").textContent = textOutput;
}

function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

function decodeBase64() {
    var base64Input = document.getElementById("base64Input").value;
    var textOutput = decodeURIComponent(escape(atob(base64Input)));
    document.getElementById("base64Output").textContent = textOutput;
}
