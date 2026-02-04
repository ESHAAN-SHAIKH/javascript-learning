


function clock(){
    let date = new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    document.getElementById("box1").innerText=`${hours} `
    document.getElementById("box2").innerText=`${minutes} `
    document.getElementById("box3").innerText=`${seconds} `

}
setInterval(clock,1000);