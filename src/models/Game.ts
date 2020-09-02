export default class Game {
    slug: string;
    name: string;
    released?: string;
    background_image: string;
    rating?: number;
    saturated_color: string;
    dominant_color: string;
    clip?: { preview: string };
    short_screenshots?: Array<Screenshots>;

    constructor(
        slug: string,
        name: string,
        released: string,
        background_image: string,
        rating: number,
        saturated_color: string,
        dominant_color: string,
        clip: { preview: string },
        short_screenshots: Array<Screenshots>,
    ) {
        this.slug = slug;
        this.name = name;
        this.released = released;
        this.background_image = background_image;
        this.rating = rating;
        this.saturated_color = saturated_color;
        this.dominant_color = dominant_color;
        this.clip = clip;
        this.short_screenshots = short_screenshots;
    }
}

interface Screenshots {
    id: number;
    image: string;
}