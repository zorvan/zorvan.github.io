---
layout: essay.njk
title: "8 Queens Puzzle · مساله هشت وزیر"
subtitle: "Solving the 8-Queens problem with a genetic algorithm, in Clojure."
permalink: /2015/11/21/Eight-Queens-Puzzle.html
date: 2015-11-21
folio: "01"
tags:
  - AI
  - Genetic Algorithms
  - Clojure
description: A 2015 note — solving the eight-queens problem with a genetic algorithm in Clojure.
---

<p class="rtl">حل مسئله ۸ وزیر توسط الگوریتم ژنتیک</p>

Place eight queens on a chessboard so that none attacks another. A classic constraint
problem — and a small, honest place to practice evolutionary search. Each board is a
chromosome; the number of attacking pairs is its cost; selection, crossover, and mutation
push the population toward a configuration whose fitness reaches zero.

The fitness function counts conflicts — any two queens sharing a row, column, or diagonal:

```clojure
(defn fitness [chromosome]
  (let [N (count chromosome)]
    (reduce +
      (for [i (range N) j (range N) :when (> j i)]
        (let [q1 (get chromosome i) q2 (get chromosome j)]
          (if (or (= q1 q2) (corow? q1 q2) (cocolumn? q1 q2) (codiagonal? q1 q2))
            1 0))))))
```

Selection is fitness-proportional; crossover splices two boards at a random node; mutation
nudges a single queen. The main loop iterates generations until it finds a zero-conflict
board, stalls in a local minimum, or times out after 500 generations.

This was written in December 2015 at Amirkabir University of Technology (Tehran Polytechnic)
— the first entry in what was then a Jekyll weblog. It is kept here unedited in spirit. The
full source, comments and all, lives on GitHub.

<p><a class="more" href="https://github.com/zorvan/N-Queens">github.com/zorvan/N-Queens</a></p>
