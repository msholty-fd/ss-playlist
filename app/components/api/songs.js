export default class songsApi {
    constructor($http) {
        this.$http = $http;
    }

    getSongs() {
        if (!this.songs) {
            this.songs = this.$http.get('/songs/songs.json');
        }

        return this.songs;
    }
}
