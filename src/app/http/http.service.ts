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


        console.log(params)
        const promise = new Promise((resolve, reject) => {
            this.http.post(this.apiRoot + this.action, params)
                .toPromise()
                .then(
                    res => { // Success
                        console.log(res.json());
                        resolve();
                    }
                );
        });
        return promise;
    }
}
