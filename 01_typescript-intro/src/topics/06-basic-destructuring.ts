interface Details {
	author: string;
	year: number;
}

interface AudioPlayer {
	audioVolume: number;
	songDuration: number;
	song: string;
	details: Details;
}

const audioPlayer: AudioPlayer = {
	audioVolume: 90,
	songDuration: 36,
	song: 'Mess',
	details: {
		author: 'Ed Sheeran',
		year: 2015
	}
};

// console.log('Song:', audioPlayer.song);

// const song = 'New Song';

const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author} = details;

console.log({anotherSong});
console.log({duration});
console.log({author});

export {};
