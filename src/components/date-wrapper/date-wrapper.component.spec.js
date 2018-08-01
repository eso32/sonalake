var sinon = require('sinon');

describe('date-wrapper component', () => {
    var $componentController, controller, travel;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject(function ($injector) {
        $componentController = $injector.get('$componentController');
        controller = $componentController('dateWrapper', { $scope: {} });

        controller.updateTravel = function(){
            return true;
        }
    }));

    it('should schedule start date before end date automatically', () => {
        controller.startDate = 1534291200000 //2018-08-15

        controller.updateEndTime(1534118400000);

        expect(controller.startDate).to.not.equal(1534291200000);
    });

    it('should schedule push changes to parent by "&" binding', () => {
        var updateTimeSpy = sinon.spy(controller, 'updateTravel');
        
        controller.updateEndTime(1534118400000);
        
        assert(updateTimeSpy.calledOnce);
    });

});