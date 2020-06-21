import React from "react";
import { MusicPlayerContext } from "../Context/MusicPlayerContext";

// custom React Hook
const useMusicPlayer = () => {
  const [state, setState = () => {}] = React.useContext(MusicPlayerContext);

  // Play a specific track
  const playTrack = async (index) => {
    if (index === state.currentTrackIndex) {
      await togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      await state.audioPlayer.play();
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  };

  // Toggle play or pause
  const togglePlay = async () => {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      await state.audioPlayer.play();
    }
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  };

  // Play the previous track in the tracks array
  const playPreviousTrack = async () => {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    await playTrack(newIndex);
  };

  // Play the next track in the tracks array
  const playNextTrack = async () => {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    await playTrack(newIndex);
  };

  return {
    playTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
