let yourName = prompt ("Adiniz Nedir?")

let domObject = document.querySelector("#myName")
domObject.innerHTML = yourName

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var time = h + ":" + m + ":" + s
    let clock = document.querySelector("#myClock")
    clock.innerHTML = time
    setTimeout(showTime, 1000);
}
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

showTime()

