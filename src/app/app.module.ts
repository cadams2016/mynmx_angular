import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LeftNavrComponent } from './left-navr/left-navr.component';
import { RepDataComponent } from './rep-data/rep-data.component';
import { IsMylogin } from './nmx-login/nmx-login.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: IsMylogin },
      { path: 'dashboard', component: ProductListComponent },
      { path: 'product-resources', component: ProductListComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    LeftNavrComponent,
    RepDataComponent,
    IsMylogin,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
