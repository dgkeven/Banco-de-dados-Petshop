const Servico = require("../model/servicoModel");

module.exports = class servicoController {
    //CREATE
    static async servicoCreate(req, res) {
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let preco = req.body.preco;
        let link = req.body.link;

        const servico = {
            nome: nome,
            descricao: descricao,
            preco: preço,
            link: link
        }
        await Servico.create(servico);
        res.json({ message: "Serviço cadastrado com sucesso!" });
    }
    // READ - LISTAR
    static async ServicoListar(req, res) {
        const id_servico = req.params.id;
        if (id_servico) {
            const servico = await Servico.findOne({ where: { id_servico: id_servico } });
            res.json(servico);
        } else {
            const servico = await Servico.findAll({ raw: true });
            res.json(servico);
        }
    }
    // UPDATE
    static async ServicoUpdate(req, res) {
        const id_servico = req.params.id;
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let preco = req.body.preco;
        let link = req.body.link;
        const servico = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            link: link
        };
        await Servico.update(livro, { where: { id_servico: id_servico } });
        res.json({ message: "Serviço atualizado com sucesso! Foram atualizados as sequintes informações: ", dados: servico });
    }
    // FUNÇÃO ServicoDelete RESPONSÁVEL PELA EXCLUSÃO DO SERVIÇO
    static async ServicoDelete(req, res) {
        const id_servico = req.params.id;
        await Servico.destroy({ where: { id_servico: id_servico } });
        res.json({ message: "Serviço excluído com sucesso!" });
    }
}