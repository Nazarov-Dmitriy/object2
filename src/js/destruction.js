export default function destructuring(argDesc, obj) {
  let {
    special = argDesc,
  } = obj;

  special.forEach(element => {
    if (!('description' in element)) {
      element.description = 'Описание недоступно';
    }
  });

  return special;
}
