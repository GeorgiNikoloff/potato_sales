import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { mockUsers } from '../../services/mock/users.mock';

@Component({
    selector: 'app-login',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    form: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    errorMessage: string = null;


    constructor(
        public router: Router,
        private fb: FormBuilder
    ) {
        this.router = router;
        this.form = fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    ngOnInit() {
        this.errorMessage = null;
        localStorage.clear();
    }

    onSubmit(values: any) {
        this.errorMessage = null;
        if (this.form.valid) {
            this.redirectAfterLogin(values.email, values.password);
        }
    }

    redirectAfterLogin(email, password) {
      const users = mockUsers;

      users.forEach((user) => {
        if (user.email === email && user.pass === password) {
            localStorage.setItem('userName', user.name);
            if (user.userRole === 'regular') {
              this.router.navigate(['welcome']);
            } else {
              // future work
            }
            return;
        }
      });
      this.errorMessage = 'User has no right permissions to log in';
    }

}
