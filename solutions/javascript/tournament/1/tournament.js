//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  const header = 'Team                           | MP |  W |  D |  L |  P';
  
  if (!input || input.trim() === '') {
    return header;
  }

  const teamsData = {};

  const getOrCreateTeam = (name) => {
    if (!teamsData[name]) {
      teamsData[name] = { mp: 0, w: 0, d: 0, l: 0, p: 0 };
    }
    return teamsData[name];
  };

  const lines = input.split('\n');

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine === '') continue; 

    const [teamA, teamB, outcome] = trimmedLine.split(';');
    
    const tA = getOrCreateTeam(teamA);
    const tB = getOrCreateTeam(teamB);

    tA.mp += 1;
    tB.mp += 1;

    if (outcome === 'win') {
      tA.w += 1;
      tA.p += 3;
      tB.l += 1;
    } else if (outcome === 'loss') {
      tA.l += 1;
      tB.w += 1;
      tB.p += 3;
    } else if (outcome === 'draw') {
      tA.d += 1;
      tA.p += 1;
      tB.d += 1;
      tB.p += 1;
    }
  }

 const sortedTeams = Object.entries(teamsData).sort(([nameA, statsA], [nameB, statsB]) => {
  if (statsB.p !== statsA.p) {
    return statsB.p - statsA.p;
  }
  return nameA.localeCompare(nameB);
});

  const tableRows = sortedTeams.map(([name, stats]) => {
    const paddedName = name.padEnd(30, ' ');

    const mp = String(stats.mp).padStart(2, ' ');
    const w = String(stats.w).padStart(2, ' ');
    const d = String(stats.d).padStart(2, ' ');
    const l = String(stats.l).padStart(2, ' ');
    const p = String(stats.p).padStart(2, ' ');

    return `${paddedName} | ${mp} | ${w} | ${d} | ${l} | ${p}`;
  });

  return [header, ...tableRows].join('\n');
};