$('.navmenuleft').on('mouseenter','li',function(){//鼠标移入nav左边
    var z_bwidth=$('body').css('width');
    //设置护肤二级菜单的宽度和left
    $('.protect').css('width',z_bwidth);
    $('.protect').css('left',-$('.protectbox').offset().left+'px');
    $('.protect').css('paddingLeft',$('.protectbox').offset().left+10+'px');
    //设置彩妆二级菜单的宽度和left
    $('.makeup').css('width',z_bwidth);
    $('.makeup').css('left',-$('.makeupbox').offset().left+'px');
    $('.makeup').css('paddingLeft',$('.makeupbox').offset().left+10+'px');
    //设置香水二级菜单的宽度和left
    $('.perfume').css('width',z_bwidth);
    $('.perfume').css('left',-$('.perfumebox').offset().left+'px');
    $('.perfume').css('paddingLeft',$('.perfumebox').offset().left+10+'px');
    if($(this).children().hasClass('protect')){
        $('.protect').fadeIn();
        $('.protectbox a span').addClass('stshow');
        $('.mask').css('display','block');
    };
    if($(this).children().hasClass('makeup')){
        $('.makeup').fadeIn();
        $('.makeupbox a span').addClass('stshow');
        $('.mask').css('display','block');
    };
    if($(this).children().hasClass('perfume')){
        $('.perfume').fadeIn();
        $('.perfumebox a span').addClass('stshow');
        $('.mask').css('display','block');
    };
    if($(this).children().hasClass('navmenu-top')){
        $('.navmenu-top').fadeIn();
        $('.navmenubox a span').addClass('stshow');
        $('.mask').css('display','block');
    };
});

$('.navmenuleft').on('mouseleave','.benner',function(){//鼠标移出nav左边
    $('.mask').fadeOut();
    $('.protect').fadeOut();
    $('.makeup').fadeOut();
    $('.perfume').fadeOut();
    $('.navmenu-top').fadeOut();
    // $(".navmenuleft li div").stop().fadeOut();
    $('.navmenuleft li a span').removeClass('stshow');
});


//设置右边三个图标的二级菜单的right
//发现offset（）不是获取元素到视口的距离，而是元素到文档的距离
var z_navmenuLeft='-'+$('.navmenu').css('marginLeft');
$('.navchoose-sreach').css('right',z_navmenuLeft);
$('.navchoose-buy').css('right',z_navmenuLeft);//估计要修改

// 判断鼠标移入移出右边三个图标
$('.navchoose').on('mouseenter','em',function(){
    if($(this).siblings().hasClass('navchoose-sreach')){
        $('.navchoose-sreach').css('display','block');
        $('.navchoose-sreachbox').addClass('stshow');
    };
    if($(this).siblings().hasClass('navchoose-buy')){
        $('.navchoose-buy').css('display','block');
        $('.navchoose-buybox').addClass('stshow');
    };
    if($(this).siblings().hasClass('navchoose-log')){
        //保证每次打开时都是登陆框
        $('.navchoose-log-title').find('span').removeClass('logtitle-span');
        $('.navchoose-log-title').find('span').eq(0).addClass('logtitle-span');
        $('.navchoose-logtop-inp').removeClass('dis-none');
        $('.navchoose-logtopok').addClass('dis-none');
        //整个二级菜单出现
        $('.navchoose-log').css('display','block');
        $('.navchoose-logbox').addClass('stshow');
    };
});

$('.navchoose').on('mouseleave','.navshop',function(){
    $('.navchoose-sreach').css('display','none');
    $('.navchoose-buy').css('display','none');
    $('.navchoose-log').css('display','none');
    $('.navchoose div').removeClass('stshow')
});


//产品筛选收起效果
let a='';
let b=true;
$('.aside-choose').click(function(){
    if(!a){
        $('.aside-chooseicon').html('&#xe635;');
        $('.aside-choose-cont').hide(300);;
        a=true;   
    }else{
        $('.aside-chooseicon').html('&#xe61d;');
        $('.aside-choose-cont').show(300);;
        a='';
    }
});

