const video = document.querySelector("video");
const playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_603_764)">
<circle cx="24" cy="24" r="24" fill="black" fill-opacity="0.4"/>
<circle cx="24" cy="24" r="23" stroke="url(#paint0_linear_603_764)" stroke-width="2"/>
</g>
<path opacity="0.4" d="M16.3203 19.2001C16.3203 17.8424 16.3203 17.1636 16.7421 16.7418C17.1638 16.3201 17.8427 16.3201 19.2003 16.3201C20.558 16.3201 21.2368 16.3201 21.6585 16.7418C22.0803 17.1636 22.0803 17.8424 22.0803 19.2001V28.8001C22.0803 30.1577 22.0803 30.8365 21.6585 31.2583C21.2368 31.6801 20.558 31.6801 19.2003 31.6801C17.8427 31.6801 17.1638 31.6801 16.7421 31.2583C16.3203 30.8365 16.3203 30.1577 16.3203 28.8001V19.2001Z" fill="white"/>
<path d="M16.3203 19.2001C16.3203 17.8424 16.3203 17.1636 16.7421 16.7418C17.1638 16.3201 17.8427 16.3201 19.2003 16.3201C20.558 16.3201 21.2368 16.3201 21.6585 16.7418C22.0803 17.1636 22.0803 17.8424 22.0803 19.2001V28.8001C22.0803 30.1577 22.0803 30.8365 21.6585 31.2583C21.2368 31.6801 20.558 31.6801 19.2003 31.6801C17.8427 31.6801 17.1638 31.6801 16.7421 31.2583C16.3203 30.8365 16.3203 30.1577 16.3203 28.8001V19.2001Z" stroke="white" stroke-width="3"/>
<path opacity="0.4" d="M25.9199 19.2001C25.9199 17.8424 25.9199 17.1636 26.3416 16.7418C26.7635 16.3201 27.4423 16.3201 28.7999 16.3201C30.1576 16.3201 30.8364 16.3201 31.2582 16.7418C31.6799 17.1636 31.6799 17.8424 31.6799 19.2001V28.8001C31.6799 30.1577 31.6799 30.8365 31.2582 31.2583C30.8364 31.6801 30.1576 31.6801 28.7999 31.6801C27.4423 31.6801 26.7635 31.6801 26.3416 31.2583C25.9199 30.8365 25.9199 30.1577 25.9199 28.8001V19.2001Z" fill="white"/>
<path d="M25.9199 19.2001C25.9199 17.8424 25.9199 17.1636 26.3416 16.7418C26.7635 16.3201 27.4423 16.3201 28.7999 16.3201C30.1576 16.3201 30.8364 16.3201 31.2582 16.7418C31.6799 17.1636 31.6799 17.8424 31.6799 19.2001V28.8001C31.6799 30.1577 31.6799 30.8365 31.2582 31.2583C30.8364 31.6801 30.1576 31.6801 28.7999 31.6801C27.4423 31.6801 26.7635 31.6801 26.3416 31.2583C25.9199 30.8365 25.9199 30.1577 25.9199 28.8001V19.2001Z" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_b_603_764" x="-20" y="-20" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_603_764"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_603_764" result="shape"/>
</filter>
<linearGradient id="paint0_linear_603_764" x1="-3.84" y1="2.88" x2="48" y2="33.84" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`; // Pause icon
  } else {
    video.pause();
    playPauseButton.innerHTML = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_602_747)">
<circle cx="24" cy="24" r="24" fill="black" fill-opacity="0.4"/>
<circle cx="24" cy="24" r="23" stroke="url(#paint0_linear_602_747)" stroke-width="2"/>
</g>
<path opacity="0.4" d="M31.5752 24.8122C31.2359 26.1015 29.6323 27.0125 26.4249 28.8347C23.3244 30.5961 21.7742 31.4769 20.5249 31.1229C20.0084 30.9765 19.5378 30.6985 19.1582 30.3156C18.2402 29.3894 18.2402 27.5929 18.2402 24C18.2402 20.4072 18.2402 18.6107 19.1582 17.6845C19.5378 17.3016 20.0084 17.0236 20.5249 16.8773C21.7742 16.5232 23.3244 17.404 26.4249 19.1654C29.6323 20.9875 31.2359 21.8986 31.5752 23.1879C31.7153 23.7201 31.7153 24.28 31.5752 24.8122Z" fill="white"/>
<path d="M31.5752 24.8122C31.2359 26.1015 29.6323 27.0125 26.4249 28.8347C23.3244 30.5961 21.7742 31.4769 20.5249 31.1229C20.0084 30.9765 19.5378 30.6985 19.1582 30.3156C18.2402 29.3894 18.2402 27.5929 18.2402 24C18.2402 20.4072 18.2402 18.6107 19.1582 17.6845C19.5378 17.3016 20.0084 17.0236 20.5249 16.8773C21.7742 16.5232 23.3244 17.404 26.4249 19.1654C29.6323 20.9875 31.2359 21.8986 31.5752 23.1879C31.7153 23.7201 31.7153 24.28 31.5752 24.8122Z" stroke="white" stroke-width="3" stroke-linejoin="round"/>
<defs>
<filter id="filter0_b_602_747" x="-20" y="-20" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_602_747"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_602_747" result="shape"/>
</filter>
<linearGradient id="paint0_linear_602_747" x1="-3.84" y1="2.88" x2="48" y2="33.84" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`; // Play icon
  }
});

