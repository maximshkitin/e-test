import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";

import { Details } from "./details";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

    private detailsUrl = 'api/details';

    constructor(private http: Http, private router: Router) { }

    getDetail(id: number) {
        const url = this.detailsUrl;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data[id] as Details)
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