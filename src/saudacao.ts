function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};

const meuNome = "Ademir";
const saudacaoMeuNome = saudacao(meuNome);
console.log(saudacaoMeuNome);