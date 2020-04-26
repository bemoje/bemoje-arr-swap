import arrSwap from '../src/arr-swap'

describe('arrSwap', () => {
	test('works', () => {
		const a = [10, 20]
		arrSwap(a, 0, 1)
		expect(a).toStrictEqual([20, 10])
	})
})
