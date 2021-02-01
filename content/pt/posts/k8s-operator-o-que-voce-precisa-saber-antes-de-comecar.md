---
title: "Entendendo os Operators no k8s"
date: 2021-01-28T00:09:33-03:00
draft: true
author: "Thiago Henrique"
tags: [kubernetes, operator-sdk, kubebuilder]
summary: Neste artigo serão apresentados conceitos necessários para que você consiga desenvolver um Kubernetes Operator, compreendendo o que de fato ele é e como funciona.
---

## Antes de tudo, um pouco de conceito

O Kubernetes é notóriamente um sistema distribuído completo e complexo, com uma série de componentes que interagem entre si para fazer o maquinário inteiro funcionar. Em sistemas como este é esperado que hajam sincronizações constantes e geralmente assíncronas em suas entidades internas, no caso, os objetos do Kubernetes. [^objects]

No Kubernetes, a orquestração destas sincronizações é realizada por um componente chamado Control Plane, este por sua vez sendo composto por uma série de outros componentes menores.

---

O Control Plane [^control-plane] é um dos componentes centrais do Kubernetes, que por sua vez é composto por uma série de componentes menores, dentre os quais está incluso o _kube-apiserver_, que é basicamente a aplicação que expõe a API do Kubernetes para todo e qualquer _client_ que vá interagir com o Cluster, entre eles o próprio kubectl.

Ao receber um pedido de alteração no cluster (por exemplo, criação de um novo Pod), a API não é responsável por aplicá-la, e sim simplesmente validá-la e posteriormente armazenar a alteração desejada para que outro componente possa posteriormente aplicá-la: O Controller.

<!-- References -->
[^objects]: [Understanding Kubernetes Objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)