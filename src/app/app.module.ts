import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { NotFoundComponent } from './component/notfound/notfound.component';
import { ShopComponent } from './component/shop/shop.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: 'home', component: CarouselComponent },
  //{ path: 'shop', component: ShopComponent },  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    CarouselComponent,
    NotFoundComponent,
    ShopComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
