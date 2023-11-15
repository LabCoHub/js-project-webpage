
let express = require('express');
let methodOverride = require('method-override');
let app = express();

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const LivroControlador = require('./controlador/livro-controlador');
const livroControlador = new LivroControlador();


class Rota {

    static iniciar() {

      this.definirRotaPaginaInicial(app); 
      this.definirRotaCadastro(app);
      this.definirRotaConsulta(app);  
      this.definirRotaExclusao(app);                       
      this.definirRotaAtualizacao(app); 
    }

    static definirRotaPaginaInicial(app) {
     
      app.get('/', livroControlador.apresentaPaginaInicial());        
    }

    static definirRotaCadastro(app) {

      app.route('/livros/form')
         .get(livroControlador.apresentaFormCadastroLivro())
         .post(livroControlador.adicionaLivro());              
   }

   static definirRotaConsulta(app) {

      app.get('/livros', livroControlador.listaLivros());
   }

   static definirRotaExclusao(app) {

      app.delete('/livros/remover', livroControlador.removeLivro());    
   }

   static definirRotaAtualizacao(app) {

      app.get('/livros/form/:id', livroControlador.recuperaLivroPorId());
      app.put('/livros/form/atualizar', livroControlador.atualizaLivro());
   }

   static get APP() {

      return app;
   }

}

module.exports = Rota;
