//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CODON_MAP = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP'
};

export const translate = (rna) => {
  const proteins = [];

  if (!rna) return proteins;

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);

    if (!CODON_MAP[codon]) {
      throw new Error('Invalid codon');
    }

    const aminoAcid = CODON_MAP[codon];

    if (aminoAcid === 'STOP') {
      break;
    }

    proteins.push(aminoAcid);
  }

  return proteins;
};