const { faker } = require("@faker-js/faker");
const { departments } = require("../helpers/departments.js");

function fetchDoctorDetails(name) {
    const id = faker.mersenne.rand(0, 10_000);
    const [firstName, lastName] = name.split(" ");
    const email = faker.internet.email(name);
    const phone = faker.phone.phoneNumber("###-###-####");
    const department = faker.helpers.randomize(departments);
    const clinicName = faker.company.companyName(Math.floor(Math.random() * 3));
    const street = faker.address.streetAddress();
    const city = faker.address.cityName();
    const state = faker.address.stateAbbr();
    const dateCreated = Date.now();
    const data = {
        id,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        department,
        clinic: clinicName,
        street,
        city,
        state,
        date_created: dateCreated
    };
    return data;
}

module.exports = {
    fetchDoctorDetails: fetchDoctorDetails,
};
