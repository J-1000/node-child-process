const express = require('express')
const app = express()

app.get('/default', (req, res) => {
	const sum = expensiveCalculation()
	res.send({ sum })
})

app.get('/promise', (req, res, next) => { })

app.get('/child-process', (req, res) => { })

app.listen(3000, () => console.log('Server listening on port 3000'))

function expensiveCalculation() {
	let sum = 0
	for (let i = 0; i < 1e9; i++) {
		sum += i
	}
	return sum
}