/**
 * Created by royex technologies on 4/28/2019.
 */
var customDropdown = $('.custom-dropdown'),
    dropdownLink = $('.dropdown-link'),
    cartDropdownLink = $('.cart-dropdown-link'),
    cartDropdown = $('.cart-dropdown'),
    cartclose = $('.cart-dropdown .cart-close'),
    searchTextBox = $('.search-dropdown input[type=text]'),
    homeSlidervar = $('.home-slider'),
    homeSliderNext = $('.slider-area .next'),
    homesliderPrev = $('.slider-area .prev'),
    overlayer = $('.overlayer'),
    nanoScroller = $('.nano');


$(document).on('ready',function (event) {

    // if($(dropdownLink).length>0){
    //     $(dropdownLink).hover(function () {
    //         $(this).children('.custom-dropdown').addClass('dropdown-active');
    //     },function () {
    //         $(this).children('.custom-dropdown').removeClass('dropdown-active');
    //     });
    // }

    if($(dropdownLink).length>0){
        $(dropdownLink).click(function (e) {
            $(this).children('.custom-dropdown').addClass('dropdown-active');
            // $(overlayer).show();
        });
        //
        //
        // $(overlayer).click(function () {
        //     $('.custom-dropdown').removeClass('dropdown-active');
        //     $(this).hide();
        // });



    }

    if($(cartDropdownLink).length>0){
        $(cartDropdownLink).hover(function () {
            $(cartDropdown).addClass('dropdown-active');
        },function () {
            $(cartDropdown).removeClass('dropdown-active');
        });

        $(cartDropdownLink).click(function () {
            cartDropdown.addClass('dropdown-active');
            overlayer.show();
        });

        $(overlayer).click(function () {
            cartDropdown.removeClass('dropdown-active');
            overlayer.hide();
        });
    }

    if($(cartDropdown).length>0){
        $(cartDropdown).hover(function () {
            $(this).addClass('dropdown-active');
        },function () {
            $(this).removeClass('dropdown-active');
        });

        $(cartclose).click(function () {
            $(cartDropdown).removeClass('dropdown-active');
        });
    }

    if($(searchTextBox).length>0){
        $(searchTextBox).focus(function () {
            $(this).next().addClass('input-focused');
        });

        $(searchTextBox).blur(function () {
            $(this).next().removeClass('input-focused');
        })
    }

    // nano scroller
    $(nanoScroller).nanoScroller();
    // nano scroller

    if($(homeSlidervar).length>0){
        homeSlider(homeSlidervar,homesliderPrev,homeSliderNext);
    }


});




// function list
// === home slider === //
function homeSlider(homeSlider,prev,next) {
    if(homeSlider.length){
        //showing nothing when owl-carousel is not initialized
        // $(homeSlider).on('initialized.owl.carousel',function () {
        //     $(this).removeClass('display-none');
        // });
        //showing nothing when owl-carousel is not initialized
        homeSlider.owlCarousel({
            merge: true,
            smartSpeed: 2000,
            loop: true,
            animateOut:'fadeOut',
            autoplay: false,
            dots:true,
            stopOnHover: true,
            autoplayTimeout: 5000,
            margin: 0,
            items:1
        });

        $(next).click(function(){
            homeSlider.trigger('next.owl.carousel');
        });

        $(prev).click(function(){
            homeSlider.trigger('prev.owl.carousel');
        });
    }
}
// === home slider === //
// function list