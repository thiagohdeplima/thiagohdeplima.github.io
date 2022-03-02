---
title: "O Teorema CAP"
tags: [teorema-cap, sistemas-distribuidos]
date: 2022-02-27T22:11:27-03:00
draft: false
summary: Teorema CAP é uma boa ferramenta para ajudar na arquitetura de sistemas distribuídos, como microsserviços, e neste artigo abordaremos o mesmo primeiramente de forma teórica e posteriormente de forma prática.
---

Sistemas distribuídos estão em todos os lugares nos dias atuais. Clusters de Kubernetes, bancos de dados distribuído como Cassandra ou MongoDB, arquiteturas de microsserviços, todos estes são exemplos de sistemas distribuídos.

Quando nestes sistemas passamos a ter dados envolvidos, a escolha da arquitetura deve ser muito bem pensada, _tradeoffs_ devem ser compreendidos e bem análisados, do contrário, efeitos negativos da escolha da arquitetura podem pesar sobre o projeto que faz uso destes sistemas.

Neste contexto, o Teorema CAP é uma excelente ferramenta, e ele será apresentado neste artigo em duas fases: a ideia central por trás do mesmo e a perspectiva de sistemas modernos para o mesmo.

## Mas afinal, o que é este Teorema CAP ?

{{< textwithimage position="left" light-src="images/cap-light.png" dark-src="images/cap-dark.png" >}}
O Teorema CAP foi concebido por Eric Brewer, ex-professor da Universidade de Berkeley e pesquisador de computação distribuída. Sua premissa central é que um sistema distribuído pode ter simultâneamente duas das três propriedades representadas por cada uma das letras que compõem seu nome:  Consistência, Disponibilidade (do inglês, Availability), e Particionamento dos dados.
{{< /textwithimage >}}

Antes de prosseguirmos na compreensão do teorema em si, é necessário compreender o que cada um destes itens significa.

### Consistência

O termo consistência pode trazer alguma confusão na sua compreensão, principalmente porque na computação existem outros usos para ele que podem significar diferentes coisas em diferentes contextos.

{{< textwithimage position="right" light-src="images/consistency-light.png" dark-src="images/consistency-dark.png" >}}

No Teorema CAP, consistência diz respeito à capacidade de um sistema distribuído de responder sempre com o dado mais atual (consistente) possível.

{{< /textwithimage >}}

Olhando o diagrama ao lado, imagine um sistema distribuído com dados de clientes, no qual foi cadastrado uma cliente com o nome Maria e ID 123.

Se este sistema for consistente, quando um segundo usuário requisitar os dados desta usuária 123, os dados retornados serão os dados cadastrados pelo usuário um, mesmo que esta consulta ocorra imediatamente após este registro ter acontecido.

Vale ressaltar que isto também vale para atualizações: Se por ventura alguém atualizar o cadastro da usuária 123 e outro alguém fizer uma consulta dos dados desta usuária - ainda que imediatamente após a atualização - os dados mais atuais serão retornados.

### Disponibilidade

O Teorema CAP considera disponível um sistema que sempre responde a todas as requisições que lhe são feitas, ainda que a resposta seja um erro.

Em outras palavras, não importa qual seja a resposta, um sistema distribuído disponível nunca deixa de enviar uma.

### Particionamento

Sistemas distribuídos que possuem particionamento são, no fim das contas, aqueles cujos dados contidos neles estão distribuídos entre diversos nós, ou seja, cada nó possui um pedaço do todo.

## Consistência e Disponibilidade

{{< textwithimage position="right" light-src="images/cap-ca-light.png" dark-src="images/cap-ca-dark.png" >}}
Sit tempor ullamco nostrud commodo incididunt nostrud reprehenderit eu nostrud laboris anim. Et incididunt officia dolor do minim. Id pariatur fugiat laborum ad. Incididunt sunt nulla nulla cupidatat aliqua do culpa ex consectetur excepteur qui ex. Irure ex cillum pariatur officia non sit fugiat do sit dolore nostrud velit qui.
{{< /textwithimage >}}


