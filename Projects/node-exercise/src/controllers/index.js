const prisma = require('../database')

module.exports = {
  async create(req, res) {
    try {
      const { name, hours } = req.body;
      const createCourse = await prisma.courses.create({
        data: { name, hours: Number(hours) },
      });
      res.json(`Curso: ${createCourse} criado com sucesso!`);
    } catch (error) {
      return res.json(`Erro ao criar curso`);
    }
  },
  async read(req, res) {
    const { id } = req.query;
    if (id) {
      const listCourses = await prisma.courses.findUnique({
        where: { id: Number(id) }
        
      });
      res.json(`Curso: ${listCourses} listado com sucesso!`);
      if (!listCourses) return res.json("Course not found");
    } else {
      const listCourses = await prisma.courses.findMany();
      return res.json({ listCourses });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, hours } = req.body;
      const updateCourse = await prisma.courses.update({
        where: { id: Number(id) },
        data: { name: String(name), hours: Number(hours) },
      });
      res.json(`Curso atualizado`);
    } catch (error) {
      return res.json(`Erro`);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteCourse = await prisma.courses.delete({
        where: { id: Number(id)}});
      return res.json(`Curso deletado`);
    } catch (error) {
      res.json('Esse curso não existe!');
    }
  },
};
