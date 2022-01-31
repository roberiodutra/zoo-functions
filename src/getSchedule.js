const data = require('../data/zoo_data');

const { species, hours } = data;
const hkeys = Object.keys(hours);
const hValues = Object.values(hours);

const arrayWithDays = (scheduleTarget) => {
  let arr = null;
  species.forEach((day) => {
    const { name, availability } = day;
    if (scheduleTarget === name) {
      arr = availability;
    }
  });
  return arr;
};

function getSchedule(scheduleTarget) {
  let catalogo = { Tuesday: {}, Wednesday: {}, Thursday: {},
  Friday: {}, Saturday: {}, Sunday: {}, Monday: {} };

  hkeys.forEach((elem, index) => {
    catalogo[elem].officeHour = `Open from ${hValues[index]
      .open}am until ${hValues[index].close}pm`;
    catalogo[elem].exhibition = [];

    if (elem === 'Monday') {
      catalogo[elem].officeHour = 'CLOSED';
      catalogo[elem].exhibition = 'The zoo will be closed!';
    }
    species.forEach((animals) => {
      const { name, availability } = animals;
      if (availability.includes(elem)) {
        catalogo[elem].exhibition.push(name);
      }
    });
  });

  Object.keys(catalogo).forEach((elem) => {
    if (scheduleTarget === elem) {
      catalogo = { [elem]: catalogo[elem] };
      return catalogo;
    }
  });
  if (arrayWithDays(scheduleTarget)) { return arrayWithDays(scheduleTarget); }
  return catalogo;
}

module.exports = getSchedule;
