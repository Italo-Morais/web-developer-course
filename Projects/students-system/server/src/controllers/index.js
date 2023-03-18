const prisma = require("../database");

module.exports = {
  async read(req, res) {
    try {
      const { id } = req.query;
      if (id) {
        const student = await prisma.students.findUnique({
          where: { id: Number(id) },
        });
        if (!student) return res.status(400).json("Aluno não encontrado");
        return res.json(student);
      } else {
        const students = await prisma.students.findMany();
        return res.json(students);
      }
    } catch (error) {
      console.log(error);
    }
  },

  async create(req, res) {
    try {
      const { name, email, phone, city } = req.body;
      if (
        !name ||
        !email ||
        !phone ||
        !city ||
        name == "" ||
        email == "" ||
        phone == "" ||
        city == ""
      ) {
        return res.status(400).json("Por favor preencha todos os dados");
      }

      const studentsEmail = await prisma.students.findUnique({
        where: { email },
      });
      if (studentsEmail) return res.status(400).json("Email já em uso!");

      await prisma.students.create({ data: { name, email, phone, city } });
      return res.json("Aluno cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, phone, city } = req.body;
      if (
        !name ||
        !email ||
        !phone ||
        !city ||
        name == "" ||
        email == "" ||
        phone == "" ||
        city == ""
      ) {
        return res.status(400).json("Por favor preencha todos os dados");
      }

      const student = await prisma.students.findUnique({
        where: { id: Number(id) },
      });
      if (!student) return res.status(400).json("Aluno não encontrado");

      const studentsEmail = await prisma.students.findUnique({
        where: { email },
      });
      if (studentsEmail && studentsEmail.email !== student.email)
        return res.status(400).json("Email já em uso!");

      await prisma.students.update({
        where: { id: Number(id) },
        data: { name, email, phone, city },
      });

      return res.json("Aluno atualizado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const student = await prisma.students.findUnique({
        where: { id: Number(id) },
      });
      if (!student) return res.status(400).json("Aluno não encontrado");

      await prisma.students.delete({ where: { id: Number(id) } });
      return res.json("Aluno deletado com sucesso");
    } catch (error) {
      console.log(error);
    }
  },
};
