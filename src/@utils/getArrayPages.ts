type getElementsAroundIndexProps = {
  array: number[],
  selectedIndex: number,
};
export const getElementsAroundIndex = ({
  array,
  selectedIndex,
}: getElementsAroundIndexProps) => {
  if (selectedIndex === -1) {
    return [1, 2, 3];
  }
  const startIndex = Math.max(0, selectedIndex - 1);
  const endIndex = Math.min(array.length - 1, selectedIndex + 1);
  return array.slice(startIndex, endIndex + 1);
};
