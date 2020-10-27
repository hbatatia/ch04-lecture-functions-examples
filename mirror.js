function mirror() {
    const mytext = document.getElementById('mytextID').value;


    const mirror_span = document.getElementById('mirrortextID');
    const mirror_text = computeMirror(mytext);
    mirror_span.innerHTML = mirror_text;
    if (mytext == mirror_text) {
        mirror_span.style.color = "red";

    } else {
        mirror_span.style.color = "black";
    }
}

function computeMirror(text) {
    result = "";

    for (let i = text.length - 1; i >= 0; i--) {
        result = result + text.charAt(i);
    }

    return result;
}