let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter(arr=> arr.profession === "developer");
  const developerNames=developers.map(developer =>developer.name);
   console.log(developerNames);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach((arr) => {
    if (arr.profession === "developer") {
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const remove=arr.filter(arr=>arr.profession!=="admin");
  console.log(remove);
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2=[{
    srNo:1,
    Salary:"200000",
    Department:"senior Finance"
  }];
  let res=arr.concat(arr2);
  console.log(res);
}
