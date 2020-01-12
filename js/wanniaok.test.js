const wanniaok = require("./wannianok");

describe("moonxzget", () => {
  it("should return Lion at 12/01/2020 13:10:00-0300", () => {
    console.log(wanniaok.moonxzget("18", "13", "17", "魔羯", "狮子"));
  });
});