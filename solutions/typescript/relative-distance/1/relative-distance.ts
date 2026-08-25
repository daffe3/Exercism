type FamilyTree = Record<string, string[]>;

export function degreesOfSeparation(
  familyTree: FamilyTree,
  personA: string,
  personB: string
): number {
  if (personA === personB) {
    return 0;
  }

  const graph: Record<string, Set<string>> = {};

  const addEdge = (u: string, v: string) => {
    if (!graph[u]) graph[u] = new Set();
    if (!graph[v]) graph[v] = new Set();
    graph[u].add(v);
    graph[v].add(u);
  };

  for (const [parent, children] of Object.entries(familyTree)) {
    for (const child of children) {
      addEdge(parent, child);
    }

    for (let i = 0; i < children.length; i++) {
      for (let j = i + 1; j < children.length; j++) {
        addEdge(children[i], children[j]);
      }
    }
  }

  if (!graph[personA] || !graph[personB]) {
    return -1;
  }

  const queue: Array<[string, number]> = [[personA, 0]];
  const visited = new Set<string>([personA]);

  while (queue.length > 0) {
    const [currentPerson, distance] = queue.shift()!;

    if (currentPerson === personB) {
      return distance;
    }

    for (const neighbor of graph[currentPerson]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}