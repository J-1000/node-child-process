const express = require('express')
const app = express()

const expensiveCalculation = () => {
	let sum = 0
	for (let i = 0; i < 1e9; i++) {
		sum += i
	}
	return sum
}

const expensiveCalculationPromise = () =>
	new Promise((resolve, reject) =>
		resolve(expensiveCalculation()))

app.get('/default', (req, res) => {
	const sum = expensiveCalculation()
	res.send({ sum })
})

app.get('/promise', async (req, res, next) => {
	const sum = await expensiveCalculationPromise()
	res.send({ sum })
})

app.get('/child-process', (req, res) => { })

app.listen(3000, () => console.log('Server listening on port 3000'))

