export function sortArray(array) {
  const sortedByRoleArr = [[], [], []];
  array.forEach((item) => {
    if (item.role === "cook") {
      sortedByRoleArr[0].push(item);
    } else if (item.role === "waiter") {
      sortedByRoleArr[1].push(item);
    } else if (item.role === "driver") {
      sortedByRoleArr[2].push(item);
    }
  });
  const result = sortedByRoleArr
    .map((item) => item.sort((a, b) => a.isArchive - b.isArchive).reverse())
    .flat();
  return result;
}

export function sortByAlphabet(x, y) {
  return x.name.localeCompare(y.name);
}
