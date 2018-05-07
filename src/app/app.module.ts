import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';


import { Http, HttpModule, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { VendorService } from './services/vendor.service';
import { FunctionService } from './services/function.service';
import { MasterdataService } from './services/masterdata.service';

import { HpeService } from './services/shared/hpe';
import { CiscoService } from './services/shared/cisco';
import { NutanixService } from './services/shared/nutanix';
import { VmwareService } from './services/shared/vmware';
import { DellemcService } from './services/shared/dellemc';
import { Pivot3Service } from './services/shared/pivot';
import { ScaleService } from './services/shared/scale';
import { NetappService } from './services/shared/netapp';
import { HuaweiService } from './services/shared/huawei';
import { DatacoreService } from './services/shared/datacore';


import {  VendorHciFunctions } from '../app/services/shared/hcifunctions';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { VendorsComponent } from './vendors/vendors.component';
import { FunctionsComponent } from './functions/functions.component';
import { WohciComponent } from './wohci/wohci.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsComponent,
    ArticlesComponent,
    AboutComponent,
    VendorsComponent,
    FunctionsComponent,
    WohciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ 
    VendorService,
    FunctionService,
    MasterdataService,
    VendorHciFunctions,
    VmwareService,
    HpeService,
    CiscoService,
    NutanixService,
    DellemcService,
    DatacoreService,
    ScaleService,
    HuaweiService,
    Pivot3Service,
    NetappService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
