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
}
