import template from './airport-selector.component.html';
import controller from './airport-selector.controller';
import './airport-selector.component.scss';

export const AirportSelectorComponent = {
    bindings: {
        airports: '<',
        selectAirport: '&'
    },
    template,
    controller
};
