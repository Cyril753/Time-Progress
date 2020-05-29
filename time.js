var d = new Date()
    y = d.getFullYear();

document.getElementById("thisYear").innerHTML = d.getFullYear();
document.getElementById('nextYear').innerHTML = d.getFullYear() + 1;

// document.getElementById('fill').style.width = 

var startTime = y + '-01-01 00:00:00:000',
    pervDate = new Date(startTime),
    pervDate = new Date(startTime.replace(/-/g, '/'));

var endTime = y + 1 + '-01-01 00:00:00:000',
    endDate = new Date(endTime),
    endDate = new Date(endTime.replace(/-/g, '/'));

// var pervTime = pervDate.getTime(),
//     currentTime = d.getTime(),
//     endTime = endDate.getTime();

// document.getElementById('test').innerHTML = (currentTime - pervTime) / (endTime - pervTime);
// document.getElementById('fill').style.width = (currentTime - pervTime) / (endTime - pervTime) * 1500 + 'px';

function init(){
    var pervTime = pervDate.getTime(),
        currentTime = d.getTime(),
        endTime = endDate.getTime(),
        fillWidth = (currentTime - pervTime) / (endTime - pervTime) * 1500,
        fill = document.getElementById('fill'),
        i = 0,
        animation = setInterval(frame, 10);

    function frame(){
        if(i == Math.round(fillWidth)){
            clearInterval(animation);
        }else{
            i++;
            fill.style.width = i + 'px';
        }
    }
        
}

window.onload = init();




