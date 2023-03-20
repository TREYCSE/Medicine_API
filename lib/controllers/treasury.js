import Treasury from "../models/treasury.js"

const treasuryController = {

index: (req, res) => {  
Treasury.find({})
.then(treasury => {
res.json(treasury)
})
}
}

export default treasuryController;