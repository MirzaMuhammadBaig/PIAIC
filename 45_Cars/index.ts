interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function storeCarInfo(manufacturer: string, model: string, additionalInfo: [string, any][]): Car {
    const car: Car = {
      manufacturer,
      model
    };
  
    for (const [key, value] of additionalInfo) {
      car[key] = value;
    }
  
    return car;
  }
  
  const additionalInfo: [string, any][] = [
    ["color", "blue"],
    ["year", 2022],
    ["optionalFeature", "Sunroof"]
  ];
  
  const carInfo: Car = storeCarInfo("Toyota", "Corolla", additionalInfo);
  console.log(carInfo);
  