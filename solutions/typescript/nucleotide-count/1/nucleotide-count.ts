export function nucleotideCounts(strand: string): { A: number; C: number; G: number; T: number } {
  const counts = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  for (const char of strand) {
    switch (char) {
      case 'A':
        counts.A++;
        break;
      case 'C':
        counts.C++;
        break;
      case 'G':
        counts.G++;
        break;
      case 'T':
        counts.T++;
        break;
      default:
        throw new Error('Invalid nucleotide in strand');
    }
  }

  return counts;
}