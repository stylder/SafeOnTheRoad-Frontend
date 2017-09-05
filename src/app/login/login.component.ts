import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
    routerTransition,
    slideToLeft,
    slideToBottom
} from '../router.animations';
import 'rxjs/add/operator/toPromise';
import {Headers, Http} from '@angular/http';

export class User {
    email: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [slideToBottom()]
})
export class LoginComponent implements OnInit {
    private headers = {
        headers: new Headers({'Content-Type': 'application/json'})
    };

    user: User = {
        email: 'porfirioads@gmail.com',
        password: 'holamundo'
    };

    alerts: Array<any> = [];

    emailRequiredAlert: any = {
        type: 'danger',
        message: 'Email requerido'
    }

    constructor(public router: Router, private http: Http) {
    }

    ngOnInit() {
        console.log('LoginComponent', 'ngOnInit()');
    }

    login() {
        const url = 'http://localhost:8080/api/logIn';

        return this.http
            .post(url, JSON.stringify(this.user), this.headers)
            .toPromise()
            .then(response => {
                const data = response.json();
                if (data.session.user) {
                    console.log('Login correcto');
                    this.redirectToDashboard();
                }
            })
            .catch(error => {
                if (error.status === 400) {
                    console.log(error.json().error);
                    this.showErrorMessage('Email o password incorrectos.');
                } else {
                    console.error(error);
                    this.showErrorMessage('Error en el servidor');
                }
            });
    }

    redirectToDashboard() {
        localStorage.setItem('isLoggedin', 'true');

        this.alerts.push({
            id: 2,
            type: 'success',
            message: 'Inicio de sesión correcto'
        });

        setTimeout(() => {
            this.router.navigate(['/dashboard']);
        }, 1000);
    };

    showErrorMessage(errorMessage) {
        this.alerts.push({
            type: 'danger',
            message: errorMessage
        });
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
