export function splitTextToColumns({ fullText, columnElements }: { fullText: string; columnElements: HTMLElement[] }) {
  let remaining = fullText;

  for (const col of columnElements) {
    col.textContent = "";
    let content = "";
    let i = 0;

    while (i < remaining.length) {
      content += remaining[i];
      col.textContent = content;

      if (col.scrollHeight > col.clientHeight) {
        // Go back one char to fit
        content = content.slice(0, -1);
        col.textContent = content;
        remaining = remaining.slice(content.length);
        break;
      }

      i++;
    }

    if (remaining.length === 0) break;
  }
}
