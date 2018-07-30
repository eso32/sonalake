import template from './date-selector.component.html';
import './date-selector.component.scss';

export const DateSelectorComponent = {
  bindings: {
    date: '<',
    updateTime: '&'
  },
  template
};
