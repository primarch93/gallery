$('#slider').slider({   
    anchors: ['slide', 'slide', 'slide'],
    afterRender: function () {
        setInterval(function () {
            $.fn.fullpage.moveSlideRight();
        }, 2000);
    }
});