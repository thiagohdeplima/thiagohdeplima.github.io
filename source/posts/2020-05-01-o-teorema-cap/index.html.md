---
title: O teorema CAP
date: 2020-05-01 00:07 UTC
tags: cap, teorema, dados, sistemas distribuídos
image: /posts/2020-05-01-o-teorema-cap/cover.jpg
description: Neste artigo, iremos explorar o Teorema CAP e o que ele tem a nos ensinar sobre sistemas distribuídos.
layout: post
refs:
- 'BERKELEY EECS. Towards Robust Towards Robust Distributed Systems Distributed Systems. Disponível em: https://people.eecs.berkeley.edu/~brewer/PODC2000.pdf. Acesso em: 1 mai. 2020.'

- 'STEEM, Maarten Van; TANEMBAUN, Andrew S.; Distributed Systems: Principles and Paradigms. 3. ed. [S.l.]: CreateSpace Independent Publishing Platform, 2017. p. 2-2.'

---

Teoremas, segundo sua definição clássica, são _proposições que podem ser demonstradas por meio de processos lógicos_. A computação, assim como diversas outras áreas possui seus próprios teoremas dos quais o Teorema CAP é, sem dúvida, um dos mais importantes.

Cunhado por <a href="https://en.wikipedia.org/wiki/Eric_Brewer_(scientist)" target="_blank">Eric Brewer</a>, este teorema nos trás a seguinte proposição: Um sistema distribuído que compartilhe dados somente pode ofertar em simultâneo no máximo duas das três propriedades abaixo: <sup>1</sup>

* **C**onsistency (Consistência)
* **A**vailability (Disponibilidade)
* **P**artitioning tolerance (Tolerância à particionamento)

Em outras palavras: Quando você implementar um sistema distribuído que atenda duas destas três propriedades, você automáticamente abdicou da terceira. Este é um _trade-off_ com o qual você sempre terá que lidar ao implementar este tipo de sistema.

Neste post vamos revisar o que cada uma destas propriedades significa e as implicações práticas de cada possível combinação delas em um sistema distribuído.

Entender estes conceitos é fundamentalmente importante para uma correta escolha e implementação de sistemas de fila, bancos de dados NoSQL ou mesmo SQL, sistemas de cache distribuído, etc.

### As propriedades do CAP

#### Consistência

Consistência é a garantia de que todos os nós de um sistema distribuído visualizam a versão mais atualizada dos dados e respondem todas requisições com esta versão, de modo que não importa qual nó do sistema distribuído receba um pedido de leitura para um determinado dado, sempre será retornada a última versão deste dado.

Para clarificar, visualize a imagem abaixo:

![Consistência](/posts/2020-05-01-o-teorema-cap/consistency.gif)

Neste exemplo, tentamos representar um cenário onde temos um sistema de banco de dados distribuído qualquer, com três nós.

Em meio à estes dados, temos o guardados os dados de uma usuária chamada Joaquina e por algum motivo ela decidiu atualizar seu nome para Angélica, sendo este pedido de atualização recebido pelo terceiro nó do sistema distribuído.

Este sistema é consistente pois, como você poderá notar na animação, o processo de atualização foi realizado simultâneamente em todos os nós banco de dados e com isto, qualquer consulta posterior em qualquer um dos nós retornará a versão atualizada.

Ocorre que o processo de atualização não foi realizado somente em um nó, e sim nos três em simultâneo, de modo que em todos os três nós terão a atualização imediatamente após ela ser concluída, e com isto, qualquer requisição de consulta posterior, em qualquer um dos nós, apresentará o mesmo dado.

Posteriormente, teremos um exemplo prático disto usando MongoDB e Docker.

#### Disponibilidade

Disponibilidade é a garantia de que todo pedido que for feito à um sistema distribuído sempre terá uma resposta, ou seja, sempre haverá um nó disponível para atender as requisições que chegarem.

#### Particionamento

Particionamento, como o nome diz
