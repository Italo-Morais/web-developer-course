const prisma = require("../databases");

module.exports = {
  async read(req, res) {
    const { id } = req.query;
    if (id) {
      const listCourses = await prisma.courses.findUnique({
        where: { id: Number(id) },
      });
      if (!listCourses) return res.json("User not found");
    } else {
      const listCourses = await prisma.courses.findMany();
      return res.json({ listCourses });
    }
  },

  async create(req, res) {
    try {
      const { name, hours } = req.body;
      const createCourse = await prisma.courses.create({
        data: { name, hours: Number(hours) },
      });
      res.json(`Curso criado com sucesso!`);
    } catch (error) {
      return res.json(`Esse curso já existe`);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, hours } = req.body;
      const updateCourse = await prisma.courses.update({
        where: { id: Number(id) },
        data: { name, hours: Number(hours) },
      });
      res.json(`Curso atualizado com sucesso!`);
    } catch (error) {
      return res.json(`Esse curso já está atualizado!`);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteCourse = await prisma.courses.delete({
        where: { id: Number(id)}});
      return res.json(`Curso deletado com sucesso!`);
    } catch (error) {
      res.json('Esse curso não existe!');
    }
  },
};
