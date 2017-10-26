import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistryComponent } from './registry/registry.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContentComponent } from './content/content.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'signon', component: RegistryComponent },
    { path: 'login', component: LoginComponent },
    { path: 'curso', component: CursosComponent},
    { path: 'content', component: ContentComponent},
    { path: 'logout', component: LogoutComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
