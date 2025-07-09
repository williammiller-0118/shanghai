// utils/splitText.ts

export function splitTextByHeight(
  text: string,
  height: number| undefined,
  measureText: (text: string) => number
): string[] {
  const words = text.split(' ');
  if(!height) height = 300;

  // Binary search helper
  const fitWords = (wordList: string[]): [string, string] => {
    let low = 0;
    let high = wordList.length;
    let bestFit = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const testStr = wordList.slice(0, mid).join(' ');
      const measuredHeight = measureText(testStr);

      if (measuredHeight <= height) {
        bestFit = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    const fit = wordList.slice(0, bestFit).join(' ');
    const rest = wordList.slice(bestFit).join(' ');
    return [fit, rest];
  };

  const [first, remaining] = fitWords(words);
  console.log("First1: ", first, "\nRemaining: ", remaining)
  
  return [first, remaining];
  // const [second] = fitWords(remaining.split(' '));

  // return [first, second];
}