// 价格筛选收起打开效果
$('.aside-priceicon').click(function(){
    if(!b){
        $('.aside-priceicon').html('&#xe635;');
        $('.aside-price').hide(300);
        b=true;   
    }else{
        $('.aside-priceicon').html('&#xe61d;');
        $('.aside-price').show(300);
        b='';
    }
});

//点击勾选效果
let icon=true;
$('.aside-choose-cont').on('click','li',function(){
    $(this).find('i').toggleClass('aside-choose-conticon').html('&#xe78f;')
})

//登陆注册
$('.navchoose-log-title').on('mousemove','span',function(){
    $('.navchoose-log-title').find('span').removeClass('logtitle-span');
    $(this).toggleClass('logtitle-span');
    if($(this).attr("abc")=='logon'){
        $('.navchoose-logtop-inp').css('display','none');
        $('.navchoose-logtopok').removeClass('dis-none');
        $('.navchoose-log-password').css('display','none');
    }
    if($(this).attr("abc")=='land'){
        $('.navchoose-logtopok').addClass('dis-none');
        $('.navchoose-logtop-inp').css('display','none');
        $('.navchoose-log-password').css('display','block');

    }
})

//切换密码登陆
$('.navchoose-logtop-tab').click(function(){
    // $('.navchoose-logtop-inp').addClass('dis-none');
    $('.navchoose-logtop-inp').css('display','none');
    $('.navchoose-log-password').css('display','block');
})
$('.navchoose-log-password-tab').click(function(){
    $('.navchoose-logtop-inp').css('display','block');
    $('.navchoose-log-password').css('display','none');
})


