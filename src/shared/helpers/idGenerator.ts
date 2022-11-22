export function idGenerator(employees) {
  const id = Math.random().toString(16).slice(2);
  const coincidence = employees.every((item) => item.id !== id);
  if (coincidence) {
    return id;
  } else {
    idGenerator(employees);
  }
}
