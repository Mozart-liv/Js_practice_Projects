function displyTime(){
    var dateTime= new Date();
    var hur= dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec= dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hur >= 12){
        session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM"
    };

    if(hur>12){
        hur = hur -12;
    };

    document.getElementById("hour").innerHTML = hur;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
};
setInterval(displyTime );


