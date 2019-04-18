import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title:'heroes', duration: '4:00'},
		{ title:'whisky lullaby', duration: '5:00'},
		{ title:'Bohemian Rhapsody', duration: '3:40'},
		{ title:'Enter Sandsman', duration: '2:40'},
		{ title:'Smells like a teen spirit', duration: '3:00'}
	]
};


const selectedSongReducer = (selectedSong=null, action) => {
	if(action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});

