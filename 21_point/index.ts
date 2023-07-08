let mountain: { name: string, height: number, country: string } = {
    name: 'Mount Everest',
    height: 8848,
    country: 'Nepal'
  };
  
  let river: { name: string, length: number, countries: string[] } = {
    name: 'Nile',
    length: 6650,
    countries: ['Egypt', 'Sudan', 'South Sudan', 'Uganda', 'Ethiopia']
  };
  
  let country: { name: string, capital: string, population: number } = {
    name: 'United States',
    capital: 'Washington, D.C.',
    population: 331449281
  };
  
  let city: { name: string, population: number, country: string } = {
    name: 'Tokyo',
    population: 37435191,
    country: 'Japan'
  };
  
  let language: { name: string, speakers: number, countries: string[] } = {
    name: 'English',
    speakers: 1120000000,
    countries: ['United States', 'United Kingdom', 'Australia', 'Canada', 'India']
  };
  
  console.log("\nMountain:");
  console.log(mountain);
  
  console.log("\nRiver:");
  console.log(river);
  
  console.log("\nCountry:");
  console.log(country);
  
  console.log("\nCity:");
  console.log(city);
  
  console.log("\nLanguage:");
  console.log(language);
  