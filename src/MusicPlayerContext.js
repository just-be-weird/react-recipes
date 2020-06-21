import React, { useState } from 'react';
import Ukulele from './bensound-ukulele.mp3';
import Summer from './bensound-summer.mp3';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
          name: 'bensound-ukulele',
        file: Ukulele,
      },
      {
        name: 'bensound-summer',
        file: Summer,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};
export { MusicPlayerContext, MusicPlayerProvider };