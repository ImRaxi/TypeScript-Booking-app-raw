import { REVIEW } from "../interfaces"

export class MainProperty {
    src: string
    title: string
    reviews: REVIEW
    
    constructor(src: string, title: string, reviews: REVIEW) {
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}