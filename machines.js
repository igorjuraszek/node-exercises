import data from './machines-database.json' assert { type: 'json' };

//wyciągnięcie wszytkich typów requestów

function requestTypes() {
  return [
    ...new Set(
      data.requests.map((request) => {
        return request.type;
      })
    ),
  ];
}

console.log(requestTypes());

//wyciągnięcie rodzajów maszyn
function machinesTypes() {
  return [
    ...new Set(
      data.machines.map((machine) => {
        return machine.name;
      })
    ),
  ];
}
console.log(machinesTypes());

//wyciągnięcie linii produkcyjnych
function machinesLines() {
  return [
    ...new Set(
      data.machines.map((machine) => {
        return machine.location;
      })
    ),
  ];
}
console.log(machinesLines());
//wyciągnięcie ilości requestów poszczególnych kategorii
function numberOfRequestsByType() {
  const types = requestTypes();
  return [
    ...types.map((type) => {
      return data.requests.filter((request) => {
        return request.type === type;
      }).length;
    }),
  ];
}

console.log(numberOfRequestsByType());

//wyciągnięcie liczby maszyn na danej linii
function numberOfmachinesPerLine() {
  const types = machinesLines();
  return [
    ...types.map((line) => {
      return data.machines.filter((machine) => {
        return machine.location === line;
      }).length;
    }),
  ];
}
console.log(numberOfmachinesPerLine());
