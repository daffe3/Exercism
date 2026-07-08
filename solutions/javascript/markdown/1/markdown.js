const parseStrong = (markdown) => markdown.replace(/__(.+?)__/g, '<strong>$1</strong>');
const parseEm = (markdown) => markdown.replace(/_(.+?)_/g, '<em>$1</em>');

const parseInlineMarkdown = (markdown) => parseEm(parseStrong(markdown));

const parseHeader = (line) => {
  const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
  if (!headerMatch) return null;
  
  const level = headerMatch[1].length;
  const content = headerMatch[2];
  return `<h${level}>${parseInlineMarkdown(content)}</h${level}>`;
};

const parseListItem = (line) => {
  if (!line.startsWith('* ')) return null;
  const content = line.substring(2);
  return `<li>${parseInlineMarkdown(content)}</li>`;
};

const parseParagraph = (line) => `<p>${parseInlineMarkdown(line)}</p>`;

const parseLine = (line) => {
  return parseHeader(line) || parseParagraph(line);
};

export function parse(markdown) {
  const lines = markdown.split('\n');
  const result = [];
  let inList = false;

  for (const line of lines) {
    const listItem = parseListItem(line);

    if (listItem) {
      if (!inList) {
        result.push('<ul>');
        inList = true;
      }
      result.push(listItem);
    } else {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      result.push(parseLine(line));
    }
  }

  if (inList) {
    result.push('</ul>');
  }

  return result.join('');
}
