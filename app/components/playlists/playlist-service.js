import PLAYLIST_CONSTANTS from './playlist-constants';

export default class PlaylistService {
	constructor() {
		this.playlists = [];
	}

	addNewPlaylist() {
		this.playlists.push({
			name: PLAYLIST_CONSTANTS.DEFAULT_NAME,
			songs: []
		});
	}

	setActivePlaylist(playlist) {
		if (this.activePlaylist) {
			this.activePlaylist.active = false;
		}

		this.activePlaylist = playlist;
		this.activePlaylist.active = true;
	}

	addSongToActivePlaylist(song) {
		this.activePlaylist.songs.push(song);
	}
}