video.addEventListener("play", function () {
  playPauseButton.innerHTML = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_603_764)">
<circle cx="24" cy="24" r="24" fill="black" fill-opacity="0.4"/>
<circle cx="24" cy="24" r="23" stroke="url(#paint0_linear_603_764)" stroke-width="2"/>
</g>
<path opacity="0.4" d="M16.3203 19.2001C16.3203 17.8424 16.3203 17.1636 16.7421 16.7418C17.1638 16.3201 17.8427 16.3201 19.2003 16.3201C20.558 16.3201 21.2368 16.3201 21.6585 16.7418C22.0803 17.1636 22.0803 17.8424 22.0803 19.2001V28.8001C22.0803 30.1577 22.0803 30.8365 21.6585 31.2583C21.2368 31.6801 20.558 31.6801 19.2003 31.6801C17.8427 31.6801 17.1638 31.6801 16.7421 31.2583C16.3203 30.8365 16.3203 30.1577 16.3203 28.8001V19.2001Z" fill="white"/>
<path d="M16.3203 19.2001C16.3203 17.8424 16.3203 17.1636 16.7421 16.7418C17.1638 16.3201 17.8427 16.3201 19.2003 16.3201C20.558 16.3201 21.2368 16.3201 21.6585 16.7418C22.0803 17.1636 22.0803 17.8424 22.0803 19.2001V28.8001C22.0803 30.1577 22.0803 30.8365 21.6585 31.2583C21.2368 31.6801 20.558 31.6801 19.2003 31.6801C17.8427 31.6801 17.1638 31.6801 16.7421 31.2583C16.3203 30.8365 16.3203 30.1577 16.3203 28.8001V19.2001Z" stroke="white" stroke-width="3"/>
<path opacity="0.4" d="M25.9199 19.2001C25.9199 17.8424 25.9199 17.1636 26.3416 16.7418C26.7635 16.3201 27.4423 16.3201 28.7999 16.3201C30.1576 16.3201 30.8364 16.3201 31.2582 16.7418C31.6799 17.1636 31.6799 17.8424 31.6799 19.2001V28.8001C31.6799 30.1577 31.6799 30.8365 31.2582 31.2583C30.8364 31.6801 30.1576 31.6801 28.7999 31.6801C27.4423 31.6801 26.7635 31.6801 26.3416 31.2583C25.9199 30.8365 25.9199 30.1577 25.9199 28.8001V19.2001Z" fill="white"/>
<path d="M25.9199 19.2001C25.9199 17.8424 25.9199 17.1636 26.3416 16.7418C26.7635 16.3201 27.4423 16.3201 28.7999 16.3201C30.1576 16.3201 30.8364 16.3201 31.2582 16.7418C31.6799 17.1636 31.6799 17.8424 31.6799 19.2001V28.8001C31.6799 30.1577 31.6799 30.8365 31.2582 31.2583C30.8364 31.6801 30.1576 31.6801 28.7999 31.6801C27.4423 31.6801 26.7635 31.6801 26.3416 31.2583C25.9199 30.8365 25.9199 30.1577 25.9199 28.8001V19.2001Z" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_b_603_764" x="-20" y="-20" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_603_764"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_603_764" result="shape"/>
</filter>
<linearGradient id="paint0_linear_603_764" x1="-3.84" y1="2.88" x2="48" y2="33.84" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`; // Pause icon
});

video.addEventListener("pause", function () {
  playPauseButton.innerHTML = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_602_747)">
<circle cx="24" cy="24" r="24" fill="black" fill-opacity="0.4"/>
<circle cx="24" cy="24" r="23" stroke="url(#paint0_linear_602_747)" stroke-width="2"/>
</g>
<path opacity="0.4" d="M31.5752 24.8122C31.2359 26.1015 29.6323 27.0125 26.4249 28.8347C23.3244 30.5961 21.7742 31.4769 20.5249 31.1229C20.0084 30.9765 19.5378 30.6985 19.1582 30.3156C18.2402 29.3894 18.2402 27.5929 18.2402 24C18.2402 20.4072 18.2402 18.6107 19.1582 17.6845C19.5378 17.3016 20.0084 17.0236 20.5249 16.8773C21.7742 16.5232 23.3244 17.404 26.4249 19.1654C29.6323 20.9875 31.2359 21.8986 31.5752 23.1879C31.7153 23.7201 31.7153 24.28 31.5752 24.8122Z" fill="white"/>
<path d="M31.5752 24.8122C31.2359 26.1015 29.6323 27.0125 26.4249 28.8347C23.3244 30.5961 21.7742 31.4769 20.5249 31.1229C20.0084 30.9765 19.5378 30.6985 19.1582 30.3156C18.2402 29.3894 18.2402 27.5929 18.2402 24C18.2402 20.4072 18.2402 18.6107 19.1582 17.6845C19.5378 17.3016 20.0084 17.0236 20.5249 16.8773C21.7742 16.5232 23.3244 17.404 26.4249 19.1654C29.6323 20.9875 31.2359 21.8986 31.5752 23.1879C31.7153 23.7201 31.7153 24.28 31.5752 24.8122Z" stroke="white" stroke-width="3" stroke-linejoin="round"/>
<defs>
<filter id="filter0_b_602_747" x="-20" y="-20" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_602_747"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_602_747" result="shape"/>
</filter>
<linearGradient id="paint0_linear_602_747" x1="-3.84" y1="2.88" x2="48" y2="33.84" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`; // Play icon
});

video.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});


// Footer Copyright
const copyrightText = `Fragscentric &copy; ${new Date().getFullYear()}, All rights reserved.`;

document.querySelector('footer').innerHTML = copyrightText;
