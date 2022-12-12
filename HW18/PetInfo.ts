interface IPetInfo {
    id: number,
    category: {id: number, name: string },
    name: string,
    photoUrls : string[],
    tags: { id: number, name: string }[],
    status: string
}

export enum PetStatus {
    "available" = "available",
    "pending" = "pending",
    'sold' = "sold"
}

export class PetInfo implements IPetInfo {
    id: number
    category: {id: number, name: string }
    name: string
    photoUrls : string[]
    tags: { id: number, name: string }[]
    status: string

    constructor(id: number, category: {id: number, name: string }, name: string, photoUrls : string[], tags: { id: number, name: string }[], status: string) {
        this.id = id
        this.category = category
        this.name = name
        this.photoUrls = photoUrls
        this.tags = tags
        this.status = status
    }
}