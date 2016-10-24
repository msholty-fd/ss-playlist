import _ from 'lodash';

import PlaylistService from './playlist-service.js';

describe('DraftController', function() {
    beforeEach(function() {
        this.initializeService = function() {
            this.service = new PlaylistService();
        };
        this.initializeService();
    });

    describe('#constructor', function() {
        it('should initialize an empty list of playlists', function() {
            expect(this.service.playlists.length).toBe(0);
        });
    });

    describe('#addNewPlaylist', function() {
        it('should increase the length of the playlist by one', function() {
            const originalPlaylistLength = this.service.playlists.length;

            this.service.addNewPlaylist();
            expect(this.service.playlists.length).toEqual(originalPlaylistLength + 1);
        });
    });

    describe('#setActivePlaylist', function() {
        it('should set active playlist', function() {
            const fooPlaylist = { name: 'foo' };
            
            this.service.setActivePlaylist(fooPlaylist);
            expect(this.service.activePlaylist).toBe(fooPlaylist);
        });

        it('should set active to true', function() {
            const barPlaylist = { name: 'bar' };

            this.service.setActivePlaylist(barPlaylist);
            expect(barPlaylist.active).toBeTruthy();
        });
    });

    describe('#addSongToActivePlaylist', function() {
        it('should increase the amount of songs in the active playlist by one', function() {
            this.service.activePlaylist = {
                name: 'test playlist',
                songs: []
            };

            const newSong = { title: 'Who will test our code when we\'re gone?' };
            const originalSongAmount = this.service.activePlaylist.songs.length;

            this.service.addSongToActivePlaylist(newSong);
            expect(this.service.activePlaylist.songs.length).toEqual(originalSongAmount + 1);
        });

        it('shouldn\'t try to add a song if there is no active playlist', function() {
            const newSong = { title: 'Who will test our code when we\'re gone?' };
            
            this.service.addSongToActivePlaylist(newSong);
            expect(this.service.activePlaylist).toBe(undefined);
        });
    });

    describe('#moveSongDown', function() {
        beforeEach(function() {
            const playlist = {
                name: 'the best playlist',
                songs: [
                    {
                        title: 'test me baby one more time'
                    },
                    {
                        title: 'save me from my test'
                    },
                    {
                        title: 'test pilot'
                    },
                    {
                        title: 'the last test in the world'
                    }
                ]
            };

            this.service.activePlaylist = playlist;
        });

        it('should move a song down one index', function() {
            expect(this.service.activePlaylist.songs[1].title).toBe('save me from my test');
            this.service.moveSongDown(1);
            expect(this.service.activePlaylist.songs[2].title).toBe('save me from my test');
        });

        it('shouldn\'t change the length of the playlist', function() {
            const originalPlaylistLength = this.service.activePlaylist.songs.length;

            this.service.moveSongDown(2);
            expect(this.service.activePlaylist.songs.length).toEqual(originalPlaylistLength);
        });

        it('shouldn\'t move the last song down', function() {
            const lastSongIndex = this.service.activePlaylist.songs.length - 1;

            expect(this.service.activePlaylist.songs[lastSongIndex].title).toBe('the last test in the world');
            this.service.moveSongDown(lastSongIndex);
            expect(this.service.activePlaylist.songs[lastSongIndex].title).toBe('the last test in the world');
        });
    });

    describe('#moveSongUp', function() {
        beforeEach(function() {
            const playlist = {
                name: 'the best playlist',
                songs: [
                    {
                        title: 'test me baby one more time'
                    },
                    {
                        title: 'save me from my test'
                    },
                    {
                        title: 'test pilot'
                    },
                    {
                        title: 'the last test in the world'
                    }
                ]
            };

            this.service.activePlaylist = playlist;
        });

        it('should move a song down one index', function() {
            expect(this.service.activePlaylist.songs[1].title).toBe('save me from my test');
            this.service.moveSongUp(1);
            expect(this.service.activePlaylist.songs[0].title).toBe('save me from my test');
        });

        it('shouldn\'t change the length of the playlist', function() {
            const originalPlaylistLength = this.service.activePlaylist.songs.length;

            this.service.moveSongUp(2);
            expect(this.service.activePlaylist.songs.length).toEqual(originalPlaylistLength);
        });

        it('shouldn\'t move the first song up', function() {
            expect(this.service.activePlaylist.songs[0].title).toBe('test me baby one more time');
            this.service.moveSongDown(lastSongIndex);
            expect(this.service.activePlaylist.songs[0].title).toBe('test me baby one more time');
        });
    });
});
