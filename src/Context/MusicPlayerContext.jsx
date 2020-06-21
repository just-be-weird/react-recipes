import React from "react";
// Music files
import CreativeMinds from "../MusicPlayer/assets/creativeminds.mp3";
import GoingHigher from "../MusicPlayer/assets/goinghigher.mp3";
import Memories from "../MusicPlayer/assets/memories.mp3";

const MusicPlayerContext = React.createContext([{}, () => {}]);
/*
 * React component that acts as a wrapper where we set up the Context,
 * but also return that Context’s Provider for us to wrap our two other components in.
 * */
const MusicPlayerProvider = (props) => {
  const [state, setState] = React.useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "CreativeMinds - bensound",
        file: CreativeMinds,
      },
      {
        name: "GoingHigher - bensound",
        file: GoingHigher,
      },
      {
        name: "Memories - bensound",
        file: Memories,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    // The MusicPlayerContext.Provider is what allows child components
    // to access the Context’s value. It provides the Context object
    // for other components to consume.
    <MusicPlayerContext.Provider value={[state, setState]}>
      {/* We are passing in an array with state, setState as value same as MusicPlayerContext line@3
          {} => state and an setState => empty function */}
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
