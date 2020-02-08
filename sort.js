function selectionSort(
  array,
  { field = null, asc = true } = { field: null, asc: true }
) {
  var _arr = [...array],
    tempArr = [...array];

  var getItem = i => {
    return _arr[i];
  };

  var setItem = (i, item) => {
    _arr[i] = item;
  };

  var compare = (item1, item2) => {
    var b =
        field != null ? (item2[field] != null ? item2[field] : item2) : item2,
      a = field != null ? item1[field] : item1;

    if (typeof a !== typeof b) throw "Could not compare different types";

    if (typeof a === "string") {
      return a.localeCompare(b);
    }

    return a > b ? 1 : a === b ? 0 : -1;
  };

  var setMinValue = () => {
    if (field != null)
      return typeof tempArr[0][field] == "string"
        ? "zzzzzzzzzzzzzzzzzz"
        : Number.MAX_VALUE;
    return typeof tempArr[0] == "string"
      ? "zzzzzzzzzzzzzzzzzz"
      : Number.MAX_VALUE;
  };

  var min = setMinValue(),
    minIndex = -1,
    tmp;

  for (var i = 0; i < _arr.length - 1; i++) {
    for (var j = i; j < _arr.length; j++) {
      if (compare(getItem(j), min) == -1) {
        min = getItem(j);
        minIndex = j;
      }
    }

    tmp = getItem(i);
    setItem(i, min);
    setItem(minIndex, tmp);

    tmp = null;
    minIndex = -1;
    min = setMinValue();
  }

  return asc === true ? _arr : _arr.reverse();
}

function insertionSort(
  array,
  { field = null, asc = true } = { field: null, asc: true }
) {
  var _arr = [...array];

  var getItem = i => {
    return field != null ? _arr[i][field] : _arr[i];
  };

  var tmp;
  for (var i = 1; i < _arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (getItem(i) < getItem(j)) {
        tmp = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = tmp;
        i--;
      }
    }
  }

  return asc === true ? _arr : _arr.reverse();
}

function bubbleSort(
  array,
  { field = null, asc = true } = { field: null, asc: true }
) {
  var _arr = [...array];

  var getItem = i => {
    return field != null ? _arr[i][field] : _arr[i];
  };

  var tmp;
  for (var i = 0; i < _arr.length - 1; i++) {
    for (var j = i + 1; j < _arr.length; j++) {
      if (getItem(i) > getItem(j)) {
        tmp = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = tmp;
      }
    }
  }

  return asc === true ? _arr : _arr.reverse();
}

function mergeSort(
  _arr,
  { field = null, asc = true } = { field: null, asc: true }
) {
  var arr = [..._arr];

  if (arr.length < 2) return arr;

  var mid = arr.length % 2 !== 0 ? (arr.length - 1) / 2 : arr.length / 2;
  var left = mergeSort(arr.splice(0, mid), { field, asc });
  var right = mergeSort([...arr], { field, asc });

  return merge(left, right, { field, asc });
}

function merge(
  a1,
  a2,
  { field = null, asc = true } = { field: null, asc: true }
) {
  var i1 = 0,
    i2 = 0,
    arr = [];

  var getItemValue = (i, _arr) => {
    return field != null ? _arr[i][field] : _arr[i];
  };

  var getItem = (i, _arr) => {
    return _arr[i];
  };

  var compare = (i1, i2) => {
    return asc === true ? i1 < i2 : i2 < i1; 
  };

  for (var i = 0; i1 < a1.length && i2 < a2.length; i++) {
    if (compare(getItemValue(i1, a1), getItemValue(i2, a2))) {
      arr.push(getItem(i1, a1));
      i1++;
    } else {
      arr.push(getItem(i2, a2));
      i2++;
    }
  }

  if (i1 < a1.length) arr = [...arr, ...a1.splice(i1, a1.length)];
  else arr = [...arr, ...a2.splice(i2, a2.length)];

  return arr;
}

function isEqual(arr, fnc) {
  const _arr = [...arr].sort((a, b) => a - b);
  const sorted = fnc(arr);

  return _arr.toString() === sorted.toString();
}

module.exports = {
  selectionSort,
  insertionSort,
  bubbleSort,
  mergeSort,
};
