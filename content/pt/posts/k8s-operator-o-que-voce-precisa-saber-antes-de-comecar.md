---
title: "Entendendo os Operators no k8s"
date: 2021-02-28T00:09:33-03:00
draft: false
author: "Thiago Henrique"
tags: [kubernetes, operator-sdk, kubebuilder]
summary: Neste artigo serão apresentados conceitos necessários para que você consiga desenvolver um Kubernetes Operator, compreendendo o que de fato ele é e como funciona.
---

# ATENÇÃO: ESTE ARTIGO AINDA ESTÁ INCOMPLETO. LOGO MAIS FINALIZO! :)

Neste artigo serão apresentados conceitos necessários para que você consiga desenvolver um Kubernetes Operator, compreendendo o que de fato ele é e como funciona.

O conteúdo aqui parte do principio que você já entenda ao menos os objetos básicos do Kubernetes [^kubernetes-objects], bem como saiba utilizar o `kubectl`, e claro, saiba o que é o Kubernetes.

## Arquitetura do Kubernetes

O Kubernetes não possui uma arquitetura monolítica. Ao invés disto, ele é composto de uma série de componentes de software independentes que se conectam entre si para fazer todo seu maquinário funcionar. [^kubernetes-components]

## Afinal, o que são _Operators_ ?

_Operators_ são um meio através do qual você pode estender o Kubernetes para fazê-lo atender a alguma necessidade específica a qual o mesmo não faça nativamente. A principal motivação para se criar um _Operator_ é realizar a automação um trabalho repetitivo e complexo dentro do próprio Kubernetes. [^operator-pattern]

Para tornar o entendimento mais "palpável", imagine que você possui um sistema de banco de dados executando dentro do Kubernetes, para o qual você precisa subir e descer constantemente réplicas que são utilizadas para exploração de dados, além de gerenciar os usuários que podem acessar estes bancos de dados.

A criação de um _Operator_ poderia viabilizar a execução desta tarefa de uma forma simples e automatizada, permitindo que você gerencie dentro do próprio Kubernetes as suas instâncias de banco de dados, bem como os usuários contidos nele.

Imagine que, após criar um _Operator_ que automatize todas estas tarefas, seria possível criar uma réplica e um novo usuário no Kubernetes somente por enviar os YAML como estes abaixo:

```yaml
---
apiVersion: database.example.com/v1
kind: DatabaseReplica
metadata:
  name: my-replica-database
spec:
  master: name-of-my-master

---
apiVersion: database.example.com/v1
kind: DatabaseUser
spec:
  username: my-username
  password: 
    secretRef:
      name: secret-with-password
```

O processo de operação das réplicas e usuários se tornaria mais fácil, pois ao invés de reproduzir uma série de passos complexos e especializados, bastaria realizar o envio destes YAML ao Kubernetes, que se encarregaria de executar os passos por meio do _Operator_.

Além disto, por meio do Operator teríamos a possíbilidade de gerir estas réplicas e usuários por meio do `kubectl`, uma vez que o _Operator_ criaria recursos na API do Kubernetes para tal.

Ou seja, você poderia listar todos seus usuários por meio de um `kubectl get database-users`, ou réplicas através de um `kubectl get database-replicas`.

## Como o Kubernetes funciona?

Para entender como um _Operator_ funciona no Kubernetes, entender a arquitetura do próprio Kubernetes é fundamental.

---

O Kubernetes é notóriamente um sistema distribuído completo e complexo, com uma série de componentes que interagem entre si para fazer o maquinário inteiro funcionar. Em sistemas como este é esperado que hajam sincronizações constantes e geralmente assíncronas em suas entidades internas, no caso, os objetos do Kubernetes. [^objects] [^oreilly-operators]

No Kubernetes, a orquestração destas sincronizações é realizada por um componente chamado Control Plane, este por sua vez sendo composto por uma série de outros componentes menores.

---

O Control Plane é um dos componentes centrais do Kubernetes, que por sua vez é composto por uma série de componentes menores, dentre os quais está incluso o _kube-apiserver_, que é basicamente a aplicação que expõe a API do Kubernetes para todo e qualquer _client_ que vá interagir com o Cluster, entre eles o próprio kubectl.

Ao receber um pedido de alteração no cluster (por exemplo, criação de um novo Pod), a API não é responsável por aplicá-la, e sim simplesmente validá-la e posteriormente armazenar a alteração desejada para que outro componente possa posteriormente aplicá-la: O Controller.


## Mãos na massa

<!-- References -->
[^kubernetes-objects]: [Understanding Kubernetes Objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)

[^kubernetes-components]: [Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/)

[^operator-pattern]: [Extending Kubernetes: Operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)

[^crd]: [Extending Kubernetes: Custom Resources](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/)

[^objects]: [Understanding Kubernetes Objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)

[^oreilly-operators]: [Dobies, J., &; Wood, J. (2020). Kubernetes operators: Automating the container orchestration platform. Beijing ; O'Reilly.](https://www.redhat.com/pt-br/resources/oreilly-kubernetes-operators-automation-ebook)