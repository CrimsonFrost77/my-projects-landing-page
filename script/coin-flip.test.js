// coin-flip.test.js
const localStorageMock = {
  getItem: jest.fn(() => null), // Default to null like real localStorage
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

const { flipCoin, play, resetScore } = require("./coin-flip");

describe("Coin Flip Game", () => {
  beforeEach(() => {
    // Reset mocks before each test
    localStorageMock.getItem.mockReset();
    localStorageMock.setItem.mockReset();
    // Default behavior - return null for non-existent items
    localStorageMock.getItem.mockReturnValue(null);
    // Mock alert
    global.alert = jest.fn();
  });

  test("flipCoin should return heads and tails with roughly equal probability", () => {
    const flips = 10000;
    let headsCount = 0;
    let tailsCount = 0;

    for (let i = 0; i < flips; i++) {
      const result = flipCoin();
      if (result === "heads") {
        headsCount++;
      } else {
        tailsCount++;
      }
    }

    const headsPercentage = (headsCount / flips) * 100;
    console.log(`\nHeads: ${headsCount} (${headsPercentage.toFixed(2)}%)`);
    console.log(
      `Tails: ${tailsCount} (${(100 - headsPercentage).toFixed(2)}%)\n`
    );

    expect(headsPercentage).toBeGreaterThan(45);
    expect(headsPercentage).toBeLessThan(55);
  });

  test("play function should correctly track score", () => {
    // Mock localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
    global.localStorage = localStorageMock;
    global.alert = jest.fn();

    // Mock Math.random to return predictable value
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.1; // Will always return heads
    global.Math = mockMath;

    play("heads");
    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining("You win!")
    );

    play("tails");
    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining("You lose!")
    );
  });

  test("resetScore should reset wins and losses to zero", () => {
    global.alert = jest.fn();
    resetScore();
    expect(global.alert).toHaveBeenCalledWith("Score has been reset!");
  });
});
