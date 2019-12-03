module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.ts$',
	moduleFileExtensions: ['ts', 'js'],
};
