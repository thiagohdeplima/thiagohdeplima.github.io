---
title: "NoSQL: da teoria à prática - parte 1"
date: 2018-11-21 00:00 UTC
tags: NoSQL, teorema cap
layout: post
description: "Neste primeiro artigo sobre NoSQL, falaremos sobre três conceitos fundamentais no entendimento de banco de dados: ACID, BASE e Teorema CAP"
---

A área da computação experimentou profundas mudanças nos últimos anos.

Uma das mais significativas foi o advento do Cloud Computing. A pouco menos de 10 anos, a "nuvem" era somente uma opção que alguns gestores consideravam para algumas aplicações, enquanto que hoje em dia é praticamente a única opção da grande maioria das empresas. Mesmo empresas com uma estrutura tecnologica mais consolidada tem recorrido à nuvem, e algumas com mais recursos estão até criando suas próprias soluções de Cloud Computing.

O Cloud Computing, no entanto, não veio só. Junto com ele outro tipo de solução também emergiu, e com o advento da "era do Big Data" acabou ganhando muita força nos últimos anos: Os bancos de dados não relacionais, também conhecidos como *NoSQL*.

Embora eles constituam uma parte fundamental da stack tecnologica de muitas soluções de grande porte que conhecemos, este tipo de solução ainda não é bem compreendida pela comunidade de tecnologia em geral, e inclusive são muito mal utilizados em diversos cenários, principalmente por entusiastas que acreditam que este tipo de solução é meramente uma sobreposição das soluções relacionais, quando na verdade são bem mais do que isto.

Neste primeiro sobre o assunto, firmaremos as bases dos conceituais necessárias para podermos então nos aprofundar no funcionamento e conceitos mais avançados acerca deste tipo de solução. Vamos lá?

### ACID

Transações são um conceito fundamental da computação.

Caso você não conheça o que exatamente são transações, podemos defini-las como uma sequência de passos individuais que visam atingir um único objetivo, e que devem resultar em falha ou sucesso do processo como um todo, e não de cada passo individualmente.

Um clássico exemplo de uma transação é uma transferência bancária: O sistema do banco irá verificar se o cliente que está transferindo possui saldo em conta, e caso sim, irá retirar o saldo da conta do primeiro cliente. Somente após esta retirada, irá inserir o saldo na conta do segundo cliente, e finalizar a operação. A regra de uma transferência é clara: Não podemos retirar o dinheiro da conta do primeiro cliente caso o segundo não tenha recebido. Tão pouco é aceitável que o segundo cliente receba o dinheiro da transferência, se por ventura ocorre um erro na retirada deste dinheiro da conta do primeiro cliente. Em outras palavras, a transferência, do ponto de vista da computação é o que podemos chamar de transação: Se algum dos passos der errado, o processo como um todo deve ser abortado, e as contas dos dois clientes devem ser mantidas exatamente como estavam quando o processo de transferência foi iniciado.

É neste ponto que era o ACID. Este termo nada mais é do que uma sigla que representa quatro propriedades que transações devem possuir para serem inteiramente funcionais, sendo estas propriedades:

#### Atomicidade

O termo átomo no grego significa literalmente indivisível. 

#### Consistência

#### Isolamento

#### Durabilidade

### BASE

### Teorema CAP
