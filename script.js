let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    arr.map(function (value) {
      if (value.marks > 50) {
        console.log(value);
      }
    });
  }
  
  function PrintStudentsbyForEach() {
    arr.forEach(function (value) {
      if (value.marks > 50) {
        console.log(value);
      }
    });
  }
  
  function addData() {
    arr.push({ id:4,name:"Susan",age:"20",marks:45 });
    console.log(arr);
  }
  
  function removeFailedStudent() {
    let filterArr = arr.filter((arr) => arr.marks < 50);
    console.log(filterArr);
  }
  
  function concatenateArray() {
    let newArr = [{ id: 7, name: "Giri", age: "25",marks:90 }];
    let concatArr = arr.concat(newArr);
    console.log(concatArr);
  }