
const carImageURL = 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const carsData = [
  {
    id: 1,
    name: 'Toyota Camry',
    image: 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Sedan',
    capacity: 5,
    mileage: 30,
    price: 25000,
    year: 2022,
    automatic:  true 
    },
  {
    id: 2,
    name: 'Honda CR-V',
    image: carImageURL,
    type: 'SUV',
    capacity: 5,
    mileage: 25,
    price: 35000,
    year: 2021,
    automatic:  false
  },
  {
    id: 3,
    name: 'Ford Focus',
    image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: 'Hatchback',
    capacity: 5,
    mileage: 35,
    price: 22000,
    year: 2022,
    automatic:  true 
  },
  {
    id: 4,
    name: 'Chevrolet Malibu',
    image: carImageURL,
    type: 'Sedan',
    capacity: 5,
    mileage: 28,
    price: 28000,
    year: 2021,
    automatic:  false
  },
  {
    id: 5,
    name: 'Jeep Wrangler',
    image: 'https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: 'SUV',
    capacity: 4,
    mileage: 24,
    price: 38000,
    year: 2022,
    automatic:  false
  },
  {
    id: 6,
    name: 'Volkswagen Golf',
    image: 'https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: 'Hatchback',
    capacity: 5,
    mileage: 32,
    price: 20000,
    year: 2023,
    automatic:  true 
  },
  {
    id: 7,
    name: 'Nissan Altima',
    image: 'https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Sedan',
    capacity: 5,
    mileage: 30,
    price: 26000,
    year: 2022,
    automatic:  true 
  },
  {
    id: 8,
    name: 'Subaru Outback',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: 'SUV',
    capacity: 5,
    mileage: 27,
    price: 32000,
    year: 2021,
    automatic:  true 
  },
  {
    id: 9,
    name: 'Kia Soul',
    image: carImageURL,
    type: 'Hatchback',
    capacity: 5,
    mileage: 34,
    price: 23000,
    year: 2023,
    automatic:  true 
  },
  {
    id: 10,
    name: 'Hyundai Sonata',
    image: carImageURL,
    type: 'Sedan',
    capacity: 5,
    mileage: 29,
    price: 27000,
    year: 2022,
    automatic:  false
  },
  
];

for (let i = 11; i <= 60; i++) {
  carsData.push({
    id: i,
    name: `Car ${i}`,
    image: carImageURL,
    type: 'Sedan',
    capacity: 5,
    mileage: 30 + (i % 5),
    price: 25000 + (i % 10) * 1000,
    year: 2022 - (i % 3),
    automatic: i % 2 === 0 ? true : false,
  });


}

export default carsData;
