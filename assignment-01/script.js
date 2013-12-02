var body = document.body;
var banner = document.createElement('banner');
var bannerText = document.createElement('banner-text');
var left = document.createElement('left'); 
var right = document.createElement('right');


//banner
banner.appendChild(document.createTextNode("Banner Tag"));
banner.style.marginBottom = "10px";
banner.style.display = "block";
banner.style.backgroundColor = "green";
banner.style.width = "1000px";
banner.style.height = "200px";
body.appendChild(banner);

//left
left.appendChild(document.createTextNode("Left Tag"));
left.style.marginRight = "10px";
left.style.float = "left";
left.style.display = "inline-block";
left.style.backgroundColor = "yellow";
left.style.width = "300px";
left.style.height = "500px";
body.appendChild(left);

//right
right.appendChild(document.createTextNode("Right Tag"));
right.style.float = "left";
right.style.display = "inline-block";
right.style.backgroundColor = "blue";
right.style.width = "690px";
right.style.height = "500px";
body.appendChild(right);

//.removeChild('element');
//body.removeChild(right); 
