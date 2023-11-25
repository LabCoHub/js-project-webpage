class Produto {

    constructor(db) {
     
        this._db = db;
    }

    lista() {
        
        return new Promise((resolve, reject) => {

            this._db.all(
                'SELECT * FROM produto',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os produtos!');

                    return resolve(resultados);
                }
            )

        });
    }

    adiciona(produto) {
                
        return new Promise((resolve, reject) => {

            this._db.run(`
                INSERT INTO produto (
                        nome,
                        preco,
                        descricao
                    ) values (?, ?, ?)
                `,
                [
                    produto.nome,
                    produto.preco,
                    produto.descricao,
                ],
                function (err) {
                    if (err) {                       
                        console.log(err);
                        return reject('Não foi possível adicionar o produto!');
                    }                    
                    
                    resolve();
                } 
            )       
        });
    } 

    remove(id) {
        
        return new Promise((resolve, reject) => {

            this._db.run(`
                DELETE FROM produto WHERE id = ?`,
                [
                    id
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível excluir o produto!');
                    }
    
                    resolve();
                } 
            )       
        });
    }    

    buscaPorId(id) {
               
        return new Promise((resolve, reject) => {

            this._db.get(`
                SELECT * FROM produto WHERE id = ?`,
                [
                    id
                ],
                (erro, resultado) => {
                    if (erro)
                        return reject('Não foi possível encontrar o produto!');                    
    
                    console.log(resultado);    
                    return resolve(resultado);
                } 
            )       
        });
    }

    atualiza(produto) {
          
        return new Promise((resolve, reject) => {

            this._db.run(`
                UPDATE produto                 
                SET    nome= ?,
                       preco = ?,
                       descricao = ?
                WHERE  id = ?      
                `,
                [
                    produto.nome,
                    produto.preco,
                    produto.descricao,
                    produto.id
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível atualizar o produto!');
                    }
    
                    resolve();
                } 
            )       
        });
    } 

    
    verificarLogin(login) {
               
        return new Promise((resolve, reject) => {

            this._db.get(
                `SELECT * FROM pessoa WHERE email=? AND senha=?`,
                [
                    login.user,
                    login.password
                ],
                (erro, resultado) => {
                    if (erro)
                        return reject('Erro na consulta');                    
    
                    console.log(resultado);
                    if(resultado == null){
                        return reject('Não foi possível encontrar o Usuário'); 
                    }
                    
                    return resolve(resultado);
                    
                } 
            )       
        });
    }

    adicionaPessoa(pessoa) {
                
        return new Promise((resolve, reject) => {

            this._db.run(`
                INSERT INTO pessoa (
                        nome,
                        dataNascimento,
                        email,
                        tel,
                        senha,
                        rg,
                        genero,
                        dataRG,
                        estadoRG,
                        cidadeRG,
                        naturalidade
                    ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `,
                [
                    pessoa.nome,
                    pessoa.dataNascimento,
                    pessoa.email,
                    pessoa.telefone,
                    pessoa.password,
                    pessoa.rg,
                    pessoa.gender,
                    pessoa.dataEmissao,
                    pessoa.estado,
                    pessoa.cidade,
                    pessoa.naturalidade,                    
                ],
                function (err) {
                    if (err) {                       
                        console.log(err);
                        return reject('Não foi possível adicionar uma pessoa!');
                    }                    
                    
                    resolve();
                } 
            )       
        });
    }

}

module.exports = Produto;