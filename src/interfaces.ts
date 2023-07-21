import { COUNTRY} from './types'
import { PERMISSIONS, LOYALITY_LEVEL } from './enums'

export interface REVIEW {
    name: string,
    stars: number,
    loyaltyUser: LOYALITY_LEVEL,
    date: string
}

export interface PROPERTIES {
    image: string;
    title: string;
    price: number;
    location: {
        address: string;
        city: string;
        code: number | string;
        country: COUNTRY;
    }
    contact: [number, string];
    isAvailable: boolean;
}

export interface USER {
    firstName: string,
    lastName: string,
    isReturning: boolean,
    permissions: PERMISSIONS,
    age: number,
    stayedAt: string[]
}