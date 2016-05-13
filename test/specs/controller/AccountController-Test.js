describe("AccountsController Test", function () {
    var scope, $location, createAccountsController;
    beforeEach(module('bullsfirst'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    describe('test add', function () {
        it("should have a message equal to 'Hello!'", function () {
            var $scope = {};
            var controller = $controller('AccountsController', { $scope: $scope});
            $scope.rows =[];
            $scope.addAccount();
            console.log('--------> expect: ',expect($scope.rows.length));
            expect($scope.rows.length).to.equal(1);
        });
    });

});
