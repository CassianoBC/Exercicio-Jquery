$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefas = $('#tarefa').val();
        const novaTarefa = $(`<li> ${tarefas} </li>`);
        
        $(novaTarefa).appendTo('ul');

        $('#tarefa').val('');
    })

    $("ul").on('click', 'li', function() {
        $(this).css("text-decoration", "line-through");
    });
    
}) 