$.ajax({//数据要注意给未来元素添加事件的问题
    type:'get',
    url:'./json/lancome.json',
    cache:false,
    success:function(jsonArr){
        function results(){//渲染商品
            var results='';
                $.each(jsonArr,function(index,item){
                results+=`<div class="cont-right-goods" code="${item.code}">
                            <div class="cont-right-goodsimg">
                                <img src="${item.img}" alt="">     
                                <div class="cont-right-goodsmask">
                                    <div>
                                        <a class="cont-right-goodsbuy">
                                            立即购买
                                        </a>
                                        <a class="cont-right-goodsknow"
                                         href="http://10.36.135.33/eating/test/know.html">
                                            了解详情
                                        </a>                        
                                    </div>
                                </div>         
                            </div>
                            <p>${item.specs}</p>   
                            <p>${item.title}</p>
                            <p>${item.english}</p>
                            <div class="cont-right-goodspri">
                                <span>★★★★★</span>
                                <i></i>
                                <span>￥${item.price}</span>
                            </div>
                        </div>`
                })
            $('.cont-right-goodsbox').html(results)
        }
        results()


        var needcode=[];
        // var showcode=[];
        $('.scrollbar').on('click','li',function(){//点击筛选
            var showcode=[];
            var result='';
            var htmlType=$(this).attr('type');//得到点击的类型
            //把对应类型的code加入到showcode数组
            if(!$(this).find('i').hasClass('aside-choose-conticon')){
               needcode.push($(this).attr('type'))
            //    console.log(needcode);
            }

            if($(this).find('i').hasClass('aside-choose-conticon')){
                let a=$.inArray($(this).attr('type'),needcode);
                needcode.splice(a,1)
                // console.log(needcode);//得到选中的类型
            }

            $.each(needcode,function(n,need){
                $.each(jsonArr,function(index,item){
                    $.each(item.type,function(i,type){
                        if(type==need){
                            showcode.push(item.code)     
                        }
                    })
                })
            })

            function quchong(arr){return [...new Set(arr)];};
            var newcode=quchong(showcode);
            $.each(newcode,function(i,code){
                $.each(jsonArr,function(index,item){
                    if(item.code==code){
                        result+=`<div class="cont-right-goods" code="${item.code}">
                        <div class="cont-right-goodsimg">
                            <img src="${item.img}" alt="">     
                            <div class="cont-right-goodsmask">
                                <div>
                                    <a class="cont-right-goodsbuy">
                                        立即购买
                                    </a>
                                    <a class="cont-right-goodsknow">
                                        了解详情
                                    </a>                        
                                </div>
                            </div>         
                        </div>
                        <p>${item.specs}</p>   
                        <p>${item.title}</p>
                        <p>${item.english}</p>
                        <div class="cont-right-goodspri">
                            <span>★★★★★</span>
                            <i></i>
                            <span>￥${item.price}</span>
                        </div>
                    </div>`
                    }
                })
            });
            $('.cont-right-goodsbox').html(result);
            let slength=$('.cont-right-goods').length;
            $('.cont-right-title span').text(slength+'件商品');


            if($('.goods-sort').children('option:selected').val()=='pri-to-top'){
                goodsSort(bubbleSortup);
            }
            if($('.goods-sort').children('option:selected').val()=='pri-to-low'){
                goodsSort(bubbleSortlow);
            }
            // if($('.goods-sort').children('option:selected').val()=='hot'){
            //     results()
            // }
            // if($('.goods-sort').children('option:selected').val()=='sales'){
            //     results()
            // }
        })

        //点击清除
        $('.aside-clearall').on('click','span',function(){
            $('.aside-choose-cont').find('i').removeClass('aside-choose-conticon');
            results();
            $('.cont-right-title span').text('28件商品');
        })


        function gobuycar(){//点击立即购买
            $('.cont-right-goodsbox').on('click','.cont-right-goodsbuy',function(){
                $('.addcarbigbox').fadeIn().css('display','table');
                var gobuyresults='';
                //获取点击商品的的code
                var addcarcode=$(this).closest('.cont-right-goods').attr('code');
                $.each(jsonArr,function(index,item){
                    if(item.code==addcarcode){
                    gobuyresults=
                        `<div class="addcarbox">
                            <div class="addcar">
                                <i class="addcar-iconfont">x</i>
                                <div class="addcar-smlieimgbox fl">
                                    <img src="${item.img}" alt="">
                                    <img src="img/addar1.jpg" alt="">
                                    <img src="img/addcar.jpg" alt="">
                                </div>
                                <div class="addcar-bigimgbox fl">
                                    <img src="${item.img}" alt="">
                                </div>
                                <div class="addcar-imgdetailsbox fl">
                                    <h4>${item.english}</h4>
                                    <h3>${item.title}</h3>
                                    <p><span>★★★★★</span><span>28条评论</span></p>
                                    <div class="addcar-goodstype">
                                        <p>${item.specs}</p>
                                        <p>￥${item.price}</p>
                                    </div>
                                    <div class="addcar-addcar">
                                        <div class="addcar-addcarpri">
                                            <span>￥${item.price}</span>
                                            <select>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <button class="addcar-last" code="${item.code}">加入购物车</button>
                                            <button class="addcar-ready"><a href="http://10.36.135.33/eating/test/pay.html">立即购买</a></button>
                                        </div>
                                    </div>
                                    <div class="addcar-chanpjj">产品简介</div>
                                    <div class="addcar-tishi">* 因数量有限，同一个收货地址或者同一手机号码限购5件，敬请谅解。
                                    </div>
                                    <a href="#">查看更多</a>
                                    <div class="addcarshoucang">
                                        <a href="#">添加到我的收藏夹</a>
                                        <a href="#">点击查看产品</a>
                                    </div>
                                </div>
                            </div>
                        </div> `
                    }
                })
                $('.addcarbigbox').html(gobuyresults)
            })
        }        
        gobuycar()
        //点叉叉收起立即购买
        $('.addcarbigbox').on('click','.addcar i',function(){
            $('.addcarbigbox').fadeOut()
        })


        //渲染购物车
        function showcar(){
            var carArr=JSON.parse(localStorage.getItem('car'));
            var addcarresults='';
            if(carArr!=null){
                $.each(carArr,function(i,cod){
                    $.each(jsonArr,function(index,item){
                        if(item.code==cod.code){
                            addcarresults+=
                            `<div class="navchoose-buycenter-goodsbox">
                            <div class="navchoose-buycenter-goods">
                                <div>
                                    <img src="${item.img}" alt="">
                                </div>
                                <div>
                                    <h5>${item.title}</h5>
                                    <p>${item.specs}</p>          
                                </div>
                            </div>
                            <div class="navchoose-buycenter-num">${cod.num}</div>
                            <div class="navchoose-buycenter-pri">￥${item.price}</div>        
                        </div> `
                        }
                    })
                })
            }
            $('.navchoose-buycenter').html(addcarresults)
        }
        showcar()
 

        //点击加入购物车
        $('.addcarbigbox').on('click','.addcar-last',function(){
            var addcarcode=$(this).attr('code');
            var anum=$(".addcar-addcarpri select option:selected").text()
            // ------把code存入本地---------------------
            var flag=0;
            if(localStorage.getItem('car')){
                //判断localstorage是否有car属性
                var codeArr=JSON.parse(localStorage.getItem('car'));
            }else{
                var codeArr=[];
            }
            if(codeArr.length!=0){
                $.each(codeArr,function(index,item){
                    if(item.code==addcarcode){
                        item.num=item.num*1+$(".addcar-addcarpri select option:selected").text()*1;  
                        flag=1;
                    }
                })   
                if(flag!=1){
                codeArr.push({'code':addcarcode,'num':anum});//把点击的code加入数组中
                }
            }else {
                var codeArr=[];
                codeArr.push({'code':addcarcode,'num':anum});
            }
            var jsonStr=JSON.stringify(codeArr)//将对象变成字符串
            localStorage.setItem('car',jsonStr)//设置
            //把code存入本地---------------------   
            showcar()//渲染购物车
            Carperce();//更新单价
            $('.addcarbigbox').fadeOut();
        })
        Carperce()//更新购物车总价


        function bubbleSortup(arr){//从高到低排序好的数组
                for (let n = 0; n < arr.length-1; n++){ //比较轮数
                    for (let i = 0; i < arr.length-(n+1); i++){ //每一轮比较次数
                        if (arr[i].pri - arr[i+1].pri>0) {//前面的大于后面的：换位
                            var tmp = arr[i];
                            arr[i] = arr[i+1];
                            arr[i+1] = tmp;
                        }
                    }
                }                
            return arr;
        }
        function bubbleSortlow(arr){//从低到高排序好的数组
            for (let n = 0; n < arr.length-1; n++){ //比较轮数
                for (let i = 0; i < arr.length-(n+1); i++){ //每一轮比较次数
                    if (arr[i].pri - arr[i+1].pri<0) {//前面的大于后面的：换位
                        var tmp = arr[i];
                        arr[i] = arr[i+1];
                        arr[i+1] = tmp;
                    }
                }
            }
            return arr;
        }
        
        
        function goodsSort(fn){//商品排序
            var arr=[];
            // console.log($('.cont-right-goods'));
            // console.log($('.scrollbar i').hasClass('aside-choose-conticon'));
            // if(!($('.scrollbar i').hasClass('aside-choose-conticon'))){
            //     $.each(jsonArr,function(index,item){
            //         arr.push({'pri':item.price,'code':item.code});
            //     })
            // }else{
                $.each(jsonArr,function(index,item){
                    $.each($('.cont-right-goods'),function(i,code){
                        var cod=$(code).attr('code')
                        if(cod==item.code){
                            arr.push({'pri':item.price,'code':item.code});
                        }
                    })
                })
                // console.log(arr);
            // }
            fn(arr);                
            var goodsresults='';
            $.each(arr,function(p,pricode){
                $.each(jsonArr,function(index,item){
                if(item.code==pricode.code){
                    goodsresults+=`<div class="cont-right-goods" code="${item.code}">
                        <div class="cont-right-goodsimg">
                            <img src="${item.img}" alt="">     
                            <div class="cont-right-goodsmask">
                                <div>
                                    <a class="cont-right-goodsbuy">
                                        立即购买
                                    </a>
                                    <a class="cont-right-goodsknow">
                                        了解详情
                                    </a>                        
                                </div>
                            </div>         
                        </div>
                        <p>${item.specs}</p>   
                        <p>${item.title}</p>
                        <p>${item.english}</p>
                        <div class="cont-right-goodspri">
                            <span>★★★★★</span>
                            <i></i>
                            <span>￥${item.price}</span>
                        </div>
                    </div>`
                }
            })
            $('.cont-right-goodsbox').html(goodsresults)
            
            })
        }


        $(".goods-sort").change(function(){//点击下拉菜单进行排序
            if($(this).children('option:selected').val()=='pri-to-top'){
                goodsSort(bubbleSortup);
            }
            if($(this).children('option:selected').val()=='pri-to-low'){
                goodsSort(bubbleSortlow);
            }
            if($(this).children('option:selected').val()=='hot'){
                goodsSort(bubbleSortup);
            }
            // if($(this).children('option:selected').val()=='sales'){
            //     results()
            // }
        })
        
        $('.addcarbigbox').on('click','.addcar-smlieimgbox img',function(){//切换图片
            console.log($(this).attr('src'));
            let a=$(this).attr('src')
            $('.addcar-bigimgbox img').attr('src',a);
            console.log( $('.addcar-bigimgbox img').attr('src'));
            
        })

    }//succes
})//ajax


