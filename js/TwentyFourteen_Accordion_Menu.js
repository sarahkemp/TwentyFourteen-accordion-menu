function TwentyFourteen_Accordion_Menu(){
    
    // if we are not on mobile (menu icon is hidden) show sub items and bail
    if ( jQuery('#primary-navigation .menu-toggle').is(':hidden') ){
	// show sub menus
	jQuery('#menu-main-menu ul.sub-menu').show();
	return;
    } else{
	// hide sub menus
	jQuery('#menu-main-menu ul.sub-menu').hide();
    }
    
    // top level nav click function
    jQuery('#menu-main-menu > li > a').click(function(e){
	
	// store parent li to variable
	var parent_li = jQuery(this).parent('li');
	
	// if sub menu does not exist in parent li
	if ( !jQuery('ul.sub-menu', parent_li).length ) {
	    // show sub menus
	    jQuery('#menu-main-menu ul.sub-menu').show();    
	    return;
	}
	
	// if sub menu is already active, bail
	if ( parent_li.hasClass('sub-menu-active') ){
	    // show sub menus
	    jQuery('#menu-main-menu ul.sub-menu').show();
	    return;
	}
	
	// stop link click
	e.preventDefault();
	
	// store current sub menu in variable
	var current_submenu = jQuery('ul.sub-menu', parent_li);
	
	// slide up non-current sub menus
	jQuery('#menu-main-menu ul.sub-menu').not(current_submenu).slideUp(function(){
	    
	    // remove sub-menu-active class from all items except current parent li
	    jQuery('#menu-main-menu li').not(parent_li).removeClass('sub-menu-active');
	    
	});
	
	// slide down current sub menu
	current_submenu.slideDown(function(){
	    // add sub-menu-active to current parent li
	    parent_li.addClass('sub-menu-active');
	});
	
    });
    
}

// load menu accordion on doc ready
jQuery(document).ready(function($) {
    TwentyFourteen_Accordion_Menu();
});

// load menu accordion on window resize
jQuery(window).resize(function(){
    TwentyFourteen_Accordion_Menu();
});