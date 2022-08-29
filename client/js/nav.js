var count = 0;



function dropdown(){  
    var image = document.querySelector('.nav-hamburger');
    var clas = document.querySelector('.navigation');

if(count%2==0 || count==0){
    image.src="../images/close.png";
    clas.className ="navigation-active";
    count++;
}else{
    var c = document.querySelector('.navigation-active');
    image.src="../images/hamburger.png";
    c.className="navigation";
    count++;
}
}
