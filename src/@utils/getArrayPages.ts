type getElementsAroundIndexProps = {
  array: number[],
  selectedIndex: number,
  pages: number
};
export const getElementsAroundIndex = ({
  array,
  selectedIndex,
  pages
}: getElementsAroundIndexProps) => {
  switch (pages) {
    case 1:
      return [1];
    case 2:
      return [1, 2];
    default:
      break;
  }
  if (selectedIndex === -1) {
    return [1, 2, 3];
  }
  const startIndex = Math.max(0, selectedIndex - 1);
  const endIndex = Math.min(array.length - 1, selectedIndex + 1);
  return array.slice(startIndex, endIndex + 1);
};
