
$(document).ready(function() {

    let menuIcon = $('.menu-icon');
    let submenu = $('.submenu');

    menuIcon.click(function(){

        $(this).toggleClass('active');
        
        submenu.toggleClass('active');
    });


    let openArrow = $('.open');

    openArrow.click(function(event){
        event.preventDefault();

        let subitem = $(this).closest('li').find('.subitem');

        subitem.slideToggle(300);
        
    });
});