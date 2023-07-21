"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainProperty_1 = require("./classes/MainProperty");
const enums_1 = require("./enums");
const utils_1 = require("./utils");
const footer = document.querySelector('.footer');
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: enums_1.LOYALITY_LEVEL.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: enums_1.LOYALITY_LEVEL.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.LOYALITY_LEVEL.BRONZE_USER,
        date: '27-03-2021'
    },
];
const properties = [
    {
        image: '../images/bg4.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            address: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+48123123123, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: '../images/alkokumpel.png',
        title: 'Polish Cottage',
        price: 34,
        location: {
            address: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+48123123123, 'garydavis@gmail.com'],
        isAvailable: false
    },
    {
        image: '../images/bgalko.png',
        title: 'London Flat',
        price: 23,
        location: {
            address: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+48123123123, 'andyluger@gmail.com'],
        isAvailable: true
    }
];
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    permissions: enums_1.PERMISSIONS.ADMIN,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Welcome User
(0, utils_1.populateUser)(you.isReturning, you.firstName);
// Main Image
let yourMainProperty = new MainProperty_1.MainProperty('../images/bgalko.png', 'Main Image', reviews[1]);
(0, utils_1.generateImage)(yourMainProperty.src);
// Reviews
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
// Recommended
properties.forEach(element => {
    (0, utils_1.createProperty)(element.image, element.title, element.price, you);
});
// Footer
let currentLocation = ['London', '11:35', 35];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
