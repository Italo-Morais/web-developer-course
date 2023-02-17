module.exports = {
  create(req, res) {
    const { id, name } = req.body;
    res.json({
      status: `Created`,
      situation: `User: ${name}, id: ${id}`,
    });
  },

  read(req, res) {
    const { id, name } = req.body;
    res.json({
      status: `Listed`,
      situation: `User: ${name}, id: ${id}`,
    });
  },

  update(req, res) {
    const { id, name } = req.params;
    res.json({
      status: `Updated`,
      situation: `User: ${name}, id: ${id}`,
    });
  },

  delete(req, res) {
    const { id, name } = req.query;
    res.json({
      status: `Deleted`,
      situation: `User: ${name}, id: ${id}`
  });
  },
};
