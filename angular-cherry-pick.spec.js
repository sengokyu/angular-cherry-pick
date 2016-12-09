/**
 * angularjs cherry pick filter test
 */
'use strict';


describe('ngCherryPick', function () {
    var $filter;
    var array = [
        {id: 1, text: 'hoge'},
        {id: 2, text: 'fuga'},
        {id: 3, text: 'fugo'}
    ];

    beforeEach(module('ngCherryPick'));

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    it('returns picked text', function () {
        var cherrypick = $filter('cherrypick');

        var result = cherrypick(array, {id: 2}, 'text');

        expect(result).toEqual('fuga');
    });

    it('returns undefined when not exists', function () {
        var cherrypick = $filter('cherrypick');

        var result = cherrypick(array, {id: 4}, 'text');

        expect(result).toBeUndefined();
    });
});
