---
title: "Kubernetes Networking From the Ground Up"
subtitle: "CNI, kube-proxy, iptables chains, and the packet journey nobody explains"
date: 2025-09-08T00:00:00Z
lastmod: 2025-09-15T00:00:00Z
categories: ["Infrastructure"]
tags: ["kubernetes", "networking", "linux", "iptables", "cni"]
series: ["Production Kubernetes"]
featured: true
description: "Most Kubernetes networking guides explain what happens at the Kubernetes API level. This one explains what happens at the Linux kernel level — how packets actually travel from one pod to another, which iptables chains kube-proxy writes and why, and what a CNI plugin actually does to the network namespace."
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.

## Section One

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```bash
# Example placeholder command
ip link show type veth
iptables -t nat -L PREROUTING --line-numbers
```

## Section Two

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.

### Subsection

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: placeholder
spec:
  containers:
    - name: app
      image: placeholder:latest
```

## Section Three

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
