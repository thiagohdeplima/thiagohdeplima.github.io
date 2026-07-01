---
title: "What is Linear Regression"
subtitle: "Introducing what is a Linear Regression and how that works"
date: 2026-06-08T17:00:00Z
lastmod: 2026-06-08T17:00:00Z
categories: ["Machine Learning"]
tags: ["regression", "machine-learning"]
series: ["Linear Regression"]
featured: true
description: "Lorem ipson"
math: true
draft: true
---


<!--
1. O que é regressão e o problema fundamental
Modelar uma resposta contínua a partir de preditores. Diferença entre regressão e classificação. A noção de "ajustar uma função aos dados" e por que começamos pela linear.
1. Regressão linear simples (uma variável)
A reta ŷ = β₀ + β₁x. Interpretação geométrica e dos coeficientes. Aqui você fixa a notação estatística (β, Sxx, Sxy) antes de tudo ficar matricial.
1. Mínimos quadrados: a função de custo
Por que somar erros ao quadrado (MSE). O custo como superfície a minimizar. Conexão explícita: o custo está sempre lá — só fica visível dependendo do método.
1. Solução fechada — equações normais
Derivar β₁ = Sxy/Sxx e β₀, depois generalizar para a forma matricial w = (XᵀX)⁻¹Xᵀy. O papel da coluna de uns carregando o intercepto. Sentar exatamente no mínimo onde os gradientes zeram.
1. Gradiente descendente
Caminho alternativo ao mesmo ótimo, não sequencial. Learning rate, convergência, escala dos parâmetros. Quando vale a pena vs. solução fechada (custo da inversão com muitas features, SGD/mini-batch).
1. Avaliando o ajuste
R², por que R² ≠ Pearson r (mas R² = r² no caso univariado). O que score() do sklearn retorna. Resíduos e diagnóstico.
1. Regressão múltipla
Vários preditores, interpretação dos coeficientes, multicolinearidade. Onde a forma matricial passa a ser indispensável — bom gancho para o próximo estágio da sua lib Haskell.
1. Regularização (Ridge, Lasso)
Trade-off viés-variância, penalização, por que encolher os pesos. Lasso e seleção de variáveis.
-->