import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
	console.log(props);
	if(props.song !== null){
		return (
		<div><h1>Song Detail </h1>
		<div>
			<p>Title: {props.song.title}</p>
			<p>Duration: {props.song.duration}</p>
		</div>
		</div>

		);
	}
	else{
		return (
		<div><h1>Select a Song</h1> 
		</div>

		);
	}
	
};

const mapStateToProps = (state) => {
	return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);