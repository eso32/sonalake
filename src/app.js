import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import {
  CheapFlightService,
  AirportsService
} from './services';

angular.module('myApp', [
  uiRouter,
  Components
])
  .component('homePage', HomeComponent)
  .service('AiportsService', AirportsService)
  .service('CheapFlightService', CheapFlightService)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('home', {
        url: '',
        template: '<home-page></home-page>'
      })
      .state('home.flightList', {
        url: '/flight-list/:origin/:originDate/:dest/:destDate',
        component: 'flightList',
        resolve: {
          getParams: function ($stateParams, $http) {
            console.log($stateParams);
            return $http.get(`https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${$stateParams.origin}/to/${$stateParams.dest}/${$stateParams.originDate}/${$stateParams.destDate}/250/unique/?limit=15&offset-0`).then(resp => {
              return resp;
            })
          }
        }
      });
  });
