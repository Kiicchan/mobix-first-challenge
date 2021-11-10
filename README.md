# Primeiro Desafio Mobix
Desafio Lógica de Programação - Mobix Software

Este desafio consiste na criação de um programa que consiga representar uma ampulheta na saída do console.
Para rodar o arquivo javascript é necessário abri-lo com o Node.JS

# Experiência
Achei o desafio bem interessante. Existiam muitas formas de iniciar o problema, e dentre elas eu optei por criar um objeto através de uma função. Este método permite uma melhor visualização do mesmo, por fazer uma aproximação do mundo real.
Além disso, componentizar a ampulheta deste modo faz com que ele possa ser reaproveitado (o que pode não ser o caso neste único desafio, mas que na vida como programador é importante para evitar reescrever tanto código).
O ponto de maior dificuldade neste desafio certamente foi o Extra, de conseguir mover os grãos de areia da parte de cima para a de baixo. Aqui, saber que o problema é simétrico (a parte de cima e de baixo da ampulheta possuem o mesmo tamanho) ajuda na hora de implementar a lógica, evitando várias condicionais desnecessárias. Embora tenha concluído o desafio, percebo que perdi muito tempo tentando achar quais métodos de Array e String melhor se adequariam ao problema. Teria me poupado bastante tempo ter uma noção de quais usar.
Em certo momento, achei que mudar a representação do grão de areia internamente ao programa de um '#' para '*', de modo que ficasse mais fácil localizá-los. Entretanto, percebi que assim se perdia muito do que seria considerado um desafio, além de prejudicar a leitura de outras pessoas do mesmo código, uma vez que nem no enunciado nem visualmente o caractere é mencionado.

# Análise do resultado
Prós: reusabilidade, fácil integração. Possibilidade de se ter mais métodos sem ter de reescrever todo o código.
Contras: demorou mais para ser escrito e refatorado. Necessidade do NodeJS para ser rodado.

# Problemas subsequentes
Todos os objetivos desse desafio foram cumpridos, mas eu sempre gosto de pensar em como daria para implementar mais features no futuro. Por exemplo, criar um método de reset da ampulheta, que a devolve para seu estado original, ou mesmo um método para inverter sua posição a qualquer instante. Ou até mesmo uma integração desse objeto com uma representação front-end no browser, deixando tudo mais iterativo. E isso sem a necessidade de se ter o NodeJS instalado, necessitando-se apenas um browser como o Chrome, o que é comum a maioria dos usuários de computador.

# Clockify
Este desafio foi cronometrado pelo Clockify, e o Report está disponível no link: https://clockify.me/shared/618bee3a67ee17375214eea6