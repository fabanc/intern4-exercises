"use strict";
var _a = intern.getInterface("tdd"), suite = _a.suite, test = _a.test;
var assert = intern.getPlugin("chai").assert;
suite("standalone test", function () {
    test("An test that does not use anything, but stands on its own", function () {
        assert.equal(1, 1);
    });
});
