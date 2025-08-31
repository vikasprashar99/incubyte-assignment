function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let delimiter = /[,\n]/;
  let numbersToProcess = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].substring(2);
    numbersToProcess = parts[1];
  }

  const numArray = numbersToProcess.split(delimiter).map((n) => parseInt(n));
  return numArray.reduce((sum, current) => sum + current, 0);
}

module.exports = { add };
