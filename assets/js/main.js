$(function(){ //로드후실행


    /**
     * @sidemenu오픈
     */

        $('.btn.menu').click(function(e){
            e.preventDefault(); //링크이동막기
            $('.side-menu').addClass('on')
        })

        $('.btn-close').click(function(e){
            e.preventDefault();
            $('.side-menu').removeClass('on')
        })



    /**
     * @topmenu오픈
     */

        $('.top-menu .btn-more').click(function(e){
            e.preventDefault();
        //     $('.category-area .category-list').addClass('on');
        //     $('.category-area .all').addClass('on');
        //     $('.sub-category-area').addClass('on');
        //     $('.top-menu .btn-more').addClass('on')
        // })

        // $(document).on("click",'.btn-more.on',function(){
        //     e.preventDefault(); 
        //     $('.sub-category-area').removeClass('on');
        //     $('.top-menu .btn-more').removeClass('on')
        // })


        if ($(this).hasClass('on')) {
            $('.category-area .category-list').removeClass('on');
            $('.category-area .all').removeClass('on');
            $('.sub-category-area').removeClass('on');
            $('.top-menu .btn-more').removeClass('on');
        } else {
            $('.category-area .category-list').addClass('on');
            $('.category-area .all').addClass('on');
            $('.sub-category-area').addClass('on');
            $('.top-menu .btn-more').addClass('on')
        }
    })



    /**
     * @sidemenu
     */

        $('.item').click(function(e){
            e.preventDefault();
            $(this).siblings('.sub-list').stop().slideToggle()

            if($(this).siblings('.btn-open').hasClass('on')){
                $(this).siblings('.btn-open').removeClass('on');
            }else{
                $(this).siblings('.btn-open').addClass('on');
            }
            
            

        })


    
    /**
     * @slidebanner
     * 
     * 
     */

    const mainSlide = new Swiper(".main-slide", {
        // 
        // speed:1000,
        autoplay:{
            delay:1000,
            disableOnInteraction: false,
        },
        pagination:{
            el:".swiper-pagination"
        }
    });

    $('.sc-slidebanner .group-tab .tab').click(function(){
        idx=$(this).data('tab')
        $(this).addClass('on').siblings().removeClass('on');
        mainSlide.slideTo(idx)
    })




    /**
     * @notice슬라이드
     * 
     * 
     */
    const noticeSlide = new Swiper(".notice-slide", {
        // 
        slidesPerView:3,
        spaceBetween:43,
        loop:true,
        autoplay:{
            delay:1000,
            disableOnInteraction: false,
        },
        pagination:{
            el:".fraction",
            type:"fraction"
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        }
    });

    $('.notice-slide .autoplay').click(function(){
        // mainSlide.autoplay.start()

        if($(this).hasClass('on')){
            $(this).removeClass('on').text('일시정지')
            noticeSlide.autoplay.start()
        }else{
            $(this).addClass('on').text('재생')
            noticeSlide.autoplay.stop()
        }

    })



    /**
     * @관련사이트
     * 
     */
    $('.sc-related .btn-nav').click(function(){

        url = $(this).data('url');

        if(url){
            window.open(url);
            return false; //탈출
        }

        if($(this).hasClass('on')){
            $('.btn-nav').removeClass('on');
            $('.sub-area').slideUp();
            return false; //탈출
        }


        $('.btn-nav').removeClass('on');
        $('.sub-area').slideUp();
        $(this).addClass('on').siblings('.sub-area').slideDown();
    })

    $('.sc-related .sub-list li:first-child').keydown(function(e){
        key = e.keyCode;
        if(key === 9 && e.shiftKey){
            $('.btn-nav').removeClass('on');
            $('.sub-area').slideUp();
        }
    })

    $('.sc-related .sub-list li:last-child').keydown(function(e){
        if(key === 9 && !e.shiftKey){
            $('.btn-nav').removeClass('on');
            $('.sub-area').slideUp();
        }
    })




    // $('.navbtn').click(function(e){
    //     e.preventDefault();

    //     subAll = $('.more-listitem');
    //     subList = $(this).siblings('.more-listitem');

    //     if ($(this).hasClass('on')) {
    //         $('.navbtn').removeClass('on')
    //         subAll.stop().slideUp();
    //     } else {
    //         $('.navbtn').removeClass('on')
    //         $(this).addClass('on')

    //         subAll.stop().slideUp();
    //         subList.stop().slideDown();
    //     }
    // });



    $(window).scroll(function(){
        curr = $(this).scrollTop();
        // target = $('header').offset().top;

        if (curr > 0) {
            $('#btnTop').addClass('show')
        } else {
            $('#btnTop').removeClass('show')
        }
    })


    $('#btnTop').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},300)
        // window.scrollTo({top:0,behavior:"smooth"})
    })



}) //지우지마