let XLSX = require('xlsx')
let workbook = XLSX.readFile('OrnekDosya.xlsx');
let sheet_name_list = workbook.SheetNames;
let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);