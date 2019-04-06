const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("standalone test", () => {
  test("An test that does not use anything, but stands on its own", () => {
    assert.equal(1, 1);
  });
});

export = {};
