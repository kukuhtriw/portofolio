var header = document.getElementById("header");
var head = document.getElementById("head1");
var heads = document.getElementById("head2");
var nav = document.getElementById("navigation");

window.onload = function(){
    head.classList.add("head1panjang");
    heads.classList.add("head2hilang");
    head.classList.add("navtengah");
}

window.onscroll = function() {

   

    var  sharesoc = document.querySelector('.sfsi_wDiv');

    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if(top > 503 ){
        sharesoc.style.position = "fixed";
        sharesoc.style.left = "65px";
        sharesoc.style.top = "80px";
        $('.sfsi_wDiv').attr('id', 'widgetshare');

    }else{
        sharesoc.style.position = "static";
        sharesoc.style.left = "0";
        $('.sfsi_wDiv').removeAttr('id');
    }

}
}


 var  sharesoc = document.querySelector.('.sfsi_widget');

    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if(top > 200 ){
        sharesoc.style.position = "fixed";
        sharesoc.style.top = "120px";

    }else{
        sharesoc.style.position = "static";
        sharesoc.style.top = "0";

    }
