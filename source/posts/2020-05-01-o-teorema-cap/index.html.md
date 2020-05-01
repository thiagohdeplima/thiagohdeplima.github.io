---
title: O teorema CAP
date: 2020-05-01 00:07 UTC
tags: cap, teorema, dados, sistemas distribuídos
image: /posts/2020-05-01-o-teorema-cap/cover.jpg
description: Neste artigo, iremos explorar o Teorema CAP e o que ele tem a nos ensinar sobre sistemas distribuídos.
layout: post
---

Teoremas, segundo sua definição clássica, são preposições que podem ser demonstradas por meio de processos lógicos. A computação, assim como diversas outras áreas, possui seus teoremas, dos quais o Teorema CAP é, sem dúvida, um dos mais importantes.

Cunhado por Eric Brewer, este teorema nos trás a seguinte preposição: Um sistema distribuído somente pode ofertar em simultâneo no máximo duas das três propriedades abaixo:

* **C**onsistency (Consistência)
* **A**vailability (Disponibilidade)
* **P**artitioning tolerance (Tolerância à particionamento)

![Teorema CAP](/posts/2020-05-01-o-teorema-cap/theorem.svg) 

A existência de duas destas três propriedades para fazerem parte de em um sistema distribuído implica automáticamente em abdicar da terceira.

Embora seja aplicável à qualquer sistema distribuído, este conceito hoje é fundamentalmente aplicável em bancos de dados. Entendê-lo e conseguir compreender quais propriedades determinado tipo de banco de dados implementa é fundamental para uma escolha adequada de plataforma NoSQL ou mesmo SQL para resolver determinado problema..

### O que é um sistema distribuído?

<pre>EM DESENVOLVIMENTO</pre>

### Entendendo cada propriedade

#### Consistência

Consistência é a garantia de que todos os nós do sistema distribuído visualizam a versão mais atualizada dos dados e respondem todas requisições com esta versão.

#### Disponibilidade

Disponibilidade é a garantia de que todo pedido que for feito à um sistema distribuído sempre terá uma resposta, ou seja, sempre haverá um nó disponível para atender as requisições que chegarem.

#### Particionamento

Particionamento, como o nome diz
