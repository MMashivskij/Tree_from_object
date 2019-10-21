const data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };
  
const tree = document.getElementById('tree');

function createTree(container, data) {
  const ul = document.createElement('ul');
  container.append(ul);

  for (let key in data) {
    const li = document.createElement('li');
    li.textContent = key;
    ul.append(li);
    if (Object.keys(key).length > 0) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, data)