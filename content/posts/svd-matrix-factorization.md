---
title: "SVD and Matrix Factorization for Engineers"
subtitle: "The linear algebra behind recommendation systems, LSA, and PCA — with implementation notes"
date: 2025-07-30T00:00:00Z
categories: ["Machine Learning"]
tags: ["linear-algebra", "svd", "pca", "recommendation-systems", "math"]
series: ["ML Foundations"]
math: true
description: "Singular Value Decomposition is one of the most useful tools in applied linear algebra, yet most ML resources treat it as a black box. This article builds up to SVD from first principles — eigendecomposition, the connection to PCA, and why the low-rank approximation theorem makes it so powerful for recommendation systems and text analysis."
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.

## Section One

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Every real matrix $A \in \mathbb{R}^{m \times n}$ can be written as:

$$
A = U \Sigma V^T
$$

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Section Two

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. The low-rank approximation minimises:

$$
\| A - A_k \|_F = \sqrt{\sigma_{k+1}^2 + \cdots + \sigma_r^2}
$$

### Subsection

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

```python
import numpy as np

U, s, Vt = np.linalg.svd(A, full_matrices=False)
A_k = U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]
```

## Section Three

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
