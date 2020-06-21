import React from "react";
import useMusicPlayer from "../Hooks/useMusicPlayer";
import Icon from "../UI/Icon";
import { Button } from "../styles/btn.styles";

const TrackList = () => {
  // Rather than importing the Context directly in our component,
  // we’re utilizing the useMusicPlayer Hook’s helper functions
  // to interact with the Context state.
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
  } = useMusicPlayer();
  return (
    <section className="music__track--list">
      {trackList.map((track, index) => (
        <div className="music__track--track" key={`${track.name + index}`}>
          <Button
            className="btn btn--ghost music__track--btn"
            onClick={() => playTrack(index)}
          >
            {currentTrackName === track.name && isPlaying ? (
              <Icon value={`⏸`} />
            ) : (
              <Icon value={"🎵"} />
            )}
          </Button>
          <div className="music__track--title">{track.name}</div>
        </div>
      ))}
    </section>
  );
};

export default TrackList;
