const Produto = require('../../backend/produto');

const db = require('../../database/database');

const produto = new Produto(db);


class ProdutoControlador {

    apresentaPaginaInicial() {
        
        return function(req, resp) {
            resp.render('login', { error: false });
        }
    }

    apresentaPaginaHome() {
        
        return function(req, resp) {

            resp.render('menuPrincipal', {produto: {}});
        }
    }
    //área da pessoa
    apresentaFormCadastroPessoa(){
        return function(req, resp) {

            resp.render('formCadastraPessoa', {produto: {}});
        }
    }

    apresentaFormCadastroPessoa() {

        return function(req, resp) {

            resp.render('formCadastraPessoa', {produto: {}});
        }
    }

    adicionaPessoa(){
        return function(req, resp) {  

            produto.adicionaPessoa(req.body)
                 .then(resp.redirect('/'))
                 .catch(erro => console.log(erro));
            }
    }

    verificarLogin() {

        return function(req, resp) {
            console.log(req.body)
            produto.verificarLogin(req.body)
                 .then(produtos => resp.render('menuPrincipal', {}))
                 .catch(produtos => resp.render('login', {error: 'error'}));
        };

    }
    ///////

    listaProdutos() {

        return function(req, resp) {

            produto.lista()
                 .then(produtos => resp.render('formConsulta', {produtos: produtos}))
                 .catch(erro => console.log(erro));
        };

    }

    apresentaFormCadastroProduto() {

        return function(req, resp) {

            resp.render('formCadastraProduto', {produto: {}});
        }
    }

    adicionaProduto() {

        return function(req, resp) {  

        produto.adiciona(req.body)
             .then(resp.redirect('/produtos'))
             .catch(erro => console.log(erro));
        }
    }

    removeProduto() {

        return function(req, resp) {

            const ids = req.body;
            const valores =  Object.values(ids)[0];

            if (Array.isArray(valores)){
            
              const valores =  Object.values(ids)[0];   
            
              for (let i = 0; i < valores.length; i++) {

                produto.remove(valores[i])
                     .catch(erro => console.log(erro));
              }

              resp.redirect('/produtos');

            }else{

                const valor =  Object.values(ids)[0];  
                               
                produto.remove(valor)
                     .then(resp.redirect('/produtos'))
                     .catch(erro => console.log(erro));
            }        
        }
    }

    recuperaProdutoPorId() {

        return function(req, resp) {

            const id = req.params.id;
        
            produto.buscaPorId(id)
                 .then(produto => resp.render('formAtualiza', {produto: produto}))
                 .catch(erro => console.log(erro));   
        }

    }   
    
    atualizaProduto() {

        return function(req, resp) { 

            produto.atualiza(req.body)
                 .then(resp.redirect('/produtos'))
                 .catch(erro => console.log(erro));
        }
    }   
}

module.exports = ProdutoControlador;