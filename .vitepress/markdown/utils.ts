export function span(
  content: string,
  attrs: Record<string, any> | undefined = undefined
) {
  let html = "<span";
  if (attrs)
    for (const [key, value] of Object.entries(attrs)) {
      html += ` ${key}="${value}"`;
    }
  html += `>${content}</span>`;
  return html;
}
