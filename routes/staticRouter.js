import { Router } from "express";


const router = Router();


const router = Router();

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const allurls = await URL.find({});
  return res.render("home", {
    urls: allurls,
  });
});

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
  const allurls = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allurls,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

export default router;
