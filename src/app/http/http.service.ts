import {environment} from 'environments/environment';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    private apiRoot = environment.apiUrl;

    private action: string;


    constructor(private http: Http) {
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
                    reject(JSON.parse(error['_body']))
                });
        });
        return promise;
    }


}
