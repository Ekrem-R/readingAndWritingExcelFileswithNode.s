let data = [{ 
    ISIM:'Cabbar',
    SOYISIM:'Mikail', 
    YAS:'22', 
    'ALDIGI MAAS':'6000', 
    CINSIYETI: 'ERKEK' 
}, 
{ 
    ISIM:'Hans',
    SOYISIM:'Joe', 
    YAS:'39', 
    'ALDIGI MAAS':'16000', 
    CINSIYETI: 'ERKEK' 
},
{ 
    ISIM:'Murtaza',
    SOYISIM:'Kaya', 
    YAS:'49', 
    'ALDIGI MAAS':'6000', 
    CINSIYETI: 'ERKEK' 
}, 
{ 
    ISIM:'Marion',
    SOYISIM:'Minna', 
    YAS:'55', 
    'ALDIGI MAAS':'9000', 
    CINSIYETI: 'KADIN' 
}, 
{ 
    ISIM:'Murat',
    SOYISIM:'Burhan', 
    YAS:'40', 
    'ALDIGI MAAS':'10000', 
    CINSIYETI: 'ERKEK' 
}, 
{ 
    ISIM:'Abdurrezzak',
    SOYISIM:'Adigüzel', 
    YAS:'22', 
    'ALDIGI MAAS':'6000', 
    CINSIYETI: 'ERKEK' 
}, 
{ 
    ISIM:'Mehmet',
    SOYISIM:'Sökmen', 
    YAS:'33', 
    'ALDIGI MAAS':'12000', 
    CINSIYETI: 'ERKEK' 
}, 

] ;

// Import excel4node library
const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Ekrem Worksheet ');
//const data = require('./data');
const headingColumnNames = [
    "ISIM",
    "SOYISIM",
    "YAS",
    "ALDIGI MAAS",
    "CINSIYETI"
]

//Write Column Title in Excel file
let headingColumnIndex = 1;
headingColumnNames.forEach(heading => {
    ws.cell(1, headingColumnIndex++)
        .string(heading)
});

//Write Data in Excel file
let rowIndex = 2;

data.forEach( record => {
    let columnIndex = 1;
    Object.keys(record ).forEach(columnName =>{
        ws.cell(rowIndex,columnIndex++)
            .string(record [columnName])
    });
    rowIndex++;
});
wb.write('newDosya.xlsx');