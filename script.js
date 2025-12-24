function temperature(){
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f.toFixed(2);
    document.getElementById("temp-msg1").innerText =
        "Converted successfully! " + c + "°C equals " + f.toFixed(2) + "°F.";

}


function weight(){
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p.toFixed(2);
    document.getElementById("temp-msg2").innerText =
        "Converted successfully! " + kg + "KG equals " + p.toFixed(2) + "Pound.";
}


function distance(){
    
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m.toFixed(2);
    document.getElementById("temp-msg3").innerText =
        "Converted successfully! " + km + "KM equals " + m.toFixed(2) + "M.";
}


if (navigator.onLine === false) {
  alert("You are offline. App is running from cache.");
}
