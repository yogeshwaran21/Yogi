import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpManagementService } from './EmpManagementService';
import { ProjectmgServiceService } from './projectmg-service.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmpManagementService, ProjectmgServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
