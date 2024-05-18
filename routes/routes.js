// MÓDULOS
const express = require("express");
const router = express.Router();

// CONTROLLERS
const gatoController = require("..//controller/gatoController");
const servicoController = require("..//controller/servicoController");

// REQUISIÇÕES HTTP PRINCIPAL
router.get("/", (req, res) => {
    return res.json({ message: "Sistema de PetShop" });
})

// REQUISIÇÕES HTPP GATO

// POST - CADASTRAR
router.post("/add_gato", gatoController.gatoCreate);

// GET - LISTAR 
router.get("/gatos/:id?", gatoController.verificaJWT, gatoController.GatoListar);

// PUT - UPDATE 
router.put("/gatos/:id", gatoController.GatoUpdate);

// DELETE 
router.delete("/gatos/:id", gatoController.GatoDelete);

router.post("/login", gatoController.GatoVerificaLogin);


// REQUISIÇÕES PRODUTO

// POST - CADASTRAR
router.post("/add_gatos", servicoController.servicoCreate);

// GET LISTAR 
router.get("/listar/:id?", servicoController.ServicoListar);

module.exports = router;