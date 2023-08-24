export const resolveColor = (views: number) => {
    let resolvedColor: string;

    switch (true) {
        case views >= 0 && views <= 25:
            resolvedColor = 'tomato';
            break;
        case views >= 26 && views <= 50:
            resolvedColor = 'orange';
            break;
        case views >= 51 && views <= 75:
            resolvedColor = 'yellow';
            break;
        case views >= 76 && views <= 100:
            resolvedColor = 'green';
            break;
        default:
            resolvedColor = 'black';
    }

    return resolvedColor;
}

