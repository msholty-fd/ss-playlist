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
        if (this.activePlaylist) {
            this.activePlaylist.songs.push(song);
        }
    }

    moveSongDown(index) {
        const songs = this.activePlaylist.songs;

        if (index < songs.length - 1) {
            songs.splice(index + 1, 0, songs.splice(index, 1)[0] );
        }
    }

    moveSongUp(index) {
        if (index > 0) {
            const songs = this.activePlaylist.songs;

            songs.splice(index - 1, 0, songs.splice(index, 1)[0] );
        }
    }
}
