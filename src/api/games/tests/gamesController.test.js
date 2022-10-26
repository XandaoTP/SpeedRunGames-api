
const oi = require('chai').expect
const gameControl = require('../controllers/games.controller')

describe('testing controller classes', () => {
    it('testing sum', () => { 
        let a = 1
        let b = 1
        oi(gameControl.soma(a, b)).to.equal(2)
    })
})