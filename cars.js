import _ from "lodash";
import {} from "date-fns";
import data from "./cars-database.json" assert { type: "json" };

const cars = data.cars.map((car) => {
  car.bookedRents = data.bookings.filter((rent) => {
    if (rent.car !== car.id) return false;
    rent.daysOfRent = data.bookedDays.filter((day) => {
      return day.booking === rent.id;
    });
    return rent;
  });
  return car;
});

// get all cars count
function getCarsCount() {
  return;
}

// get brands
function getBrands() {
  return;
}

// get categories
function getCategories() {
  return;
}

// available cars by category
function getAvailableCarsByCategory() {
  return;
}

// reservations by month
function getReservationsByMonth() {
  return;
}

// reservations count by month
function getReservationsCountByMonth() {
  return;
}

// reservations ratio by month
function getReservationsRatioByMonth() {
  return;
}
