var id;
var array;
$(document).ready(function(){
    $('.edit-000').on('click', function(){
        $.post(
            'process.php',
            {
                id : id
            },
            function(data){
                array = data.split(',');
            }
        );

        setTimeout(() => {
            var inputs = $('.input-to-update');
            for (let index = 0; index < inputs.length; index++) {
                 inputs[index].value = array[index];
            }
        }, 500);
    });
});

function myFunction(id_000){
    id = id_000;
}