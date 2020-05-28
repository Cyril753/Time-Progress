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

pervTime = pervDate.getTime();
currentTime = d.getTime();
endTime = endDate.getTime();

// document.getElementById('test').innerHTML = (currentTime - pervTime) / (endTime - pervTime);

document.getElementById('fill').style.width = (currentTime - pervTime) / (endTime - pervTime) * 1500 + 'px';

