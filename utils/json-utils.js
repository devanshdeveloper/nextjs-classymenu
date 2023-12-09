export function convertJsonToArray(jsonData) {
  const versions = jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"];
  let lastVersion = {};
  for (const key in versions) {
    if (Object.hasOwnProperty.call(versions, key)) {
      lastVersion = versions[key];
    }
  }
  const resultArray = [];
  for (const key in lastVersion) {
    if (Object.hasOwnProperty.call(lastVersion, key)) {
      const element = lastVersion[key];
      resultArray.push({
        id: key,
        name: element.C,
        description: element.B,
        price: element.D,
        availability: element.P,
      });
    }
  }
  return resultArray;
}

export function editIemToObject(jsonData, id, newItem) {
  const lastVersionKey = Object.keys(
    jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"]
  ).pop();
  const newVersionKey = `V${+lastVersionKey.substr(-4) + 1}`;
  const lastVersion =
    jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][lastVersionKey];
  let lastNumericKey = 0;
  // let lastItemKey;
  for (const key in lastVersion) {
    if (Object.hasOwnProperty.call(lastVersion, key)) {
      const numericKey = +key.substr(-4);
      if (numericKey > lastNumericKey) {
        lastNumericKey = numericKey;
        // lastItemKey = key;
      }
    }
  }
  const newItemKey = `Q${(lastNumericKey === 0 ? 1000 : lastNumericKey) + 1}`;
  jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][newVersionKey] = {};
  for (const key in lastVersion) {
    if (Object.hasOwnProperty.call(lastVersion, key)) {
      const element = lastVersion[key];
      if (key === id) {
        jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][newVersionKey][
          newItemKey
        ] = getNewItem(newItem);
      } else {
        jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][newVersionKey][
          key
        ] = element;
      }
    }
  }
  return Object.assign({}, jsonData);
}

export function deleteItemFromObject(jsonData, id) {
  const lastVersionKey = Object.keys(
    jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"]
  ).pop();
  const lastVersion =
    jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][lastVersionKey];
  const newVersionKey = `V${+lastVersionKey.substr(-4) + 1}`;
  jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][newVersionKey] =
    Object.assign({}, lastVersion);
  delete jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][newVersionKey][
    id
  ];
  return Object.assign({}, jsonData);
}

export function getItemById(jsonData, id) {
  const lastVersionKey = Object.keys(
    jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"]
  ).pop();
  const element =
    jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][lastVersionKey][id];
  return {
    id,
    name: element.C,
    description: element.B,
    price: element.D,
    availability: element.P,
  };
}

function getNewItem(item) {
  return {
    B: item.description,
    C: item.name,
    D: `${item.price}`,
    E: "E",
    F: "F",
    G: "G",
    H: "H",
    I: "I",
    J: "J",
    K: "K",
    L: "L",
    P: item.availability,
    R: "R",
    S: "S",
    T: "T",
    W: "W",
    X: 1001,
    Y: "Y",
    Z: 1700870600000,
  };
}

export function addItemToObject(jsonData, newItem) {
  const lastVersionKey = Object.keys(
    jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"]
  ).pop();
  const newVersionKey = `V${+lastVersionKey.substr(-4) + 1}`;
  const lastVersion =
    jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][lastVersionKey];
  let lastNumericKey = 0;
  for (const key in lastVersion) {
    if (Object.hasOwnProperty.call(lastVersion, key)) {
      const numericKey = +key.substr(-4);
      if (numericKey > lastNumericKey) {
        lastNumericKey = numericKey;
      }
    }
  }
  const newItemKey = `Q${lastNumericKey + 1}`;
  jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][newVersionKey] =
    Object.assign({}, lastVersion);
  jsonData["O1001"]["U1001"]["M1001"]["A1001"]["N1001"][newVersionKey][
    newItemKey
  ] = getNewItem(newItem);
  return Object.assign({}, jsonData);
}
