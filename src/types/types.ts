export interface JokeInterface {
    "id": string,
    "title": string,
    "body": string,
    "author": string,
    "views": number,
    "createdAt": number
}

export interface JokeStateInterface {
    joke: JokeInterface;
}

export interface PagenationInterface {
    page: number,
    limit: number,
}
export interface PaginationPayloadInterface {
    page: number | string,
    limit: number,
}
export interface PaginationStateInterface {
    pagination: PagenationInterface
}