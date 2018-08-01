import template from './date-wrapper.component.html';
import controller from './date-wrapper.controller';
import './date-wrapper.component.scss';

export const DateWrapperComponent = {
  bindings: {
    updateTravel: '&'
  },
  template,
  controller
};
