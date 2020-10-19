// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as config from '../../config';

// Styles
import './VideoPlayer.css';

class VideoPlayer extends Component {
  constructor() {
    super ();
    this.state = {
      maxMetaData: 10,
      metaData: [],
    }
  }

  componentDidMount() {
    const mediaPlayerScript = document.createElement("script");
    mediaPlayerScript.src = "https://player.live-video.net/1.0.0/amazon-ivs-player.min.js";
    mediaPlayerScript.async = true;
    mediaPlayerScript.onload = () => this.mediaPlayerScriptLoaded();
    document.body.appendChild(mediaPlayerScript);
  }

  mediaPlayerScriptLoaded = () => {
    // This shows how to include the Amazon IVS Player with a script tag from our CDN
    // If self hosting, you may not be able to use the create() method since it requires
    // that file names do not change and are all hosted from the same directory.

    const MediaPlayerPackage = window.IVSPlayer;

    // First, check if the browser supports the Amazon IVS player.
    if (!MediaPlayerPackage.isPlayerSupported) {
        console.warn("The current browser does not support the Amazon IVS player.");
        return;
    }

    const PlayerState = MediaPlayerPackage.PlayerState;
    const PlayerEventType = MediaPlayerPackage.PlayerEventType;

    // Initialize player
    const player = MediaPlayerPackage.create();
    player.attachHTMLVideoElement(document.getElementById("video-player"));

    // Attach event listeners
    player.addEventListener(PlayerState.PLAYING, () => {
        console.log("Player State - PLAYING");
    });
    player.addEventListener(PlayerState.ENDED, () => {
        console.log("Player State - ENDED");
    });
    player.addEventListener(PlayerState.READY, () => {
        console.log("Player State - READY");
    });
    player.addEventListener(PlayerEventType.ERROR, (err) => {
        console.warn("Player Event - ERROR:", err);
    });
    player.addEventListener(PlayerEventType.TEXT_METADATA_CUE, (cue) => {
        console.log('Timed metadata: ', cue.text);
        const metadataText = JSON.parse(cue.text);
        const productId = metadataText['productId'];
        this.props.setMetadataId(productId);
        const metadataTime = player.getPosition().toFixed(2);

        const { metaData, maxMetaData } = this.state;
        // only keep max 5 metadata records
        if (metaData.length > maxMetaData) {
          metaData.length = maxMetaData;
        }
        // insert new metadata
        metaData.unshift(`productId: ${productId} (${metadataTime}s)`);
        this.setState({ metaData });
    });

    // Setup stream and play
    player.setAutoplay(true);
    player.load(config.PLAYBACK_URL);
    player.setVolume(1);
  }

  render() {
    return (
      <div className="player-wrapper">
        <header>
          <h1>Video</h1>
        </header>
        <div className="aspect-169 pos-relative full-width full-height">
          <video id="video-player" className="video-elem pos-absolute full-width" playsInline controls></video>
        </div>
        <div style={{color: "red", textAlign: "center", fontWeight: "normal"}}>
          <h3 style={{fontWeight: "normal"}}>
            **If the video does not start with sound, please hover over the video and make sure the player is not on mute.**
          </h3>
        </div>
        {/* <div>
          <p>
            <a href="https://fiserventerprise.webex.com/mw3300/mywebex/default.do?service=7&main_url=%2Ftc3300%2Ftrainingcenter%2Fdefault.do%3Fsiteurl%3Dfiserventerprise%26main_url%3D%252Ftc3300%252Fe.do%253FAT%253DMI%2526%2526Host%253DQUhTSwAAAAQbxkPVmUX6Cad4NxJtiy7VM2t75OzSFPbz-AoFLzGfuVNYkI6GqsnVvoRkkUzgQpaUQrySWVax9dGu_LI31jG70%2526MTID%253Dt8bc9464659df8ec268e1a7e1b60e93a8%2526siteurl%253Dfiserventerprise%2526confID%253D175196850667701805%2526ticket%253D4832534b000000041b9ced8dd4f033a3585702ba74ef1a14e5c5c076491882bab457073adb049010&siteurl=fiserventerprise" target="_blank">Loan Networking</a><br/>
            Session number: <b>131 905 3379</b><br/> 
            Session password: <b>DpJP9xr4Z$4</b>
          </p>
          <p>
            <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__fiserventerprise.webex.com_fiserventerprise_k2_j.php-3FMTID-3Dt585692a0bd54f67cf444aa828f3c6fd0&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=fmpsenbnbwpVk92WgE9N9f_lzTN3jbWggZBNn8Z1pcc&s=Lnj1Tazi_WYM6UPKROAZUxLr1UrPTO88xMbhXJ81_y8&e=" target="_blank">Deposit Networking</a><br/>
            Session number: <b>131 637 6333</b><br/>
            Session password: <b>mMchNm5e8@7</b> 
          </p>
          <p>
            <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__fiserventerprise.webex.com_fiserventerprise_k2_j.php-3FMTID-3Dt765233fbad9e7c2980879104e27774e7&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=D2orwhevfAOW3IfZo9eL8Y0CjQQEAT9FqSrA-n8uvtY&s=TWptvEoJRx-whs0-krb8g0Chk0KVlnbNcwIGYxhiUXo&e=" target="_blank">BPM Networking</a><br/>
            Session number: <b>131 709 2026</b><br/>
            Session password: <b>PqJyefi7?69</b>
          </p>
        </div> */}
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  setMetadataId: PropTypes.func,
  videoStream: PropTypes.string,
};

export default VideoPlayer;
