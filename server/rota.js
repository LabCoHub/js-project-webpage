
let express = require('express');
let methodOverride = require('method-override');
let app = express();

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static('views'));

const ProdutoControlador = require('./controlador/produto-controlador');
const produtoControlador = new ProdutoControlador();


class Rota {

   static iniciar() {

      this.definirRotaPaginaInicial(app);
      this.definirRotaHome(app);
      this.definirRotaCadastroPessoa(app);
      this.definirRotaCadastro(app);
      this.definirRotaConsulta(app);  
      this.definirRotaExclusao(app);                       
      this.definirRotaAtualizacao(app);
      this.definirRotaVerificarLogin(app);
   }

   static definirRotaPaginaInicial(app) {
     
      app.get('/', produtoControlador.apresentaPaginaInicial());        
   }

   static definirRotaVerificarLogin(app) {
      app.post('/login', produtoControlador.verificarLogin());          
   }

   static definirRotaHome(app) {
     
      app.get('/home', produtoControlador.apresentaPaginaHome());        
   }

   static definirRotaCadastroPessoa(app) {
      app.route('/pessoa/form')
         .get(produtoControlador.apresentaFormCadastroPessoa())
         .post(produtoControlador.adicionaPessoa());            
   }

   static definirRotaCadastro(app) {
      app.route('/produtos/form')
         .get(produtoControlador.apresentaFormCadastroProduto())
         .post(produtoControlador.adicionaProduto());              
   }

   static definirRotaConsulta(app) {

      app.get('/produtos', produtoControlador.listaProdutos());
   }

   static definirRotaExclusao(app) {

      app.delete('/produtos/remover', produtoControlador.removeProduto());    
   }

   static definirRotaAtualizacao(app) {

      app.get('/produtos/form/:id', produtoControlador.recuperaProdutoPorId());
      app.put('/produtos/form/atualizar', produtoControlador.atualizaProduto());
   }

   static get APP() {

      return app;
   }

}

module.exports = Rota;
