export interface JokeInterface {
    "id": string,
    "Title": string,
    "Body": string,
    "Author": string,
    "Views": number,
    "CreatedAt": number
}

export interface JokeStateInterface {
    joke: JokeInterface;
}

// export interface JokesListInterface{
    
// }