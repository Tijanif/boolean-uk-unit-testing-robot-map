const { printPosition } = require('../print');

describe('Test the print functions', () => {
  describe('Test the printPosition', () => {
    it('It should print the robot position', () => {
      const robotPosition = { x: 5, y: 5 };

      expect(printPosition(robotPosition)).toEqual(
        `Robot is at { x: ${robotPosition.x}, y: ${robotPosition.y} }`
      );
    });
  });
});
