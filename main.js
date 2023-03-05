$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
                el: this.el,
                multiple: this.multiple
            },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.accordion-menu'), false);
})

$(".burger").on("click", function () {
    $(".fas, nav").toggleClass("off");

})

$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();


    const $wrapper1 = $('.about_m');
    const wrapper1FromTop = $wrapper1.offset().top;

    if (scrollValue > wrapper1FromTop - windowHeight) {
        $wrapper1.addClass('active')
    }
    if (scrollValue < 100) {
        $(".about_m").removeClass('active')
    }

    const $wrapper2 = $('.gallery_m');
    const wrapper2FromTop = $wrapper2.offset().top;

    if (scrollValue > wrapper2FromTop - windowHeight) {
        $wrapper2.addClass('active')
    }
    if (scrollValue < 100) {
        $(".gallery_m").removeClass('active')
    }

    const $wrapper3 = $('.contact_m');
    const wrapper3FromTop = $wrapper3.offset().top;

    if (scrollValue > wrapper3FromTop - windowHeight) {
        $wrapper3.addClass('active')
    }
    if (scrollValue < 100) {
        $(".contact_m").removeClass('active')
    }

})