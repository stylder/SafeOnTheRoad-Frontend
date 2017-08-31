import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition,slideToLeft,slideToBottom } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [slideToBottom()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit() {

        console.log("holaaa")
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }


}
