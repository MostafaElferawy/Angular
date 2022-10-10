import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { ReactiveAddProductComponent } from './Components/reactive-add-product/reactive-add-product.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuardGuard } from './auth-guard.guard';

// /home
// /home/products
// /home/pro/1


const routes: Routes = [    
  
    {path: "", redirectTo: "/home", pathMatch: "full"},
    //  layout --> navbar + footer + sidebar
    {path: "", component: LayoutComponent, children: [
      {path: "home", component: HomeComponent},
      {path: "products", component: ProductsComponent, canActivate: [AuthGuardGuard]},
    ] },

    {
      path: 'User',
      loadChildren: () => import('src/app/userm/userm.module')
                            .then(m=>m.UsermModule)
    },
    
    {path: "product/add", component: AddProductsComponent},
    {path: "product/radd", component: ReactiveAddProductComponent},


    {path: "products/:productId", component: ProductDetailsComponent},
    {path: "login", component: HomeComponent},
    {path: "logout", component: HomeComponent},


    {path: "order", component: OrderComponent},
    {path: "**", component: NotFoundComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



