import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {HttpService} from '../http/http.service'


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {


    user: User = {
        name: null,
        last_name: null,
        email: null,
        password: null,
        repeat_password: null
    };


    constructor(private http: HttpService) {
    }

    ngOnInit() {
    }

    register() {


        this.http.setAction('addUser');

        this.http.HTTP(this.user).then(function success(data) {
            console.log('>>', data)
        }).catch(function (err) {
            console.log('>>>', err)
        })


    }


}

interface User {
    name: string;
    last_name: string;
    email: string;
    password: string;
    repeat_password: string;
}
