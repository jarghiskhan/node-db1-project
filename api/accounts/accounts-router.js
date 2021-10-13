const router = require('express').Router()
const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware')
const Accounts = require('./accounts-model')
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  console.log("get running")
  Accounts.getAll()
  .then((account)=>{
    res.status(200).json(account)
  })
})

router.get('/:id', checkAccountId, (req, res, next) => {
  const {id}= req.params
  // DO YOUR MAGIC
  Accounts.getById(id)
  .then((account)=>{
    res.status(200).json(account)
  })
})

router.post('/', checkAccountPayload, checkAccountNameUnique,(req, res, next) => {
  const newAccount = req.body;
  // DO YOUR MAGIC
  Accounts.create(newAccount)
  .then((account)=>{
    res.status(201).json(account)
  })
  .catch(()=>{
    res.status(500).json({message:"unable to add that user"})
  })
})

// router.put('/:id', (req, res, next) => {
//   // DO YOUR MAGIC
// });

// router.delete('/:id', (req, res, next) => {
//   // DO YOUR MAGIC
// })

// router.use((err, req, res, next) => { // eslint-disable-line
//   // DO YOUR MAGIC
// })

module.exports = router;
