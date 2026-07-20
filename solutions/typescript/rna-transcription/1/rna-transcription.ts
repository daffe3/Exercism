const DNA_TO_RNA: Record<string, string> = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export function toRna(dna: string): string {
  if (/[^GCTA]/.test(dna)) {
    throw new Error('Invalid input DNA.');
  }

  return dna.replace(/[GCTA]/g, (nucleotide) => DNA_TO_RNA[nucleotide]);
}