import template from './flight-info.component.html';
import './flight-info.component.scss';

//no need to make a local copy of inputs since 
//this is a dumb component which doesn't modify input data
export const FlightInfoComponent = {
    bindings: {
        flight: '<',
        params: '<'
    },
    template
};