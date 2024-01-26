document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        video.addEventListener('play', function () {
            pauseOtherVideos(video);
        });
    });

    function pauseOtherVideos(currentVideo) {
        videos.forEach(video => {
            if (video !== currentVideo) {
                video.pause();
            }
        });
    }
});