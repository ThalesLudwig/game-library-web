import Game from './Game';

export default class Response {
    count?: number;
    next?: string;
    previous?: string;
    results: Array<Game>;

    constructor(count: number, next: string, previous: string, results: Array<Game>) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
};