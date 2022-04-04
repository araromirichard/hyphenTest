const formItems = [
  "Total",
  "Vendor organization",
  "Invoice number",
  "Due date",
];
// const operators = [
//   "Equal to ",
//   "Not Equal to",
//   "Less than",
//   "Less than or Equal to",
//   "Greater than",
//   "Greater than or Equal to",
// ];

const operators = [
  {
    string: "Equal to",
    val: "=",
  },
  {
    string: "Not Equal to",
    val: "!=",
  },
  {
    string: "Less than",
    val: "<",
  },
  {
    string: "Less than or Equal to",
    val: "<=",
  },
  {
    string: "Greater than",
    val: ">",
  },
  {
    string: "Greater than",
    val: ">=",
  },
];
// const comparisonType = ["ALL Group", "ANY Group"];

const comparisonType = [
  {
    string: "ALL",
    val: "and",
  },
  {
    string: "ANY",
    val: "or",
  },
];

module.exports = { formItems, operators, comparisonType };
