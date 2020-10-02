/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
// const playbackUrl =
// "https://ca351d1575ab.us-east-1.playback.live-video.net/api/video/v1/us-east-1.076005434014.channel.bQ1l9LwPytZA.m3u8";
// const videoPlayer = document.getElementById("video-player");
// (function (IVSPlayer) {
//     const PlayerState = IVSPlayer.PlayerState;
//     const PlayerEventType = IVSPlayer.PlayerEventType;

//   // Initialize player
//   const player = IVSPlayer.create();
//   player.attachHTMLVideoElement(videoPlayer);

//   // Attach event listeners
//   player.addEventListener(PlayerState.PLAYING, function () {
//     console.log("Player State - PLAYING");
//   });
//   player.addEventListener(PlayerState.ENDED, function () {
//     console.log("Player State - ENDED");
//   });
//   player.addEventListener(PlayerState.READY, function () {
//     console.log("Player State - READY");
//   });
//   player.addEventListener(PlayerEventType.ERROR, function (err) {
//     console.warn("Player Event - ERROR:", err);
//   });

//   player.addEventListener(PlayerEventType.TEXT_METADATA_CUE, function (cue) {
//     const metadataText = cue.text;
//     const position = player.getPosition().toFixed(2);
//     console.log(
//       `PlayerEvent - METADATA: "${metadataText}". Observed ${position}s after playback started.`
//     );
//   });

//   // Setup stream and play
//   player.setAutoplay(true);
//   player.load(playbackUrl);

//   // Setvolume
//   player.setVolume(0.1);

// })(window.IVSPlayer);