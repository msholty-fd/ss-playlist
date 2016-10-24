import angular from 'angular';

import PlaylistService from './playlist-service';

export default angular.module('ds.components.playlists', [])

.service('PlaylistService', PlaylistService);
