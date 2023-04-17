export function selectionSort(arr, field, down) {
  let string = false
  let min
  let current
  if (typeof arr[0][field] === "string") {
    string = true
  }
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
    let indexMin = i;

    for (let j = i + 1; j < l; j++) {
      if (string) {
        min = arr[indexMin][field].toLowerCase()
        current = arr[j][field].toLowerCase()
      } else {
        min = arr[indexMin][field]
        current = arr[j][field]
      }

      if (down ? min < current : min > current) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return [...arr];
};
