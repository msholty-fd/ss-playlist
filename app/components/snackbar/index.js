import angular from 'angular';

import SnackbarService from './snackbar-service';

import template from './snackbar.html';

export default angular.module('ss.components.snackbar', [])

.component('snackbar', {
    template
})

.service('SnackbarService', SnackbarService);
