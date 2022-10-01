import { format, getDaysInMonth } from "date-fns";

// Array of 12

let array_1 = Array.from(Array(12).keys());
let array_2 = [...Array(12).keys()];
let array_3 = Array.from({ length: 12 }, (_, i) => i);

let cars = [
  {
    brand: "BMW",
    plates: "SZY 623523",
    year: 2007,
  },
  {
    brand: "TOYOTA",
    plates: "SZY 12345",
    year: 2009,
  },
  {
    brand: "TOYOTA",
    plates: "SZY 00001",
    year: 2008,
  },
  {
    brand: "MERCEDES",
    plates: "SZY 35123",
    year: 2010,
  },
  {
    brand: "BMW",
    plates: "SZY 74234",
    year: 2011,
  },
  {
    brand: "SKODA",
    plates: "SZY 00928",
    year: 2012,
  },
  {
    brand: "TOYOTA",
    plates: "SZY 10000",
    year: 2013,
  },
];

// all plates
cars.map((car) => {
  return car.plates;
});

// brand list
[
  ...new Set(
    cars.map((car) => {
      return car.brand;
    })
  ),
];

// cars between 2010 and 2012 includes
cars.filter((car) => {
  return car.year >= 2010 && car.year <= 2012;
});

// date-fns

// current date
let currentDate = new Date();

// days in month
let daysInMonth = getDaysInMonth(currentDate);

// name of month
let nameOfMonth = format(currentDate, "MMMM");

// array of month names
Array.from({ length: 12 }, (_, index) => format(new Date(2022, index), "MMMM"));