//正则登陆判断 登陆框
var reg1=/^1[3-9]\d{9}$/g;
var reg2=/^\d{4}$/g;
var reg3=/^\d{6}$/g;
var regs=[reg1,reg2,reg3]
var logresult = [];
function verify(a,reg){//判断输入规则是否符合正则
    $(".navchoose-logtop-inp input").eq(a).blur(function(){
        reg.lastIndex=0;
        if(!reg.test($(".navchoose-logtop-inp input").eq(a).val( ))){
                $('.tishi').eq(a).css('display','block');
                $('.navchoose-logtop-inp input').eq(a).css('border','1px sliod D51B51');
                logresult[a]=1;
        }else{
            $('.tishi').eq(a).css('display','none');
            $('.navchoose-logtop-inp input').eq(a).css('border','1px solid #A9A9A9');
            logresult[a]=0;
        }

    })
}
for(let i=0;i<regs.length;i++){//给每个输入框把所有正则匹配一次
    verify(i,regs[i])
}

$(".navchoose-logtop-inp button").eq(0).click(function(){//点击发送，按钮变灰色
    clearInterval(timer);
    // console.log($(".navchoose-logtop-inp button").eq(0).html());
    $(this).attr("disabled",true).css('background','#555');
    $(this).html('60s')
    let i=60;
    let _this=this
    var timer=setInterval(function () {
        if(i<=0){

            $(_this).attr("disabled",false).css('background','#000').html('aa');
            clearInterval(timer);
            return
        }
        $(_this).html(i+'s')
        i--  
    },1000);
})

