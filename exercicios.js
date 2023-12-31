/*
 * Esta função recebe um objeto que representa uma pessoa no formato
 * { nome: "João", idade: 20 }
 * Modifique o objeto recebido aumentando em 1 a idade, sem retornar
 * o objeto.
 */
function aumentarIdade(pessoa) {
  return (pessoa.idade += 1);
}

/*
 * Esta função recebe um array de números como parâmetro.
 * Adicione ao final deste array recebido um novo valor, que
 * deve ser o dobro do último.
 */
function adicionaDobroDoUltimo(array) {
  return array.push(array.length * 2);
}

/*
 * Esta função recebe um objeto no formato
 * { nome: "João" }
 *
 * A função deve retornar um novo objeto com o campo
 * email, que deve ter o valor do campo nome com @email.com ao final.
 */
function adicionaEmail(pessoa) {
  return { ...pessoa, email: pessoa.nome + "@email.com" };
}

/*
 * Esta função recebe um array de números como parâmetro.
 * A funçaõ deve retornar um novo array, que deve ser idêntico
 * ao original com um novo valor, que deve ser o último valor
 * mais 1.
 */
function adicionaNovoValor(array) {
  return [...array, array.length + 1];
}
