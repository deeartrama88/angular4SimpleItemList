import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductsService } from './services/productsService.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'product/:id', component: SingleProductComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateComponent,
    SingleProductComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    TextMaskModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// time spend on this test work - 1. 21:40 - ...