$('.navchoose-logtop-inplook').eq(0).on('click','a',function(){//验证码框随机数字
    function randomInt(min,max){
        return Math.round(Math.random()*(max-min)+min);
    }
    let letter='';
    for(var i=0;i<=3;i++ ){
        var ascii=randomInt(0,9)
        letter+=ascii
    }
    $('.navchoose-logtop-inp2 span').eq(0).html(letter)
})

$(".navchoose-logtop-inp button").eq(1).click(function(){//点击验证码登录
    for (var index in  logresult){
        if ( logresult[index] == 1) {//如果有提示则不能提交
            return false;
        }
        if( logresult=[0,0,0]){
        landok()//登陆成功应执行函数
        //把账号密码存入localStorage
            var num=$('.navchoose-logtop-inp input').eq(0).val();
            var password='';//$('.navchoose-logtop-inp input').eq(1).val();
            var landArr=[];
            landArr.push({'num':num,'password':password});
            var jsonStr=JSON.stringify(landArr);//将对象变成字符串
            localStorage.setItem('land',jsonStr);//设置
            xiugainame()
        }
    }   
})


$(".navchoose-log-password button").click(function(){//点击密码登录
    //把账号密码存入localStorage
    var num=$('.navchoose-log-password-name').val();
    var password=$('.navchoose-log-password-pass').val();
    var landArr=[];
    $.ajax({
        data:'act=login&user='+num+'&pass='+password,
        type:'get',
        url:'./json/login2.php',
        success:function(a){
            var json=JSON.parse(a);
            console.log(json);
            if(json.err==1){
                $('.tishi1').css('display','block');
                $('.navchoose-log-password input').eq(1).css('border','1px sliod #D51B51');                
            }else{
                landArr.push({'num':num,'password':password});
                var jsonStr=JSON.stringify(landArr);//将对象变成字符串
                localStorage.setItem('land',jsonStr);//设置
                landok()//登陆成功应执行函数
                xiugainame()
            }
            
        }
    })
        
      
})


