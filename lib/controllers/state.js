import State from "../models/state.js"

const stateController = {

index: (req, res) => {  
State.find({})
.then(state => {
res.json(state)
})
},
showCode: (req, res) => {
State.find({code: req.params.code})
.then(state => {
res.json(state)
})
},
create: (req, res) => {
state.create(req.body)
.then(state => {
res.json(state)
})
},
edit: (req, res) => {
State.findOneAndUpdate({code: req.params.code}, req.body)
.then(state => {
res.json(state)
})
},
delete: (req, res) => {
State.findOneAndDelete({code: req.params.code})
.then(state => {
res.json(state)
})
}
}

export default stateController;