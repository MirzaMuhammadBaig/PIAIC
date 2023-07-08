function storeCarInfo(manufacturer, model, additionalInfo) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _i = 0, additionalInfo_1 = additionalInfo; _i < additionalInfo_1.length; _i++) {
        var _a = additionalInfo_1[_i], key = _a[0], value = _a[1];
        car[key] = value;
    }
    return car;
}
var additionalInfo = [
    ["color", "blue"],
    ["year", 2022],
    ["optionalFeature", "Sunroof"]
];
var carInfo = storeCarInfo("Toyota", "Corolla", additionalInfo);
console.log(carInfo);
