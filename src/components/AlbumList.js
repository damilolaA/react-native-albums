import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	constructor() {
		super();
		this.state = {
			albums: []
		};
	}

	componentWillMount() {
		Axios.get('https:rallycoding.herokuapp.com/api/music_albums')
			.then(response => {
				this.setState(this.setState({ albums: response.data }));
			});
	}

	renderAlbums() {
		return this.state.albums.map(album => {
			return <AlbumDetail key={album.title} album={album} />;
		});
	}

	render() {
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;
