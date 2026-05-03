export const degreesOfSeparation = (familyTree, personA, personB) => {
  if (personA === personB) return 0;

  const adjList = {};

  const addEdge = (u, v) => {
    if (!adjList[u]) adjList[u] = new Set();
    if (!adjList[v]) adjList[v] = new Set();
    adjList[u].add(v);
    adjList[v].add(u);
  };

  for (const [parent, children] of Object.entries(familyTree)) {
    for (const child of children) {
      addEdge(parent, child);

      for (const sibling of children) {
        if (child !== sibling) {
          addEdge(child, sibling);
        }
      }
    }
  }

  if (!adjList[personA] || !adjList[personB]) {
    return -1;
  }

  const queue = [[personA, 0]];
  const visited = new Set([personA]);

  while (queue.length > 0) {
    const [current, distance] = queue.shift();

    if (current === personB) return distance;

    for (const neighbor of adjList[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};