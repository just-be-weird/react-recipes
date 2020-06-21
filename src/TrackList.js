
import React from "react";
import useMusicPlayer from "./useMusicPlayer";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
  return (
    <>
      {trackList.map((track, index) => (
        <div className="box">
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? <button >Pause</button> : <button >Play</button>}
          </button>
          <div className="song-title">
            {track.name}
          </div>
        </div>
      ))}
    </>
  )
}

export default TrackList