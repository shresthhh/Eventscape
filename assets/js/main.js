(function ($) {
    "use strict";

    // AOS Init
    AOS.init();

})(jQuery);

$(".event-item").on('click', function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

$(".faq-q-tab").hover(function(){
	$('.fa-angle-down',this).toggleClass('osc');
});

$(".faq-q-tab").on('click',function(){
	$(this).children('.faq-a-tab').slideToggle();
	$('.fa-angle-up',this).toggleClass('hide');
	$('.fa-angle-down',this).toggleClass('hide');
});

timeout = null;
function typeWriter(target, textList, placeholder = false, i = 0, textList_i = 0, delay = 250) {
    if (!i) {
        if (placeholder) {
            document.querySelector(target).placeholder = "";
        }
        else {
            document.querySelector(target).innerHTML = "";
        }
    }
    text = textList[textList_i];
    if (i < text.length) {
        if (placeholder) {
            document.querySelector(target).placeholder += text.charAt(i);
        }
        else {
            document.querySelector(target).innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, delay, target, textList, placeholder, i, textList_i);
    }
    else {
        textList_i++;
        if (typeof textList[textList_i] === "undefined")  {
            setTimeout(typeWriter, (delay*5), target, textList, placeholder);
        }
        else {
            i = 0;
            setTimeout(typeWriter, (delay*3), target, textList, placeholder, i, textList_i);
        }
    }
}
// List consists of one string as of now. Add more if neccesary or alter code and use string instead of a list
textList = ["Search for an Event"];
returnValue = typeWriter("#search-event", textList, true);