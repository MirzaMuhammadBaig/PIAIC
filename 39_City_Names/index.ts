function city_country(city: string, country: string): string {
    return `"${city}, ${country}"`;
  }
  
  let result1 = city_country("Karachi", "Pakistan");
  let result2 = city_country("Makka", "Saudi Arabia");
  let result3 = city_country("Istanbul", "Turkey");
  
  console.log(result1);
  console.log(result2);
  console.log(result3);