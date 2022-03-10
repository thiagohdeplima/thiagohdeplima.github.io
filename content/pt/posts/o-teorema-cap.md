---
title: "O Teorema CAP"
tags: [teorema-cap, sistemas-distribuidos]
date: 2022-02-27T22:11:27-03:00
draft: false
summary: Teorema CAP é uma boa ferramenta para ajudar na arquitetura de sistemas distribuídos, como microsserviços, e neste artigo abordaremos o mesmo primeiramente de forma teórica e posteriormente de forma prática.
---

Sistemas distribuídos estão em todos os lugares nos dias atuais. Clusters de Kubernetes, bancos de dados distribuído como Cassandra ou MongoDB, arquiteturas de microsserviços, todos estes são exemplos de sistemas distribuídos.

Quando nestes sistemas passamos a ter dados envolvidos, a escolha da arquitetura deve ser muito bem pensada, _tradeoffs_ devem ser compreendidos e bem análisados, do contrário, efeitos negativos da escolha da arquitetura podem pesar sobre o projeto que faz uso destes sistemas.

Este artigo pretende apresentar o Teorema CAP e ajudar o leitor a compreender como ele pode ajudar na escolha de uma arquitetura - ou ferramenta - adequada para cada cenário com sistemas distribuídos.

## Mas afinal, o que é este Teorema CAP ?

O Teorema CAP foi concebido por Eric Brewer, ex-professor da Universidade de Berkeley e pesquisador de computação distribuída, e pode ser resumido em duas premissas simples:

{{< textwithimage image-size="50%" position="left" light-src="images/cap-light.png" dark-src="images/cap-dark.png" >}}{{< /textwithimage >}}

1. Um sistema distribuído pode apresentar três propriedades, Consistência, disponibilidade (availability) e tolerância à particionamento dos dados em rede;

2. Via de regra, um sistema distribuído poderá contar com no máximo duas das três propriedades, ou seja, ao escolher duas, você abriu mão da terceira propriedade;

Afim de garantir total compreensão do Teorema CAP, é importante esclarecer no que realmente consistem cada uma destas três propriedades.

### Consistência

O termo consistência pode trazer alguma confusão na sua compreensão, principalmente porque na computação existem outros usos para ele que podem significar diferentes coisas em diferentes contextos.

{{< textwithimage image-size="50%" position="right" light-src="images/consistency-light.png" dark-src="images/consistency-dark.png" >}}{{< /textwithimage >}}

No Teorema CAP, consistência diz respeito à capacidade de um sistema distribuído de disponibilizar um dado tão logo ele tenha sido escrito, ou seja, os dados fornecidos serão sempre os mais atuais (consistentes) que o sistema possuir.

O diagrama ao lado ilustra uma situação de consistência. No mesmo, temos uma representação de um cenário no qual foi cadastrado uma cliente com o nome Maria e ID 123.

Em um sistema consistente, quando um segundo usuário requisitar os dados desta usuária 123, os dados retornados serão os dados cadastrados pelo usuário um, mesmo que esta consulta ocorra imediatamente após este registro ter acontecido.

Isto vale para qualquer tipo de operação de escrita, seja ela a criação de um dado novo, uma atualização ou mesmo exclusão de dados. Em um sistema consistente, estas operações terão efeito imediato após sua execução.

### Disponibilidade

Disponibilidade é um conceito simples de se compreender: É a capacidade de sistema de sempre garantir uma resposta sem erros à quem lhe solicita algum dado.

Em termos práticos, sempre que você realizar uma requisição à um sistema distribuído disponível o mesmo te dará uma resposta com o dado que você solicitou, podendo este dado estar ou não consistente.

### Particionamento

Particionamento de rede diz respeito à distribuição dos dados entre os nós do sistema distribuído.

{{< textwithimage image-size="40%" position="right" light-src="images/partitioning-light.png" dark-src="images/partitioning-dark.png" >}}{{< /textwithimage >}}

Em um sistema distribuído com tolerância à particionamento nenhum dos servidores conterá a completude dos dados, cada pedaço do todo estará presente em um nó.

Ao lado temos uma ilustração que representa de uma forma simples um sistema distribuído com tolerância à particionamento armazenando cadastro de pessoas.

Note que as pessoas cadastradas estão espalhadas, e mesmo que haja cenários como o da pessoa John, cujos dados estão presentes em dois dos três nós deste sistema, os dados deste sistema estão totalmente dispersos entre os nós, nenhum deles tem a completude dos dados armazenados.

## Consistência e Disponibilidade

{{< textwithimage image-size="30%" position="right" light-src="images/cap-ca-light.png" dark-src="images/cap-ca-dark.png" >}}{{< /textwithimage >}}


