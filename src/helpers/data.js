const { faker } = require("@faker-js/faker");
const { departments } = require("../helpers/departments.js");

function fetchDoctorDetails(name) {
    const id = faker.mersenne.rand(0, 10_000);
    const [firstName, lastName] = name.split(" ");
    const email = faker.internet.email(name);
    const phone = faker.phone.phoneNumber("###-###-####");
    const department = faker.helpers.randomize(departments);
    const street = faker.address.streetAddress();
    const city = faker.address.cityName();
    const state = faker.address.stateAbbr();
    const data = {
        id,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        department,
        street,
        city,
        state,
    };
    return data;
}

module.exports = {
    fetchDoctorDetails: fetchDoctorDetails,
};
