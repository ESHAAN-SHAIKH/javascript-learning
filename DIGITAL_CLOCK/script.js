


function clock(){
    let date = new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    document.getElementById("result").innerHTML=`${hours} :${minutes} : ${seconds} `
}
setInterval(clock,1000);