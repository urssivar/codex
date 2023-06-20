import MarkdownIt from "markdown-it/lib";

export function rd(s: string, md: MarkdownIt) {
  s = md.render(s);
  const pf = "<p>";
  if (s.startsWith(pf)) s = s.substring(pf.length);
  const sf = "</p>\n";
  if (s.endsWith(sf)) s = s.substring(0, s.length - sf.length);
  return s;
}
