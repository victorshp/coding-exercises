function isSolved(board) {
	const [x, y] = [[], []];
	board.forEach((row, rowIndex) => {
		row.forEach((cell, columIndex) => {
			if (cell === 1) x.push([rowIndex, columnIndex])	
		})
	});
}
/*
describe("Tests", () => {
  it("test", () => {
// You can use Test.expect(boolean, [optional] string) to test your code
Test.expect(isSolved([[0,0,1],
                      [0,1,2],
                      [2,1,0]]) === -1);
  });
});
*/

console.log(isSolved())
