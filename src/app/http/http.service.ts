import {environment} from 'environments/environment';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    private apiRoot = environment.apiUrl;

    private action: string;


    constructor(private http: Http, private router: Router) {
    }


    setAction(httpAction: string) {
        this.action = httpAction;
    }


    HTTP(params) {
        const promise = new Promise((resolve, reject) => {
            this.http.post(this.apiRoot + this.action, params)
                .toPromise()
                .then(response => {
                    resolve(JSON.parse(response['_body']));
                }).catch(error => {
                this.processError(error.status);
                reject(JSON.parse(error['_body']))
            });
        });
        return promise;
    }

    processError(code) {
        if (code === 401) { // Not Login
            console.log('You\'not login');
            this.router.navigate(['/login']);
        } else if (code === 402) { // Not Permission.
            console.log('You do\'nt have permision');
        } else {
            console.log('Error', code);
        }
    }
}
