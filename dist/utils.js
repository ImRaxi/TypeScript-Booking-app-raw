"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImage = exports.createProperty = exports.showReviewTotal = exports.populateUser = void 0;
const enums_1 = require("./enums");
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
const propertiesDisplay = document.querySelector('.properties');
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
function showReviewTotal(value, reviewer, loyalityLevel) {
    const iconDisplay = (loyalityLevel === enums_1.LOYALITY_LEVEL.GOLD_USER) ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
exports.showReviewTotal = showReviewTotal;
function createProperty(image, title, price, you) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = title;
    const img = document.createElement('img');
    img.setAttribute('src', image);
    card.appendChild(img);
    propertiesDisplay.appendChild(card);
    showDetails(you.permissions, card, price);
}
exports.createProperty = createProperty;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else {
        return '';
    }
}
function generateImage(src) {
    const mainImageContainer = document.querySelector('.main-image');
    const image = document.createElement('img');
    image.setAttribute('src', src);
    mainImageContainer.appendChild(image);
}
exports.generateImage = generateImage;
