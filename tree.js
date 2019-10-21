let data = {
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

    
// container.innerHTML = `
//   <ul>
//   <li>Риби
//     <ul>
//       <li>форель</li>
//       <li>лосось</li>
//     </ul>
//   </li>
//   <li>Дерва
//     <ul>
//       <li>Велитенські
//         <ul>
//           <li>секвоя</li>
//           <li>дуб</li>
//         </ul>
//       </li>
//       <li>Квіткові
//         <ul>
//           <li>яблуня</li>
//           <li>магнолія</li>
//         </ul>
//       </li>
//     </ul>
//   </li>
// </ul>
// `;
}

createTree(tree, data)