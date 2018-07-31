import angular from 'angular';
import {AiportsService} from './airports.service';
import {CheapFlightService} from './cheapflights.service';

export default angular.module('services', [])
.service('AiportsService', AiportsService)
.service('CheapFlightService', CheapFlightService);