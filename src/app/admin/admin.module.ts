import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { routedAdminModuleComponents, AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    routedAdminModuleComponents    
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule],
  providers: [],
})
export class AdminModule {}
