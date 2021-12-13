import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    config: any;

    constructor() {
        this.config = {
            name: 'Potato Sales',
            title: 'Admin template based on Angular 11 and Bootstrap 4',
            version: '2.9.0'
        };
    }
}
