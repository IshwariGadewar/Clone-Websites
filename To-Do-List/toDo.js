$(document).ready(function(){

    function addTask(){
        var toAdd = $('input[name=listItem]').val();
        if(toAdd.trim() !== ""){
            $('ul').append('<li>'+toAdd+'</li>');
            $('input[name=listItem]').val("");
        }
    }

    $("#button").click(function(){
       addTask();
    });

    $('input[name=listItem]').keypress(function(event) {
        if(event.which === 13){
            addTask();
            event.preventDefault();
        }
    })

    $(document).on('dblclick','li',function(){
        $(this).toggleClass('strike').fadeOut('slow');
    })

    $('ul').sortable();

});