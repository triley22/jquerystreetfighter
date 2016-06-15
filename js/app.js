$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        hideAll();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        hideAll();
        $('.ryu-still').show();
    })
    .mousedown(function(){
        playHadouken();
        hideAll();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1400px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '500px');
            });
    })
    .mouseup(function(){
        hideAll();
        $('.ryu-ready').show();
    });
    $(document).keydown(function(e) {
        console.log(e.which)
        if (e.which == 88) {
              hideAll();
            $('.ryu-cool').show();
        }
    }).keyup(function(e) {
        if (e.which == 88) {
              hideAll();
            $('.ryu-still').show();
        }
    })
});
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
function hideAll () {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').hide();
}