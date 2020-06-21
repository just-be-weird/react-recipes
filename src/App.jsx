import React from "react";
import PlayerControls from "./MusicPlayer/PlayerControls";
import TrackList from "./MusicPlayer/TrackList";
import { MusicPlayerProvider } from "./Context/MusicPlayerContext";
import AppContainer from "./styles";

const App = () => {
  return (
    <AppContainer className="container">
      <MusicPlayerProvider>
        <section className="music__container">
          <TrackList />
          <PlayerControls />
        </section>
      </MusicPlayerProvider>
    </AppContainer>
  );
};

export default App;
