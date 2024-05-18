const Gato = require("../model/gatoModel");
const jwt = require("jsonwebtoken");
module.export = class gatoController {
    // CREATE
    static async GatoCreate(req, res) {
        let nome = req.body.nome;
        let raca = req.body.raca;
        let dono = req.body.dono;
        const gato = {
            nome: nome,
            raca: raca,
            dono: dono
        }
        await Gato.create(gato);
        res.json({ message: "Gato cadastrado com sucesso" });
    }
    // READ - LISTAR
    static async GatoListar(req, res) {
        const id_gato = req.params.id;
        if (id_gato) {
            const gato = await Gato.findOne({ where: { id_gato: id_gato } });
            res.json(gato);
        } else {
            const gato = await Gato.findAll({ raw: true });
            res.json(gato);
        }
    }
    // UPDATE
    static async gatoUpdate(req, res) {
        const id_gato = req.params.id;
        let nome = req.body.nome;
        let raca = req.body.raca;
        let dono = req.body.dono;
        const gato = {
            nome: nome,
            raca: raca,
            dono: dono
        };
        await Gato.update(gato, { where: { id_gato: id_gato } });
        res.json({ message: "Cadastro atualizado com sucesso! Foram atualizados as seguintes informações: ", dados: gato });
    }
    // FUNÇÃO GatoDelete RESPONSÁVEL PELA EXCLUSÃO DO USUÁRIO.
    static async GatoDelete(req, res) {
        var gato = req.body.gato;
        var raca = req.body.raca;
        const dados = {
            gato: gato,
            raca: raca
        };
        const gato = await Gato.findOne({ where: { gato: gato, raca: raca } }).then((gato) => {
            if (gato != undefined) {
                const id = gato.id_gato;
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300 // expira em 5 minutos
                });
                return res.json({ auth: true, token: token });
                // CRIANDO TOKEN
            } else {
                res.status(402).json({ message: "Erro ao acessar o sistema" });
            }
        })

    }
    // VERIFICAÇÃO DE CRIAÇÃO DO TOKEN 
    static async verificaJWT(req, res, next) {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: "Nenhum token criado." });
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: "Falha na autenticação com o token." });

            // SALVA NO REQUEST PARA O USO POSTERIOR
            req.userId = decoded.id;
            next();
        })
    }

}