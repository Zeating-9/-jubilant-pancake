
$('.iconfont').click(function(){
    $('.heardbenner_box').hide();
})
//城市选择效果
$('.heardnav_citybox').mouseenter(function(){
    $('.heardnav_citychoose').css('display','block')
    $('.heardnav_city').addClass('heardnav_city-enter')
})
$('.heardnav_citybox').mouseleave(function(){
    $('.heardnav_citychoose').css('display','none')
    $('.item').removeClass('item-move')
    $('.heardnav_city').removeClass('heardnav_city-enter')
})
$('.heardnav_citybox').on('mousemove','.item',function(){
    $(this).addClass('item-move').siblings().removeClass('item-move')
} )
$('.heardnav_citybox').on('click','.item',function(){
    $(this).addClass('item-click').siblings().removeClass('item-click')
    $('.heardnav_city span').html($(this).html())
})
//右侧移入移出效果
$('.heardnav_menu').on('mousemove','a',function(){
    if($(this).attr('abc')||$(this).find('a').attr('abc')){
        $('.heardnav_menu a').removeClass('heardnav_city-enter')
        $(this).addClass('heardnav_city-enter')
        $('.heardnav_menu div').css('display','none')
        $('.heardnav_menu div').eq($(this).attr('abc')).css('display','block')
    }
})
$('.heardnav_menu').on('mouseleave','li',function(){
    $('.heardnav_menu div').css('display','none')
    $('.heardnav_menu a').removeClass('heardnav_city-enter')
})
