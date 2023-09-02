const video = document.querySelector("video");
const playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML = `<svg id="pause--svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="6 5 35 35"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{color: currentColor}
                     </style></defs><g id="Layer_2--pause"><g><line class="cls-2" x1="16" y1="37.5" x2="16" y2="10.5"></line>
                       <line class="cls-2" x1="32" y1="37.5" x2="32" y2="10.5"></line></g></g></svg>`; // Pause icon
  } else {
    video.pause();
    playPauseButton.innerHTML = `<svg id="play--svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="4 5 35 35"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{color:currentColor;}
                      </style></defs><g id="Layer_2--play"><g>
                        <polyline class="cls-2" points="34.5 24 13.5 37.5 13.5 10.5 34.5 24"></polyline></g></g></svg>`; // Play icon
  }
});

video.addEventListener("play", function () {
  playPauseButton.innerHTML = `<svg id="pause--svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="6 5 35 35"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{color: currentColor}
                     </style></defs><g id="Layer_2--pause"><g><line class="cls-2" x1="16" y1="37.5" x2="16" y2="10.5"></line>
                       <line class="cls-2" x1="32" y1="37.5" x2="32" y2="10.5"></line></g></g></svg>`; // Pause icon
});

video.addEventListener("pause", function () {
  playPauseButton.innerHTML = `<svg id="play--svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="4 5 35 35"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{color:currentColor;}
                      </style></defs><g id="Layer_2--play"><g>
                        <polyline class="cls-2" points="34.5 24 13.5 37.5 13.5 10.5 34.5 24"></polyline></g></g></svg>`; // Play icon
});

video.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "102986075895269");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v17.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
