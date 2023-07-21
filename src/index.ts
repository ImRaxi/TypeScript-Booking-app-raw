import { MainProperty } from './classes/MainProperty'
import { PERMISSIONS, LOYALITY_LEVEL } from './enums'
import { REVIEW, PROPERTIES, USER } from './interfaces'
import { populateUser, showReviewTotal, createProperty, generateImage } from './utils'

const footer = document.querySelector('.footer') as HTMLDivElement

const reviews: REVIEW[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LOYALITY_LEVEL.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LOYALITY_LEVEL.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LOYALITY_LEVEL.BRONZE_USER,
        date: '27-03-2021'
    },
]

const properties: PROPERTIES[] = [
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
        contact: [+48123123123 ,'marywinkle@gmail.com'],
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
        contact: [+48123123123 ,'garydavis@gmail.com'],
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
        contact: [+48123123123 ,'andyluger@gmail.com'],
        isAvailable: true
    }
]

const you: USER = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    permissions: PERMISSIONS.ADMIN,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Welcome User
populateUser(you.isReturning, you.firstName)

// Main Image
let yourMainProperty = new MainProperty('../images/bgalko.png', 'Main Image', reviews[1])
generateImage(yourMainProperty.src);

// Reviews
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

// Recommended
properties.forEach(element => {
    createProperty(element.image, element.title, element.price, you)
});

// Footer
let currentLocation: [string, string, number] = ['London', '11:35', 35];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'