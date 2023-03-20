import Budget from '../models/budget.js'
import State from '../models/state.js'
import Treasury from '../models/treasury.js'
import Budgets from'./budget.json' assert{type: 'json'}
import States from'./state.json' assert{type: 'json'}
import Treasures from'./treasury.json' assert{type: 'json'}
import mongoose from './connection.js'

Budget.deleteMany()
Budget.create(Budgets)
.then(budgets => {
  console.log(budgets)
  })
  .catch(err => {
  console.log(err)
  })

State.deleteMany()
State.create(States)
.then(states => {
  console.log(states)
  })
  .catch(err => {
    console.log(err)
    })

Treasury.deleteMany()
Treasury.create(Treasures)
.then(treasures => {
  console.log(treasures)
  })
  .catch(err => {
    console.log(err)
    })
.then(mongoose.disconnect)
.then(()=> console.log("Done...but why am I not seeded to your Mongo Shell?!"))