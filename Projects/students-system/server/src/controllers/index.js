const prisma = require("../database");

module.exports = {
  async read(req, res) {
    try {
      const { id } = req.query;
      if (id) {
        const student = await prisma.students.findUnique({
          where: { id: Number(id) },
        });
        if (!student) return res.status(404).json("Student not found");
        return res.json(student);
      } else {
        const students = await prisma.students.findMany();
        return res.json(students);
        ("");
      }
    } catch (error) {
      console.log(error);
    }
  },
  async create(req, res) {
    try {
      const { name, email, city, phone } = req.body;
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
        return res.status(400).json("Please fill in all fields");
      }

      const studentEmail = await prisma.students.findUnique({where: {email}});
      if (studentEmail) return res.status(400).json("Email already registered");

      await prisma.students.create({ data: { name, email, city, phone } });
      return res.status(400).json('Student created');

    } catch (error) {
      console.log(error);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, city, phone, } = req.body;
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
        return res.status(400).json("Please fill in all fields");
      }

      const student = await prisma.students.findUnique({where: {id: Number(id)}});
      if (!student) return res.status(404).json("Student not found");

      const studentEmail = await prisma.students.findUnique({where: {email}});
      if (studentEmail) return res.status(400).json("Email already registered");

      await prisma.students.update({ 
        data: { name, email, city, phone },
        where: { id: Number(id) } 
      });
      return res.status(400).json('Student updated');
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const student = await prisma.students.findUnique({where: {id: Number(id)}});
      if(!student) return res.status(404).json("Student not found");

      await prisma.students.delete({ where: { id: Number(id) } });
      return res.status(400).json('Student deleted');
    } catch (error) {
      console.log(error);
    }
  },
};
