import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import Services from './services/services';
import { HomeComponent } from './home/home.component';
import './scss/main.scss';


angular.module('myApp', [
  uiRouter,
  "services",
  Components
])
  .component('homePage', HomeComponent)
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
          getParams: function ($stateParams, CheapFlightService) {
            return CheapFlightService.getFlightsList($stateParams).then(data => {
              return data;
            })
          }
        }
      });
  });
