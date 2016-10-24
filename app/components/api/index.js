import angular from 'angular';

import songsApi from './songs.js';

export default angular.module('ss.components.api', [])

.service('songsApi', songsApi);
