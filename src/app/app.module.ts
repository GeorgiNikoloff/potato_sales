import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SalesComponent } from './components/sales/sales.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AppConfig } from './app.config';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NewProductComponent } from './components/new-product/new-product.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
  {
    path: 'new-product',
    component: NewProductComponent,
    data: {
      title: 'NewProductComponent'
    }
  },
  {
    path: 'sales',
    component: SalesComponent,
    data: {
      title: 'SalesComponent'
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [
    AppConfig
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
