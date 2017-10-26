import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'logout',
    template: ''
})
export class LogoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        localStorage.removeItem('hl-elearning-token');
        window.location.href = 'http://ensenanzavirtualensalud.com/';        
    }

}
