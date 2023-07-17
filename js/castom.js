$(document).ready(function(){
    $('#name').focus(function(){
        $('#name').css('background-color', 'red');
    });

    $('#name').blur(function(){
        $('#name').css('background-color', '');
    });

    $('#email').change(function(){
        var a = $('#email').val();
        $('.test').html(a);
    });

    $('#name').select(function(){
        $('#name').css('background-color', 'yellow');
    });

    $('.first_box').scroll(function(){
        console.log("Your scroll now");
    });

    $(window).resize(function(){
        console.log("Your resizeing");
    });







    


});

