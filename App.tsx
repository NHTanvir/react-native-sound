import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';

function MusicPlayer() {
  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    const tracks: Track[] = [
      {
        id: 1, // Use string IDs instead of numbers
        url: 'https://file-examples.com/storage/fe6e60472c657f757a0e725/2017/11/file_example_MP3_700KB.mp3',
        title: 'Track 1',
        artist: 'Artist 1',
      },
      {
        id: 2,
        url: 'https://file-examples.com/storage/fe6e60472c657f757a0e725/2017/11/file_example_MP3_700KB.mp3',
        title: 'Track 2',
        artist: 'Artist 2',
      },
    ];
    await TrackPlayer.add(tracks);
  };

  const playTrack = async () => {
    await TrackPlayer.skip(1); // Use the string ID here
    await TrackPlayer.play();
  };

  const pauseTrack = async () => {
    await TrackPlayer.pause();
  };

  return (
    <View>
      <Button title="Play" onPress={playTrack} />
      <Button title="Pause" onPress={pauseTrack} />
    </View>
  );
}

export default MusicPlayer;
