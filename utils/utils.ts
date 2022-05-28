export const generateInputName = (input: string) => {
  const split = input.split(' ');
  const name = split.map((item, index) => {
    if (index === 0) return item.toLowerCase();
    else if (index === 1) return item;
    return;
  });

  return name.join('');
}