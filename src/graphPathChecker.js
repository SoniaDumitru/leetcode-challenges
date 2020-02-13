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
