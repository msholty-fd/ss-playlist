import angular from 'angular';
import 'angular-ui-router';
import 'ng-sortable';

import apiModule from '../components/api';
import playlistsModule from '../components/playlists';

import HomeController from './home-controller.js';
import template from './home.html';

export default angular.module('ss.home', [
    'ui.router',
    'as.sortable',
    apiModule.name,
    playlistsModule.name
])

.config(function($urlRouterProvider, $stateProvider) {
    'ngInject';
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home', {
            url: '/',
            controllerAs: 'home',
            controller: HomeController,
            template
        });
});
