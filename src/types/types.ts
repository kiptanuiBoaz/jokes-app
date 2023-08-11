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

// export interface JokesListInterface{
    
// }