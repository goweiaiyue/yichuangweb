$(function() {
    var DOM = {
        all_menus:$('#all_menus'),
        menu_tab:$('.menu-tab ul li'),
        menu_panes:$('.menu-panes>ul>li'),
        Win:$(window),
        body:$('body'),
        back_top:$('#back_top')
    }

    DOM.Win.scroll(function() {
        if(DOM.Win.scrollTop() > 1000) {
            DOM.back_top.show()
        }else {
            DOM.back_top.hide()
        }
    })

    DOM.back_top.click(function() {
        DOM.Win.scrollTop(0)
    })



    var resetMenu = function() {
        DOM.menu_tab.removeClass('active').eq(0).addClass('active')
        DOM.menu_panes.hide().eq(0).show()
        $('.menu-toggle-wrap').hide()
    }

    DOM.all_menus.hover(function() {
        $(this).find('.menu-toggle-wrap').show()
    },function() {
        resetMenu()
    })

    DOM.menu_tab.hover(function() {
        DOM.menu_panes.hide()
        DOM.menu_tab.removeClass('active')
        $(this).addClass('active')
        let index = $(this).index()
        DOM.menu_panes.eq(index).show()
    })
    var mySwiper = new Swiper ('.banner-wrap .swiper-container', {
        loop: true, // 循环模式选项
        autoplay:true,
        autoHeight: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
    })  
    var certifySwiper = null
    if($('.comm-model .comm-wrap.wrap2').find('.swiper-container').length){
        certifySwiper = new Swiper('.comm-wrap.wrap2 .swiper-container', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 5,
            autoplay: false,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            on: {
                progress: function(progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0 + 1;
                        }
                        translate = slideProgress * modify * 140 + 'px';
                        scale = 1 - Math.abs(slideProgress) / 5;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function(transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }

                }
            }

        })
    }
})