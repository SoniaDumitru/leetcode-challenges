// Write a function that determines if a path exists between two vertices of a directed graph.
// Recall that a graph is a collection of connections, or 'edges', linking together nodes or verticies. In a directed graph, each edge is like an arrow or a one-way street-- an edge linking A to B indicates that A connects to B, but not that B connects to A.
// // The graph passed to the function will be represented as an object with a structure sometimes called an 'adjacency list' or 'adjacency map', in which each key represents a node in the graph, and each value will consist in an array of nodes which can be reached from the key. For example, the following object:
//
// {
//     a: ['b'],
//     b: ['c', 'd'],
//     c: ['d'],
//     d: []
// }

      // a -> b
      //     / \
      //   <     >
      //   d <-- c

// The doesPathExist function we'll be writing will be passed an adjacency map as well as two strings indicating the starting node and ending node. The function will return a boolean indicating if a path exists from the starting to the ending node:

// First example:
// function doesPathExist(graph, start, end) {
//   // your code here
// }
//
// doesPathExist(graph, 'a', 'b') // true
// doesPathExist(graph, 'b', 'a') // false
// doesPathExist(graph, 'a', 'd') // true
// doesPathExist(graph, 'a', 'a') // false

// Second Example:
// Here are some examples for another graph. Notice that this graph contains a node that points to itself and also a 'cycle' (that is, a loop involving multiple nodes):
// const graph = {
//   a: ['a', 'c'],
//   c: ['r', 's'],
//   r: ['a'],
//   s: []
// }
//
// doesPathExist(graph, 'a', 'a') // true
// doesPathExist(graph, 'c', 'c') // true
// doesPathExist(graph, 'r', 's') // true
// doesPathExist(graph, 's', 'a') // false
// Recursion:
const doesPathExist = (graph, start, target, visited = {}) => {
  if (!graph[start]) return false
  visited[start] = true;

  return graph[start].some((vertex) => {
    if (vertex === target) return true;
    if (!visited[vertex]) {
      return doesPathExist(graph, vertex, targeet, visited)
    } else {
      return false;
    }
  })
}

// Note that we're using an object to keep track of visted notes. Note also the way in which we initialize an additional argument to allow us to pass this object to the recursive function invocation-- this is a useful trick that lets us not pollute global scope while avoiding the need for a helper function.

// Iterative:

  const doesPathExist(graph, start, target) => {
    if (!graph[start]) return false;
    const queue = [start]
    const visited = {}

    while(queue.length) {
      const current = queue.shift()
      visited[current] = true
      for (let i = 0; i < graph[current].length; i++) {
        const child = graph[current][i]
        if (child === target) return true
        if (!visited[child]) {
          queue.push(child)
        }
      }
    }
    return false
  }
