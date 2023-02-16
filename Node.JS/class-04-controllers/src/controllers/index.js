module.exports = {
  create (req, res) {
  const { id, name } = req.body;
  res.json({situation: `User ${name} de id ${id} created!`});
  
},

read (req, res) {
  const { id, name } = req.params;
  res.json({situation: `Show user id ${id} and name ${name}!`});
  
},

update (req, res) {
  const { id, name } = req.params;
  res.json({situation: `Update user id ${id} and name ${name}!`});
  
},

delete (req, res) {
  const { id, name } = req.params;
  res.json({situation: `Deleted user id ${id} and name ${name}!`});
}
}