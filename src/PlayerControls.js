import React from "react"
import useMusicPlayer from "./useMusicPlayer";

const Controls = () => {
  const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();
  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          <marquee>{currentTrackName}</marquee>
        </div>
        <div>
          <button className="button has-text-light has-background-grey-dark" onClick={playPreviousTrack} disabled={!currentTrackName}>
            fast forward >>
          </button>
          <button className="button has-text-light has-background-grey-dark" onClick={togglePlay} disabled={!currentTrackName}>
            {isPlaying ? <button >Pause</button> : <button >play</button>}
          </button>
          <button className="button has-text-light has-background-grey-dark" onClick={playNextTrack} disabled={!currentTrackName}>
            {`<< step froward`}
          </button>
        </div>
      </div>
    </>
  )
}

export default Controls