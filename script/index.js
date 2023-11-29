$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        let entrada = $('#entrada').val();
        if (entrada !== ''){
            $('#new-list').append('<li><span class="tarefa">' + entrada + '</span><button class="remove">Remover</button> <button class="feito">Feito</button></li>' );
            $('#entrada').val('');
        }
    });

    $('#new-list').on('click', '.remove', function(){
        $(this).closest('li').remove();
    });

    $('#new-list').on('click', '.feito', function(){
        $(this).closest('li').find('.tarefa').css('text-decoration', 'line-through');
    })
});
