---
title: "O Teorema CAP"
tags: [teorema-cap, sistemas-distribuidos]
date: 2022-02-27T22:11:27-03:00
draft: false
summary: Teorema CAP é uma boa ferramenta para ajudar na arquitetura de sistemas distribuídos, como microsserviços, e neste artigo abordaremos o mesmo primeiramente de forma teórica e posteriormente de forma prática.
---

Sistemas distribuídos estão em todos os lugares nos dias atuais, seja num cluster de Kubernetes, um banco de dados distribuído como Cassandra ou MongoDB, ou mesmo em arquiteturas de microsserviços.

Quando nestes sistemas passamos a ter dados envolvidos, a escolha da arquitetura deve ser muito bem pensada, _tradeoffs_ devem ser compreendidos e bem análisados, do contrário, efeitos negativos da escolha da arquitetura podem pesar sobre o projeto que faz uso destes sistemas.

Neste contexto, o Teorema CAP é uma excelente ferramenta, e ele será apresentado neste artigo em duas fases: a ideia central por trás do mesmo e a perspectiva de sistemas modernos para o mesmo.

## Mas afinal, o que é este Teorema CAP ?

{{< textwithimage position="left" light-src="images/cap-light.png" dark-src="images/cap-dark.png" >}}
O Teorema CAP foi concebido por Eric Brewer, ex-professor da Universidade de Berkeley e pesquisador de computação distribuída. Sua premissa central é que um sistema distribuído pode ter simultâneamente duas das três propriedades representadas por cada uma das letras que compõem o nome do teorema:  Consistência, Disponibilidade (do inglês, Availability), e Particionamento dos dados.
{{< /textwithimage >}}

Antes de entendermos o conceito por trás dele, precisamos entender o que cada uma destas palavras que o compõe realmente significa.

### Consistência

Este termo pode ser o que talvez traga mais confusão na sua compreensão, principalmente porque na computação existem outros usos para ele que podem significar coisas diferentes do que este termo significa no contexto do CAP.

Dentro do Teorema CAP, o termo consistência significa basicamente a capacidade de um sistema responder sempre com o dado mais atual.

### Disponibilidade

A disponibilidade é sem dúvida o conceito mais simples de se compreender.

Basicamente, diz respeito à capacidade de um sistema de responder a toda e qualquer requisição que é feita à ele, ainda que esta resposta seja um erro.

### Particionamento

Sistemas distribuídos que possuem particionamento são, no fim das contas, aqueles cujos dados contidos neles estão distribuídos entre diversos nós, ou seja, cada nó possui um pedaço do todo.

## Consistência e Disponibilidade

{{< textwithimage position="right" light-src="images/cap-ca-light.png" dark-src="images/cap-ca-dark.png" >}}
Sit tempor ullamco nostrud commodo incididunt nostrud reprehenderit eu nostrud laboris anim. Et incididunt officia dolor do minim. Id pariatur fugiat laborum ad. Incididunt sunt nulla nulla cupidatat aliqua do culpa ex consectetur excepteur qui ex. Irure ex cillum pariatur officia non sit fugiat do sit dolore nostrud velit qui.
{{< /textwithimage >}}

