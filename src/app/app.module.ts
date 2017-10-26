import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { RegistryComponent } from './registry/registry.component';
import { FormComponent } from './form/form.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SectionComponent,
    LoginComponent,
    FooterComponent,
    BannerComponent,
    RegistryComponent,
    FormComponent,
    FormloginComponent,
    CursosComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
