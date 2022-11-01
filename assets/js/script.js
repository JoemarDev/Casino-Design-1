const ShowChildMenu = (elem) => {
    $(elem).find('.menu-child-lists').toggle();
}

$('.memo-table td:odd').click(function() {
   $(this).parent().next().toggle();
});

const PagePopupHandler = () => $('.page-body-pop-up').toggle();

const PageChildHandler = (elem, type) => {
    $('.page-tab-menu-child').removeClass('active')
    $(elem).addClass('active');

    if(type == 1) {
        $('.popup-child-content-1').show();
        $('.popup-child-content-2').hide();
    } if(type ==2) {
        $('.popup-child-content-1').hide();
        $('.popup-child-content-2').show();
    }
}