const fossilsImg = document.getElementById('Fossils');
const industryImg = document.getElementById('Industry');
const transportationImg = document.getElementById('Transportation');
const fossilFuelsVideo = document.getElementById('FossilFuelsVideo');
const transportationVideo = document.getElementById('TransportationVideo');
const industryProcessesVideo = document.getElementById('IndustryProcessesVideo');

// Hide all videos initially
hideAllVideos();

// Add click event listeners to images
fossilsImg.addEventListener('click', () => {
    toggleVideo(fossilFuelsVideo);
});

industryImg.addEventListener('click', () => {
    toggleVideo(industryProcessesVideo);
});

transportationImg.addEventListener('click', () => {
    toggleVideo(transportationVideo);
});

// Function to toggle the display of a video
function toggleVideo(video) {
    hideAllVideos();
    video.style.display = (video.style.display === 'none') ? 'block' : 'none';
}

// Function to hide all videos
function hideAllVideos() {
    fossilFuelsVideo.style.display = 'none';
    transportationVideo.style.display = 'none';
    industryProcessesVideo.style.display = 'none';
}

    $("#toggle-text").click(function(){
        $("#secret-text").toggle();

    });

    $("#change-bg-color").click(function(){
        $("#home-screen").css("background-video").show();

        // change the font color of the text.
        $("#change-bg-color").css("color","white");

    });

    $("#secret-text").click(function(){
        $(".main-img").addClass("animate-img");
        
        setTimeout(function(){
            $(".main-img").removeClass("animate-img");
        },2000);

    });
    


	const controls = [
        'play-large', // The large play button in the center

        'rewind', // Rewind by the seek time (default 10 seconds)
        'play', // Play/pause playback
        'fast-forward', // Fast forward by the seek time (default 10 seconds)
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'duration', // The full duration of the media
        'captions', // Toggle captions
        'settings', // Settings menu
        'pip' // Picture-in-picture (currently Safari only)
    ];
const players = Array.from(document.querySelectorAll('.playerembed')).map(player => new Plyr(player, { controls }));


players.forEach(function(instance,index) {
        instance.on('play',function(){
            players.forEach(function(instance1,index1){
                if(instance != instance1){
                    instance1.pause();
                }
            });
        });
    });


