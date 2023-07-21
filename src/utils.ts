import { PERMISSIONS, LOYALITY_LEVEL } from "./enums"
import { USER } from "./interfaces"

const returningUserDisplay = document.querySelector('#returning-user') as HTMLDivElement
const userNameDisplay = document.querySelector('#user') as HTMLDivElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLDivElement
const propertiesDisplay = document.querySelector('.properties') as HTMLDivElement

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function showReviewTotal(value: number, reviewer: string, loyalityLevel: LOYALITY_LEVEL) : void {
    const iconDisplay = (loyalityLevel === LOYALITY_LEVEL.GOLD_USER) ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function createProperty(image: string, title: string, price: number, you: USER) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = title
    const img = document.createElement('img')
    img.setAttribute('src', image)
    card.appendChild(img)
    propertiesDisplay.appendChild(card)
    showDetails(you.permissions, card, price)
}

function showDetails(authorityStatus: boolean | PERMISSIONS, element : HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
 }

function makeMultiple(value: number) : string {
    if (value > 1 || value == 0) {
        return 's'
    } else {
        return ''
    }
}

export function generateImage(src: string) {
    const mainImageContainer = document.querySelector('.main-image') as HTMLDivElement
    const image = document.createElement('img')
    image.setAttribute('src', src)
    mainImageContainer.appendChild(image)
}