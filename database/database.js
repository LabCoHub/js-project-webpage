const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('./database/data.db');

//DROP TABLE IF EXISTS pessoa; DROP TABLE IF EXISTS produto;

const CRIAR_TABELA_PRODUTO = 
`
CREATE TABLE IF NOT EXISTS produto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descricao TEXT DEFAULT ('') NOT NULL,
    preco REAL NOT NULL
)
`;

const CRIAR_TABELA_PESSOA = 
`
CREATE TABLE IF NOT EXISTS pessoa(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    dataNascimento DATE,
    email TEXT NOT NULL,
    tel TEXT NOT NULL,
    senha TEXT NOT NULL,
    rg TEXT NOT NULL,
    genero TEXT NOT NULL,
    dataRG DATE,
    estadoRG TEXT,
    cidadeRG TEXT,
    naturalidade TEXT
)
`;


bd.serialize(() => {
    bd.run(CRIAR_TABELA_PRODUTO);
    bd.run(CRIAR_TABELA_PESSOA);
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;