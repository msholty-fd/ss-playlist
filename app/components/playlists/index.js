import angular from 'angular';

import PlaylistService from './playlist-service';

export default angular.module('ss.components.playlists', [])

.service('PlaylistService', PlaylistService);
