$(document).ready(function() {
    
    $('.video-container').hide();

    
    $('#Fossils').click(function() {
        $('.video-container').hide(); 
        $('#FossilFuelsVideoContainer').fadeIn(); 
    });

    $('#Industry').click(function() {
        $('.video-container').hide(); 
        $('#IndustryProcessesVideoContainer').fadeIn(); 

    $('#Transportation').click(function() {
        $('.video-container').hide(); 
        $('#TransportationVideoContainer').fadeIn();

   
    $("#toggle-text").click(function() {
       
        window.location.href = "https://cotap.org/reduce-carbon-footprint/";
    });

   
    $("#toggle-text").click(function(){
        $("#secret-text").toggle();
    });

    $("#change-bg-color").click(function(){
        $("#home-screen").css("background-color", "black");
        $("#change-bg-color").css("color", "white"); 
    });

    $("#secret-text").click(function(){
        $(".main-img").addClass("animate-img");
        setTimeout(function(){
            $(".main-img").removeClass("animate-img");
        }, 2000);
    });


    const controls = [
        'play-large',
        'rewind',
        'play',
        'fast-forward',
        'progress',
        'current-time',
        'duration',
        'captions',
        'settings',
        'pip'
    ];

    const players = Array.from(document.querySelectorAll('.playerembed')).map(player => new Plyr(player, { controls }));

    players.forEach(function(instance) {
        instance.on('play', function(){
            players.forEach(function(instance1){
                if(instance != instance1){
                    instance1.pause();
                }
            });
        });
    });
});