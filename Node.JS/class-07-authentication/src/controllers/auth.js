const bcrypt = require('bcrypt');
const prisma = require('../database');


module.exports = {
  async auth(req, res) {
    const { email, password } = req.body;
    if (!email) return res.status(400).json("Email is required");
    if (!password) return res.status(400).json("Password is required");
  
    const user = await prisma.users.findFirst({ where: { email } });
      if (!user) return res.status(400).json("User not found");

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) return res.status(400).json("Password is incorrect");

    return res.status(200).json({status: "success"});

    

    
  }
}