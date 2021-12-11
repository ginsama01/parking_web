const e = require("express");

var jsonObj = [
    {
        "park_id": 1,
        "name": "Vadonut",
        "image_url": "images/vadonut.png",
        "price": "4.30",
        "location": "THPT Chuyên Bắc Ninh",
        "rate": "5.0000",
        "numOfRate": 4
    },
    {
        "park_id": 2,
        "name": "ElaiCheese Cake",
        "image_url": "images/elaicheesecake.png",
        "price": "8.00",
        "location": "Nhà thờ lớn Bắc Ninh",
        "rate": null,
        "numOfRate": 0
    }
];

console.log(jsonObj);

for (let i = jsonObj.length -1 ; i >= 0; --i) {
    if (jsonObj[i]['price'] > 5) {
        jsonObj.splice(i, 1);
    } else {
        jsonObj[i]['distance'] = 10;
    }
}

console.log(jsonObj);