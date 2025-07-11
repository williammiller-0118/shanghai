// utils/splitText.ts

export function splitTextByLetterCount(
  text: string,
  maxLetters: number | undefined
): string[] {
  if (!maxLetters) maxLetters = 300;
  if (text.length <= maxLetters) {
    return [text, ''];
  }
  // Find the last space before or at maxLetters to avoid breaking words
  let splitIndex = text.lastIndexOf(' ', maxLetters);
  if (splitIndex === -1) {
    // If no space found, split at maxLetters
    splitIndex = maxLetters;
  }
  const first = text.slice(0, splitIndex).trim();
  const remaining = text.slice(splitIndex).trim();
  return [first, remaining];
}

export function splitTextByHeight(
  text: string,
  maxHeight: number,
  measureElement: HTMLDivElement,
  fontSize: string = '1rem',
  lineHeight: string = '1.5',
  width: string = '100%'
): string[] {
  if (!measureElement) {
    return [text, ''];
  }

  // Set the measurement element's styles to match the target container
  measureElement.style.fontSize = fontSize;
  measureElement.style.lineHeight = lineHeight;
  measureElement.style.width = width;
  measureElement.style.whiteSpace = 'pre-wrap';
  measureElement.style.wordWrap = 'break-word';
  measureElement.style.overflow = 'hidden';

  // Binary search to find the optimal split point
  let start = 0;
  let end = text.length;
  let bestSplit = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    
    // Find the last space before mid to avoid breaking words
    let splitIndex = text.lastIndexOf(' ', mid);
    if (splitIndex === -1) {
      splitIndex = mid;
    }

    const testText = text.slice(0, splitIndex);
    measureElement.textContent = testText;
    
    const height = measureElement.scrollHeight;

    if (height <= maxHeight) {
      bestSplit = splitIndex;
      start = splitIndex + 1;
    } else {
      end = splitIndex - 1;
    }
  }

  // If we couldn't fit any text, return the first word
  if (bestSplit === 0) {
    const firstSpace = text.indexOf(' ');
    if (firstSpace === -1) {
      return [text, ''];
    }
    bestSplit = firstSpace;
  }

  const first = text.slice(0, bestSplit).trim();
  const remaining = text.slice(bestSplit).trim();
  
  return [first, remaining];
}

export function splitTextIntoMultipleParts(
  text: string,
  containerHeights: number[],
  measureElement: HTMLDivElement,
  fontSize: string = '1rem',
  lineHeight: string = '1.5',
  width: string = '100%'
): string[] {
  const parts: string[] = [];
  let remainingText = text;

  for (const maxHeight of containerHeights) {
    if (!remainingText.trim()) break;
    
    const [part, remaining] = splitTextByHeight(
      remainingText,
      maxHeight,
      measureElement,
      fontSize,
      lineHeight,
      width
    );
    
    parts.push(part);
    remainingText = remaining;
  }

  return parts;
}
