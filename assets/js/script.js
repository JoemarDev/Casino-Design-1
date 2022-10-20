const ShowChildMenu = (elem) => {
    $(elem).find('.menu-child-lists').toggle();
}

$('.memo-table td:odd').click(function() {
   $(this).parent().next().toggle();
});