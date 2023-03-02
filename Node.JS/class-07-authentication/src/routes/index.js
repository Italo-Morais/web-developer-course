const { Router } = require("express");
const router = Router();
const users = require("../controllers/users");
const loginControllers = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth");
const prisma = require("../database");

router.get("/users", users.read);
router.post("/users", users.create);
router.put("/users/:id", users.update);
router.delete("/users/:id", users.delete);

router.post("/login", loginControllers.auth);
router.get("/system", authMiddleware, async (req, res) => {
  const id = req.userID;
  const user = await prisma.users.findFirst({ where: { id } });
  res.json({
    system: true,
    id,
    email: user.email,
    status: "active",
  });
});

module.exports = router;
