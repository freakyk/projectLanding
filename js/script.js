$(function(){

    let deviceWidth = $("html, body").width();
    let footerOffset = $("#footer").offset().top;

    //  header scroll function
    $(window).scroll(function(){
        let scrollTop = $("html, body").scrollTop();
        if(scrollTop == 0){
            $("#header").removeClass("scroll");
            $("#fixedArea").removeClass("on");
        }else{
            $("#header").addClass("scroll");
            $("#fixedArea").addClass("on");
        }
        // console.log(scrollTop +"////" + footerOffset);
        if(deviceWidth <= 850){
            if(footerOffset <= (scrollTop + 800)){
                $("#fixedArea").addClass("hold");
            }else{
                $("#fixedArea").removeClass("hold");
            }
        }else{
            if(scrollTop > "1900"){
                $("#fixedArea").addClass("hold");
            }else{
                $("#fixedArea").removeClass("hold");
            }
        }

    });
    
    $(".totop").click(function(){
        $("html, body").stop().animate({scrollTop : 0},500);
    });

    // email 유효성 검사
    $(".m_open").click(function(){
        let emailval = $("input#email").val();

        if(emailval == ""){
            // 이메일을 입력하지않았을때
            alert("구독할 이메일을 입력해주세요");
        }else{
            // console.log(emailval.indexOf('@'));
            if (emailval.indexOf('@') > 0 ){
                let valsplit = emailval.split("@");
                let vallength = valsplit.length;
                let valhost = valsplit[1].split(".");
                let valhostlength = valhost.length;
                // console.log(valsplit);

                if(vallength <= 1){
                    // @가 없을때
                    alert("유효한 이메일을 입력해주세요 ( ex. abc@email.com )");
                }else{
                    if(valhostlength <= 1){
                        // @뒤에 .이 없을떄
                        alert("유효한 이메일을 입력해주세요 ( ex. abc@email.com )");
                    }else if(valhost[1] == ""){
                        // .뒤에 주소가 없을떄
                        alert("유효한 이메일을 입력해주세요 ( ex. abc@email.com )");
                    }else{
                        $("#modal").fadeIn(100);
                    }
                }
            }else{
                // @만 있을때 or @앞뒤가 유효하지 않을 때
                alert("유효한 이메일을 입력해주세요 ( ex. abc@email.com )");
            }
        }
        
    });
    $(".m_close").click(function(){
        $("#modal").fadeOut(100);
    });

    // main visual slide
    const visual_swiper = new Swiper('.visual_swiper', {
        loop: true,
        _autoplay: {
            delay: 2000,
        },
        speed: 700,
    });

    $("#header .ham").click(function(){
        $("#header nav.menu").addClass("open");
    });
    $("#header nav.menu .side_close").click(function(){
        $("#header nav.menu").removeClass("open");
    });



});