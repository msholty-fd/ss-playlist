export default class HomeController {
    constructor(songsApi, PlaylistService) {
        this.songsApi = songsApi;
        this.PlaylistService = PlaylistService;

        this.getSongs();
    }

    get playlists() {
        return this.PlaylistService.playlists;
    }

    get activePlaylist() {
        return this.PlaylistService.activePlaylist;
    }

    getSongs() {
        this.songsApi.getSongs().then((response) => {
            this.songs = response.data.songs;
        });
    }

    addNewPlaylist() {
        this.PlaylistService.addNewPlaylist();
    }

    setActivePlaylist(playlist) {
        this.PlaylistService.setActivePlaylist(playlist);
    }

    addSongToActivePlaylist(song) {
        this.PlaylistService.addSongToActivePlaylist(song);
    }

    moveSongDown(index) {
        const songs = this.PlaylistService.activePlaylist.songs;

        if (index < songs.length - 1) {
            songs.splice(index + 1, 0, songs.splice(index, 1)[0] );
        }
    }

    moveSongUp(index) {
        if (index > 0) {
            const songs = this.PlaylistService.activePlaylist.songs;

            songs.splice(index - 1, 0, songs.splice(index, 1)[0] );
        }
    }
}
