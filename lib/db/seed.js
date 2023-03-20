import Law from '../models/law.js'
import Laws from'./laws.json' assert{type: 'json'}
import mongoose from './connection.js'

Law.deleteMany()
Law.create(Laws)
.then(laws => {
  console.log(laws)
  })
  .catch(err => {
  console.log(err)
  })
  .then(mongoose.disconnect)
  .then(()=> console.log("Done...but why am I not seeded to your Mongo Shell?!"))

//no error, and printing new object id in objects
/*
  {
    code: 'Z',
    public_law: 'Emergency P.L. 117-58',
    title: 'Infrastructure Investment and Jobs Act',
    urls: 'https://www.congress.gov/117/plaws/publ58/PLAW-117publ58.pdf',
    disaster: 'infrastructure',
    _id: new ObjectId("6417b5e5dd60db851f25b846"),
    __v: 0
  }
]
Done...but why am I not seeded to your Mongo Shell?!
*/