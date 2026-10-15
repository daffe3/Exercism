export class Tournament {
  public tally(input: string): string {
    interface TeamStats {
      name: string;
      mp: number;
      w: number;
      d: number;
      l: number;
      p: number;
    }

    const teams: { [key: string]: TeamStats } = {};

    const getOrCreateTeam = (name: string): TeamStats => {
      if (!teams[name]) {
        teams[name] = { name, mp: 0, w: 0, d: 0, l: 0, p: 0 };
      }
      return teams[name];
    };

    const lines = input.split('\n').filter((line) => line.trim() !== '');

    for (const line of lines) {
      const [teamA, teamB, outcome] = line.split(';');
      if (!teamA || !teamB || !outcome) continue;

      const statsA = getOrCreateTeam(teamA);
      const statsB = getOrCreateTeam(teamB);

      statsA.mp += 1;
      statsB.mp += 1;

      if (outcome === 'win') {
        statsA.w += 1;
        statsA.p += 3;
        statsB.l += 1;
      } else if (outcome === 'loss') {
        statsA.l += 1;
        statsB.w += 1;
        statsB.p += 3;
      } else if (outcome === 'draw') {
        statsA.d += 1;
        statsA.p += 1;
        statsB.d += 1;
        statsB.p += 1;
      }
    }

    const sortedTeams = Object.values(teams).sort((a, b) => {
      if (b.p !== a.p) {
        return b.p - a.p; 
      }
      return a.name.localeCompare(b.name); 
    });

    const header = 'Team                           | MP |  W |  D |  L |  P';
    const rows = sortedTeams.map((t) => {
      const name = t.name.padEnd(31, ' ');
      const mp = String(t.mp).padStart(2, ' ');
      const w = String(t.w).padStart(2, ' ');
      const d = String(t.d).padStart(2, ' ');
      const l = String(t.l).padStart(2, ' ');
      const p = String(t.p).padStart(2, ' ');
      return `${name}| ${mp} | ${w} | ${d} | ${l} | ${p}`;
    });

    return [header, ...rows].join('\n');
  }
}