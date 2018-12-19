import { Product } from './product';
export class DashboardOffer {
    offerId: number
    quantity: number
    quantitySold: number
    price: string
    bestBefore: string
    start: string
    end: string
    ended: string
    createdAt: string
    updatedAt: string
    parentOfferId: number
    supplierId: number
    productId: number
    sellingUnitId: number
    product: Product
}