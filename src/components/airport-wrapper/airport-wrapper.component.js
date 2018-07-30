import template from './airport-wrapper.component.html';
import controller from './airport-wrapper.controller';
import './airport-wrapper.component.scss';

export const AirportWrapperComponent = {
    bindings: {
        updateTravel: '&'
    },
    template,
    controller
};
