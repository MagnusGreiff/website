import { StuffComponent } from './stuff/stuff.component';
import { LinksComponent } from './links/links.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cv',
        component: CvComponent
    },
    {
        path: 'links',
        component: LinksComponent
    },
    {
        path: 'stuff',
        component: StuffComponent
    }
]

export { routes };