function run() {
    let htmlCode = document.getElementById("html-code").value;
    let csslCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("javascript-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode +"<style>" + csslCode + "<style>";
    output.contentWindow.eval(jsCode);
}