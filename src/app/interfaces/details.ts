export class Details {
    id: number;
    title: string;
    description: string;
    hero: {
        src: string;
        srcset: string;
        alt: string;
    };
    stnInfo1: {
        title: string,
        items: {
            title: string,
            value: string
        }[]
    };
    stnInfo2: {
        title: string,
        items: {
            title: string,
            points: string[]
        }[]
    };
    stnInfo3: {
        title: string,
        description: string,
        thumbnails: {
            src: string,
            origImage: string,
            alt: string
        }[]
    }
}