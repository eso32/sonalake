import template from './flight-info.component.html';
// import controller from './flight-info.controller';
import './flight-info.component.scss';

export const FlightInfoComponent = {
    bindings: {
        flight: '<',
        params: '<'
    },
    template,
    // controller
};