const router = require('express').Router()
const Accounts = require('./accounts-model')
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  console.log("get running")
  Accounts.getAll()
  .then((account)=>{
    res.status(200).json(account)
  })
})

router.get('/:id', (req, res, next) => {
  const {id}= req.params
  // DO YOUR MAGIC
  Accounts.getById(id)
  .then((account)=>{
    res.status(200).json(account)
  })
})

// router.post('/', (req, res, next) => {
//   // DO YOUR MAGIC
// })

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
