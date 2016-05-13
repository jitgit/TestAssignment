var appRoot = angular.module('bullsfirst', []);
var AccountService = require('./service/AccountService');
var AccountsController = require('./controller/AccountsController');
appRoot.service('AccountService', AccountService);
appRoot.controller('AccountsController', ['$scope', 'AccountService', AccountsController]);
