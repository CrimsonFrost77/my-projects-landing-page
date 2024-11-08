const { pickComputerMove } = require("./rps");

describe("Computer Move Distribution Test", () => {
  const moves = ["rock", "paper", "scissors"];
  const frequency = { rock: 0, paper: 0, scissors: 0 };
  const totalRuns = 100000;

  for (let i = 0; i < totalRuns; i++) {
    const move = pickComputerMove();
    frequency[move]++;
  }

  test("should pick each move approximately evenly", () => {
    const expectedFrequency = totalRuns / moves.length;
    const tolerance = expectedFrequency * 0.1; // 10% tolerance

    moves.forEach((move) => {
      expect(frequency[move]).toBeGreaterThan(expectedFrequency - tolerance);
      expect(frequency[move]).toBeLessThan(expectedFrequency + tolerance);
    });
  });
});
