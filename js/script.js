$(document).ready(function () {
    $('.next').on('click',function () {
        const CurrentDoted = $('.dactive');
        const NextDot = CurrentDoted.next();
        const CurrentImg = $('.active');
        const nextImg = CurrentImg.next();
        if(nextImg.length) {
            CurrentImg.removeClass('active').css('z-index' , -1)
            nextImg.addClass('active').css('z-index' , 1)
            if(NextDot.length) {
                CurrentDoted.removeClass('dactive').css('background-color' , '#dedede')
                NextDot.addClass('dactive').css('background-color' , 'black')
            }
        }
    })

    $('.prev').on('click',function () {
        const CurrentDoted = $('.dactive');
        const PrevDot = CurrentDoted.prev();
        const CurrentImg = $('.active');
        const prevImg = CurrentImg.prev();
        if(prevImg.length) {
            CurrentImg.removeClass('active').css('z-index' , -1)
            prevImg.addClass('active').css('z-index' , 1)
            if(PrevDot.length) {
                CurrentDoted.removeClass('dactive').css('background-color' , '#dedede')
                PrevDot.addClass('dactive').css('background-color' , 'black')
            }
        }
    })
});