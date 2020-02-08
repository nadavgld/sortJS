const sort = require("./sort");

const AMOUNT = 10;
var arr = new Array(AMOUNT).fill(0).map(a => parseInt(Math.random() * 100)),
  sorted = arr.sort((a, b) => a - b);

function tests(sortFnc) {
  test("Match Number", () => {
    expect(sortFnc(arr)).toMatchObject(sorted);
  });

  test("Match String", () => {
    var a1 = ["n", "d", "y", "a", "b"];
    expect(sortFnc(a1)).toMatchObject(["a", "b", "d", "n", "y"]);
  });

  test("Match Object - Number", () => {
    var a1 = new Array(AMOUNT).fill(0).map(a => {
        return { age: parseInt(Math.random() * 100) };
      }),
      sorted = a1.sort((a, b) => a.age - b.age);

    expect(sortFnc(a1, { field: "age" })).toMatchObject(sorted);
  });

  test("Match Object - String", () => {
    var a1 = [
      { name: "n" },
      { name: "d" },
      { name: "y" },
      { name: "a" },
      { name: "b" }
    ];
    expect(sortFnc(a1, { field: "name" })).toMatchObject([
      { name: "a" },
      { name: "b" },
      { name: "d" },
      { name: "n" },
      { name: "y" }
    ]);
  });

  test("Match Object - String Extended", () => {
    var a1 = [
      { name: "n", a: 1 },
      { name: "d", a: 2 },
      { name: "y", a: 3 },
      { name: "a", a: 4 },
      { name: "b", a: 5 }
    ];
    expect(sortFnc(a1, { field: "name" })).toMatchObject([
      { name: "a", a: 4 },
      { name: "b", a: 5 },
      { name: "d", a: 2 },
      { name: "n", a: 1 },
      { name: "y", a: 3 }
    ]);
  });

  test("Reverse Match Number", () => {
    expect(sortFnc(arr, { asc: false })).toMatchObject([...sorted].reverse());
  });

  test("Reverse Match String", () => {
    var a1 = ["n", "d", "y", "a", "b"];
    expect(sortFnc(a1, { asc: false })).toMatchObject([
      "y",
      "n",
      "d",
      "b",
      "a"
    ]);
  });

  test("Reverse Match Object - Number", () => {
    var a1 = new Array(AMOUNT).fill(0).map(a => {
        return { age: parseInt(Math.random() * 100) };
      }),
      sorted = a1.sort((a, b) => b.age - a.age);

    expect(sortFnc(a1, { field: "age", asc: false })).toMatchObject(sorted);
  });

  test("Reverse Match Object - String", () => {
    var a1 = [
      { name: "n" },
      { name: "d" },
      { name: "y" },
      { name: "a" },
      { name: "b" }
    ];
    expect(sortFnc(a1, { field: "name", asc: false })).toMatchObject([
      { name: "y" },
      { name: "n" },
      { name: "d" },
      { name: "b" },
      { name: "a" }
    ]);
  });

  test("Reverse Match Object - String Extended", () => {
    var a1 = [
      { name: "n", a: 1 },
      { name: "d", a: 2 },
      { name: "y", a: 3 },
      { name: "a", a: 4 },
      { name: "b", a: 5 }
    ];
    expect(sortFnc(a1, { asc: false, field: "name" })).toMatchObject([
      { name: "y", a: 3 },
      { name: "n", a: 1 },
      { name: "d", a: 2 },
      { name: "b", a: 5 },
      { name: "a", a: 4 }
    ]);
  });
}

describe("Insertion sort", () => {
  const sortFnc = sort.insertionSort;
  tests(sortFnc);
});

describe("Bubble sort", () => {
  const sortFnc = sort.bubbleSort;
  tests(sortFnc);
});

describe("Selection sort", () => {
  const sortFnc = sort.selectionSort;
  tests(sortFnc);
});

describe("Merge sort", () => {
  const sortFnc = sort.mergeSort;
  tests(sortFnc);
});
