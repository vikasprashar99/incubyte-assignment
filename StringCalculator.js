function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const numArray = numbers.split(",").map((n) => parseInt(n));
  return numArray.reduce((sum, current) => sum + current, 0);
}

module.exports = { add };
