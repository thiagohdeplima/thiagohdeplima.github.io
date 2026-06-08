---
title: "Understanding Consensus in Distributed Systems"
subtitle: "What Raft and Paxos actually guarantee — and when those guarantees break"
date: 2025-11-15T00:00:00Z
lastmod: 2025-11-20T00:00:00Z
categories: ["Distributed Systems"]
tags: ["consensus", "raft", "paxos", "fault-tolerance", "distributed"]
series: ["Distributed Systems Fundamentals"]
featured: true
description: "Consensus algorithms are the load-bearing walls of distributed databases, coordination services, and replicated state machines. This article goes beyond the textbook description to examine what safety and liveness guarantees Raft and Paxos actually provide — and, crucially, the conditions under which they fail to provide them."
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Section One

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

```go
func (r *Raft) requestVote(req *RequestVoteArgs) bool {
    if req.Term < r.currentTerm {
        return false
    }
    return req.LastLogIndex >= r.log.LastIndex()
}
```

## Section Two

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.

### Subsection

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

## Section Three

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
