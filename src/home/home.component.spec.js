describe('home-page component', () => {
    var $componentController, controller, travel;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject(function ($injector) {
        $componentController = $injector.get('$componentController');
        controller = $componentController('homePage', { $scope: {} });

        controller.travel = {
            origin: undefined,
            startDate: undefined,
            dest: undefined,
            endDate: undefined
        };
    }));


    it('should update "travel" object', () => {
        let updateTravel = {
            origin: 'KTW',
            startDate: '2018-08-15',
            dest: 'WAW',
            endDate: '2018-08-15'
        };

        controller.updateTravel(updateTravel);
        expect(controller.travel).to.deep.equal(updateTravel);
    });

    it('should return false for invalid user serch input', () => {
        let invalidTravel = {
            origin: 'KTW',
            startDate: '2018-08-15',
            dest: 'WAW',
            endDate: undefined
        };

        controller.validateTravelObject(invalidTravel)
        expect(controller.validateTravelObject(invalidTravel)).to.be.false;
    })

    it('should return true for valid user serch input', () => {
        let invalidTravel = {
            origin: 'KTW',
            startDate: '2018-08-15',
            dest: 'WAW',
            endDate: '2018-08-15'
        };

        controller.validateTravelObject(invalidTravel)
        expect(controller.validateTravelObject(invalidTravel)).to.be.true;
    })

    it('should toggle notification when when invalid input', () => {
        let invalidTravel = {
            origin: 'KTW',
            startDate: '2018-08-15',
            dest: 'WAW',
            endDate: undefined
        };

        controller.findFlights(invalidTravel)
        expect(controller.notify).to.be.true;
    })
});