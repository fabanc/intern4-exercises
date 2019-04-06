const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("standalone test failure", () => {
  test("An test that does not use anything, fails, but stands on its own", () => {
    assert.equal(1, 2);
  });
});

export = {};
