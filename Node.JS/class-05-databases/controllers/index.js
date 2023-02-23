module.exports = {
  async read(req, res,) {
    res.json({alert: 'Hello World!'});
  },

  async create(req, res,) {
    res.json({alert: 'Created'});
  },

  async update(req, res,) {
    res.json({alert: 'Updated'});
  },

  async delete(req, res,) {
    res.json({alert: 'Deleted'});
  },
}
