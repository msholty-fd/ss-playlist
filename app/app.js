import angular from 'angular';

import 'angular-ui-router';
import 'angular-material-design-lite';

import homeModule from './home';

import NotFoundTemplate from './404.html';

angular.module('ss', [
    homeModule.name,
    'ui.router',
    'mdl'
])

.config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('404', {
        template: NotFoundTemplate
    });

    $urlRouterProvider.otherwise(function($injector, $location) {
        $injector.get('$state').go('404');
        return $location.path();
    });
})

.config(function($locationProvider) {
    'ngInject';
    $locationProvider.html5Mode(true);
})

.run(function($rootScope, $state, $timeout) {
    'ngInject';

    $rootScope.$on('$stateChangeSuccess', function() {
        $rootScope.currentStateName = $state.current.name;
        $timeout(() => updateMdl());
    });

    $rootScope.$on('$viewContentLoaded', () => {
        $timeout(() => updateMdl());
    });
});

function updateMdl() {
    componentHandler.upgradeAllRegistered(); // eslint-disable-line no-undef
}
