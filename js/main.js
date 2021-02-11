$(document).ready(function(){
    $('#hamburger').click(function(){
        $('#sideMenu').css("display", "block");
        $('#sideMenu').animate({right : "0"},400);
    });
    
    $('#cross').click(function(){
        $('#sideMenu').animate({right : "-200px"},400,function(){
            $(this).css("display", "none");
        });
    });
    
});