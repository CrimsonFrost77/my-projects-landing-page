// rps.test.js

// Mock localStorage with initial score
const initialScore = {
  wins: 0,
  losses: 0,
  ties: 0,
};

const localStorageMock = {
  getItem: jest.fn(() => JSON.stringify(initialScore)),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

// Import after localStorage mock is set up
const { pickComputerMove } = require("./rps");

describe("Computer Move Distribution Test", () => {
  const moves = ["rock", "paper", "scissors"];
  const frequency = { rock: 0, paper: 0, scissors: 0 };
  const totalRuns = 1000000;

  beforeEach(() => {
    localStorage.clear();
    frequency.rock = 0;
    frequency.paper = 0;
    frequency.scissors = 0;
  });

  test("should pick each move approximately evenly", () => {
    for (let i = 0; i < totalRuns; i++) {
      const move = pickComputerMove();
      frequency[move]++;
    }

    // Add this to see distribution
    console.log("Move frequencies:", {
      rock: `${frequency.rock} (${((frequency.rock / totalRuns) * 100).toFixed(
        2
      )}%)`,
      paper: `${frequency.paper} (${(
        (frequency.paper / totalRuns) *
        100
      ).toFixed(2)}%)`,
      scissors: `${frequency.scissors} (${(
        (frequency.scissors / totalRuns) *
        100
      ).toFixed(2)}%)`,
    });

    const expectedFrequency = totalRuns / moves.length;
    const tolerance = expectedFrequency * 0.1; // 10% tolerance

    moves.forEach((move) => {
      expect(frequency[move]).toBeGreaterThan(expectedFrequency - tolerance);
      expect(frequency[move]).toBeLessThan(expectedFrequency + tolerance);
    });
  });
});
