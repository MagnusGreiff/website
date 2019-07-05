import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public routes: Array<object>;

    constructor() {
        this.routes = [
            {
                path: 'home',
                label: 'Home'
            },
            {
                path: 'cv',
                label: 'CV'
            },
            {
                path: 'links',
                label: 'Links'
            },
            {
                path: 'stuff',
                label: 'Random Stuff'
            }
        ]
    }

    ngOnInit() {
    }
}
