define(["require", "exports"], function (require, exports) {
    "use strict";
    var _a = intern.getInterface("tdd"), suite = _a.suite, test = _a.test;
    var assert = intern.getPlugin("chai").assert;
    suite("standalone test failure", function () {
        test("An test that does not use anything, fails, but stands on its own", function () {
            assert.equal(1, 2);
        });
    });
    return {};
});
