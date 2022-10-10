import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppComponent } from './app.component';
import { NabvarComponent } from './Components/nabvar/nabvar.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
//  import { MainComponent } from './main/main.component';
import { ProductsComponent } from './Components/products/products.component';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderComponent } from './Components/order/order.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { ReactiveAddProductComponent } from './Components/reactive-add-product/reactive-add-product.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    ProductsComponent,
    BorderBoxDirective,
    USDtoEGPPipe,
    OrderComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    AddProductsComponent,
    ReactiveAddProductComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
