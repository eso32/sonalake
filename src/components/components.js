import angular from 'angular';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { AirportWrapperComponent } from './airport-wrapper/airport-wrapper.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightInfoComponent } from './flight-list/flight-info/flight-info.component';

export default angular.module('app.components', [])
    .component('dateWrapper', DateWrapperComponent)
    .component('dateSelector', DateSelectorComponent)
    .component('airportSelector', AirportSelectorComponent)
    .component('airportWrapper', AirportWrapperComponent)
    .component('flightList', FlightListComponent)
    .component('flightInfo', FlightInfoComponent)
    .name;

