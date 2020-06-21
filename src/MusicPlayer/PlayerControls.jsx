import React from "react";
import useMusicPlayer from "../Hooks/useMusicPlayer";
import Icon from "../UI/Icon";
import { Button } from "../styles/btn.styles";

const Controls = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <>
      <div className="music__controls">
        {currentTrackName && (
          <div className="music__track--current has-text-light">
            <strong>{currentTrackName}</strong>
          </div>
        )}
        <div className="music__controls--box">
          <Button
            className="music__controls--btn btn"
            onClick={playPreviousTrack}
            disabled={!currentTrackName}
          >
            ⏮
          </Button>
          <Button
            className="music__controls--btn btn"
            onClick={togglePlay}
            disabled={!currentTrackName}
          >
            {isPlaying ? (
              <Icon value={`⏸`} />
            ) : (
              <Icon className="btn--play" value={"▶️"} />
            )}
          </Button>
          <Button
            className="music__controls--btn btn"
            disabled={!currentTrackName}
            onClick={playNextTrack}
          >
            ⏭
          </Button>
        </div>
      </div>
    </>
  );
};

export default Controls;
