function component() {
  const element = document.createElement('div');
  element.innerHTML = 'test';
  console.log(element)
  return element;
}
component()
document.body.appendChild(component());