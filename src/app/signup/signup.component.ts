import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {HttpClient} from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    apiRoot = 'http://localhost:8080/api/addUser   ';


    user: User = {
        name: null,
        last_name: null,
        email: null,
        password: null,
        repeat_password: null
    };


    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    register() {
        this.http.post(this.apiRoot, this.user)
            .subscribe(data => {
                console.log(data['_body']);
            }, error => {
                console.log(error); // Error getting the data
            });
    }


}

interface User {
    name: string;
    last_name: string;
    email: string;
    password: string;
    repeat_password: string;
}
