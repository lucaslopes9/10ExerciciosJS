

function kmToMiles(kilometers) {
    const miles = kilometers * 0.621371;
    return miles;
  }
  const distanceInKilometers = 10;
  const distanceInMiles = kmToMiles(distanceInKilometers);
  console.log(`${distanceInKilometers} quilômetros equivalem a ${distanceInMiles} milhas.`);