import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlertDemoComponent } from './demo/alert-demo.component';
import { GuardDemoComponent } from './demo/guard-demo.component';
import { RouteGuard } from './guards/route.guard';

const appRoutes: Routes = [
    { path: 'alert-demo', component: AlertDemoComponent },
    { path: 'guard-demo', component: GuardDemoComponent, canDeactivate: [RouteGuard] }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes)