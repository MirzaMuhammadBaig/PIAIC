function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var result1 = city_country("Karachi", "Pakistan");
var result2 = city_country("Makka", "Saudi Arabia");
var result3 = city_country("Istanbul", "Turkey");
console.log(result1);
console.log(result2);
console.log(result3);
