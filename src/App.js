import React from 'react';
import ReactTV from 'react-tv';
//import React, { Component } from 'react';
import { Component } from 'react';
import 'cloudinary-video-player';
import cloudinary from "cloudinary-core";

function getPlaylist() {
  const cld = cloudinary.Cloudinary.new( {
    cloud_name: 'flycrow'
  });

  const player = cld.videoPlayer('example-player');

  player.playlistByTag('retail', {
    autoAdvance: 1,
    repeat: true
  });

  //player.maximize();
}

ReactTV.render(
  <div className='my-app'>
    <button onClick={getPlaylist} className="btn btn-lg btn-info">Start Screen Display</button>
    <div className="cloudPlayer">
      <video
        id="example-player"
        autoPlay
        className="cld-video-player">
      </video>
    </div>
  </div>,
  document.querySelector('#root')
)
