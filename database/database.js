const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('./database/data.db');

const CRIAR_TABELA_LIVRO = 
`
CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL, 
    preco REAL NOT NULL,
    descricao TEXT DEFAULT ('') NOT NULL
)
`;

const INSERIR_LIVRO_1 = 
`
INSERT INTO livros (
    titulo,
    preco,
    descricao
) SELECT 'Node na prática', 30.0, 'Como desenvolver com Node.' WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'Node na prática')
`;

const INSERIR_LIVRO_2 = 
`
INSERT INTO livros (
    titulo, 
    preco,
    descricao
) SELECT 'JavaScript na prática', 40.0, 'Como desenvolver com JavaScript.' WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'JavaScript na prática')
`;

bd.serialize(() => {
    bd.run(CRIAR_TABELA_LIVRO);
    bd.run(INSERIR_LIVRO_1);
    bd.run(INSERIR_LIVRO_2);
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;