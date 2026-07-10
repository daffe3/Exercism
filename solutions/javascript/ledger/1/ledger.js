class LedgerEntry {
  constructor() {
    this.date = undefined;
    this.description = undefined;
    this.change = undefined;
  }
}

export function createEntry(date, description, change) {
  let entry = new LedgerEntry();
  entry.date = new Date(date);
  entry.description = description;
  entry.change = change;
  return entry;
}

const LOCALE_CONFIG = {
  'en-US': {
    headers: { date: 'Date', desc: 'Description', change: 'Change' },
    dateOptions: { month: '2-digit', day: '2-digit', year: 'numeric' },
    numberOptions: { currencySign: 'accounting' } 
  },
  'nl-NL': {
    headers: { date: 'Datum', desc: 'Omschrijving', change: 'Verandering' },
    dateOptions: { day: '2-digit', month: '2-digit', year: 'numeric' },
    numberOptions: { currencyDisplay: 'narrowSymbol' }
  }
};

export function formatEntries(currency, locale, entries) {
  const config = LOCALE_CONFIG[locale];
  if (!config) return '';

  const headerRow = 
    config.headers.date.padEnd(10, ' ') + ' | ' +
    config.headers.desc.padEnd(25, ' ') + ' | ' +
    config.headers.change.padEnd(13, ' ');

  const sortedEntries = [...entries].sort((a, b) => 
    a.date - b.date || 
    a.change - b.change || 
    a.description.localeCompare(b.description)
  );

  const dateFormatter = new Intl.DateTimeFormat(locale, config.dateOptions);
  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...config.numberOptions
  });

  const rows = sortedEntries.map(entry => {

    let dateStr = dateFormatter.format(entry.date);
    if (locale === 'nl-NL') dateStr = dateStr.replace(/\//g, '-');

    const descStr = entry.description.length > 25
      ? `${entry.description.substring(0, 22)}...`
      : entry.description.padEnd(25, ' ');

    let changeStr = currencyFormatter.format(entry.change / 100);
    if (locale === 'nl-NL') {

      changeStr = changeStr.trim() + ' ';
    } else if (locale === 'en-US' && entry.change >= 0) {
      changeStr = changeStr + ' ';
    }

    return `${dateStr} | ${descStr} | ${changeStr.padStart(13, ' ')}`;
  });

  return [headerRow, ...rows].join('\n');
}