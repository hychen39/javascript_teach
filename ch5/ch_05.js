
const str = 'hello';
Array.from(str).forEach(char => console.log(char));

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    start_engine: function() {
      console.log('Engine started');
    }
  };
  
  for (const key in car) {
    console.log(key, car[key]);
  }

  const values = [1, 2, 3, 4, 5];
  values['extra'] = 6;
  console.log(values);

  for (const v in values) {
    console.log(values[v]);
  }