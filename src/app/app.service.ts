import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";

import { Details } from "./interfaces/details";
import { Slide } from "./interfaces/slide";
import { Thumbnail } from "./interfaces/thumbnail";
import { VillasPreview } from "./interfaces/villas-preview";
import { VillasDescription } from "./interfaces/villas-description";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

    private detailsUrl = 'api/details';
    private slidesUrl  = 'api/slides';
    private thumbsUrl  = 'api/thumbs';
    private villasUrl  = 'api/villasPreview';
    private villasDescrUrl  = 'api/villasDescription';

    constructor(private http: Http, private router: Router) { }

    getDetail(id: number) {
        const url = this.detailsUrl;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data[id] as Details)
            .catch(this.handleError);
    }

    getVillasPreview() {
        const url = this.villasUrl;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as VillasPreview)
            .catch(this.handleError);
    }

    getSlides() {
        const url = this.slidesUrl;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Slide)
            .catch(this.handleError);
    }

    getThumbnails() {
        const url = this.thumbsUrl;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Thumbnail)
            .catch(this.handleError);
    }

    getVillasDescription() {
        const url = this.villasDescrUrl;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as VillasDescription)
            .catch(this.handleError);
    }

    openDetails(id: number) {
        this.router.navigate(['/details', id])
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}