import { Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: "address", component: AddressComponent },
  { path: "manage-address", component: ManageAddressComponent },
  { path: "error", component: ErrorComponent },
  { path: "home-page", component: HomePageComponent },
  { path: "login", component: LoginComponent },
  { path: "order", component: OrderComponent },
  { path: "order-details", component: OrderDetailsComponent },
  { path: "otp", component: OtpComponent },
  { path: "register", component: RegisterComponent },
  { path: '**', component: ErrorComponent }

];