//正则登陆判断，注册框
var okreg1=/^1[3-9]\d{9}$/g;
var okreg2=/^([0-9a-zA-z]|\.\?\+\*\|\[\]!@#$%\^&\(\)`~-<>,'';){8,24}$/g;
var okreg3=/^([0-9a-zA-z]|\.\?\+\*\|\[\]!@#$%\^&\(\)`~-<>,'';){8,24}$/g;
var okreg4=/^\d{4}$/g;
var okreg5=/^\d{6}$/g;
var okregs=[okreg1,okreg2,okreg3,okreg4,okreg5]
var result = [];
function okverify(a,reg){

    $(".navchoose-logtopok input").eq(a).blur(function(){
        reg.lastIndex=0;
        if(!reg.test($(".navchoose-logtopok input").eq(a).val( ))){
                $('.tishi').eq(3+a).css('display','block');
                $('.navchoose-logtopok input').eq(a).css('border','1px sliod D51B51');
                result[a]=0;
        }else{
            $('.tishi').eq(3+a).css('display','none');
            $('.navchoose-logtop-inp input').eq(a).css('border','1px solid #A9A9A9');
            result[a]=1;
        }
    })
}

for(let c=0;c<okregs.length;c++){
    okverify(c,okregs[c])
}

$(".navchoose-logtopok button").eq(0).click(function(){
    clearInterval(timer2);
    $(this).attr("disabled",true).css('background','#555');
    let i=60;
    let _this=this
    var timer2=setInterval(function () {
        if(i<=0){
            $(_this).attr("disabled",false).css('background','#000').html('发送');
            clearInterval(timer2);
            return
        }
        $(_this).html(i+'s')
        i--  
    },1000);
})

//验证码框随机数字
$('.navchoose-logtop-inplook').eq(1).on('click','a',function(){
    function randomInt(min,max){
        return Math.round(Math.random()*(max-min)+min);
    }
    let letter='';
    for(var i=0;i<=3;i++ ){
        var ascii=randomInt(0,9)
        letter+=ascii
    }
    $('.navchoose-logtop-inp2 span').eq(1).html(letter)

})

//点击注册
$(".navchoose-logtopok button").eq(1).click(function(){
    for (var index in result){
        if (result[index] == 0) {
            return false;
        }
    }  
        if(result=[1,1,1,1,1]){
        // console.log($('.navchoose-logtopok input').eq(0).val());
            var num=$('.navchoose-logtopok input').eq(0).val();
            var password=$('.navchoose-logtopok input').eq(1).val();
            var landArr=[]
            $.ajax({
                data:'act=add&user='+num+'&pass='+password,
                type:'get',
                url:'./json/login2.php',
                success:function(a){
                    var json=JSON.parse(a);
                    if(json.err==1){
                        $('.tishi2').css('display','block');
                        $('.navchoose-logtop-inpnum').css('border','1px sliod    #D51B51');
                    }else{
                        landok()//登陆成功应执行函数
                        landArr.push({'num':num,'password':password});
                        var jsonStr=JSON.stringify(landArr)//将对象变成字符串
                        localStorage.setItem('land',jsonStr)//设置
                        xiugainame()
                    }

                }
            })
        }
})


//登陆以后登陆框的移入移出事件
$('.navchoose-logok').on('mouseenter','.navchoose-logokfont',function(){
    $('.navchoose-logokmenu').css('display','block');
    $('.navchoose-logokfont').addClass('stshow');//尖尖
})
$(".navchoose-logok").mouseleave(function(){
    $('.navchoose-logokmenu').css('display','none')
    $('.navchoose-logokfont').removeClass('stshow');//尖尖消失

});


//点击退出，则删除localStorage
$(".quit").click(function(){
    landout()
})


//打包一个登陆成功/失败的函数
function landok(){
    // 登陆框
    $('.navchoose-logbox').css('display','none');
    $('.navchoose-logokbox').css('display','block');
    $('.navchoose-logok').css('display','block');
    //购物袋
    $('.navchoose-buyno').css('display','none');
    $('.navchoose-buyok').css('display','block');
    //登陆以后用户名改变
}
function xiugainame(){
    var phonenumArr=JSON.parse(localStorage.getItem('land'))[0].num
    // console.log(phonenumArr);
    var qian=phonenumArr.substr(0,3);
    var hou=phonenumArr.substr(7,4);
    // console.log(qian);
    // console.log(hou);
    $('.navchoose-logokmenu p').html(`欢迎 ${qian}****${hou}`);
    $('.navchoose-logokfont span').html(`欢迎 ${qian}****${hou}`);
}
function landout(){
    $('.navchoose-logbox').css('display','block');
    $('.navchoose-logokbox').css('display','none');
    $('.navchoose-logok').css('display','none');
     //购物袋
     $('.navchoose-buyno').css('display','block');
     $('.navchoose-buyok').css('display','none');
 
    $('.navchoose-logbox input').val('');//登出把所有input清空
    localStorage.removeItem('land')//清除land缓存
}

//判断登陆状态
if(localStorage.getItem('land')){  
    landok()//登陆ok显示
}


//修改购物车的价钱
function Carperce(){
    var goodspri='';
    var goodsprinum=0;
    for(let i=0;i<$('.navchoose-buycenter-num').length;i++){
        goodspri=($('.navchoose-buycenter-num').eq(i).text())*($('.navchoose-buycenter-pri').eq(i).text().substring(1));
        goodsprinum+=parseInt(goodspri);
    }
    $('.navchoose-buybottom h5').html('￥'+goodsprinum);
}


//移动到80px,顶部变形并且固定
$(document).scroll(function(){
    // console.log($(document).scrollTop());
    if($(document).scrollTop()>=80){
        $('.logo').show(500)
        $('.navbox').css({'position':'fixed','top':'0','width':'100%'});
        $('.navmenu-top').css('left',-726+'px');

    }
})
$(document).scroll(function(){
    // console.log($(document).scrollTop());
    if($(document).scrollTop()<=80){
        $('.logo').hide(500)
        $('.navbox').css({'position':'','top':'','width':'100%'});
        $('.navmenu-top').css('left',-572+'px');

    }
})


