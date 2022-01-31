const data = require('../data/zoo_data');

const { species, hours } = data;
const hkeys = Object.keys(hours);
const hValues = Object.values(hours);

function getSchedule(scheduleTarget) {
  let catalogo = {
    Tuesday: { officeHour: '', exhibition: [] },
    Wednesday: { officeHour: '', exhibition: [] },
    Thursday: { officeHour: '', exhibition: [] },
    Friday: { officeHour: '', exhibition: [] },
    Saturday: { officeHour: '', exhibition: [] },
    Sunday: { officeHour: '', exhibition: [] },
    Monday: { officeHour: '', exhibition: [] },
  };

  hkeys.forEach((elem, index) => {
    catalogo[elem].officeHour = `Open from ${hValues[index]
      .open}am until ${hValues[index].close}pm`;

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

  species.forEach((day) => {
    const { name, availability } = day;
    if (scheduleTarget === name) {
      catalogo = availability;
      return catalogo;
    }
  });
  return catalogo;
}

module.exports = getSchedule;
