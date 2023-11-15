
const Livro = require('../../backend/livro');

const db = require('../../database/database');

const livro = new Livro(db);


class LivroControlador {

    apresentaPaginaInicial() {
        
        return function(req, resp) {

            resp.render('menuPrincipal', {livro: {}});
        }
    }    

    listaLivros() {

        return function(req, resp) {

            livro.lista()
                 .then(livros => resp.render('formConsulta', {livros: livros}))
                 .catch(erro => console.log(erro));
        };

    }

    apresentaFormCadastroLivro() {

        return function(req, resp) {

            resp.render('formCadastra', {livro: {}});
        }
    }

    adicionaLivro() {

        return function(req, resp) {  

        livro.adiciona(req.body)
             .then(resp.redirect('/livros'))
             .catch(erro => console.log(erro));
        }
    }

    removeLivro() {

        return function(req, resp) {

            const ids = req.body;
            const valores =  Object.values(ids)[0];

            if (Array.isArray(valores)){
            
              const valores =  Object.values(ids)[0];   
            
              for (let i = 0; i < valores.length; i++) {

                livro.remove(valores[i])
                     .catch(erro => console.log(erro));
              }

              resp.redirect('/livros');

            }else{

                const valor =  Object.values(ids)[0];  
                               
                livro.remove(valor)
                     .then(resp.redirect('/livros'))
                     .catch(erro => console.log(erro));
            }        
        }
    }

    recuperaLivroPorId() {

        return function(req, resp) {

            const id = req.params.id;
        
            livro.buscaPorId(id)
                 .then(livro => resp.render('formAtualiza', {livro: livro}))
                 .catch(erro => console.log(erro));   
        }

    }   
    
    atualizaLivro() {

        return function(req, resp) { 

            livro.atualiza(req.body)
                 .then(resp.redirect('/livros'))
                 .catch(erro => console.log(erro));
        }
    }   
}

module.exports = LivroControlador;