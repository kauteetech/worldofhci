import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { MasterdataService } from '../services/masterdata.service';


@Injectable()
export class VendorService {


    addCount: number = 0;

    constructor( 
                      private mastserv: MasterdataService,

                ) {}
    
    

      avlVendor = {
        "Cisco HyperFlex" : false,
        "HPE Simplivity" : false,
        "Dell EMC VxRAIL" : false,
        "Nutanix" : false,
        "VMware VSAN" : false,
        "Scale Computing" : false,
        "Pivot3 Acuity" : false,
        "NetApp" : false,
        "Huawei FusionCube" : false,
        "DataCore Virtual SAN" : false,
      }
    
      selVendor = {
        "Cisco HyperFlex" : true,
        "HPE Simplivity" : true,
        "Dell EMC VxRAIL" : true,
        "Nutanix" : true,
        "VMware VSAN" : true,
        "Scale Computing" : true,
        "Pivot3 Acuity" : true,
        "NetApp" : true,
        "Huawei FusionCube" : true,
        "DataCore Virtual SAN" : true,
      }    


      addVendor(selected) {
        this.avlVendor[selected] = true;
        this.selVendor[selected] = false;
        this.addCount = this.addCount+1 ;
        console.log(selected);
      }
     
      removeVendor(removed) {
        this.selVendor[removed] = true;
        this.avlVendor[removed] = false;
        this.addCount = this.addCount-1 ;
        console.log(removed);
      } 

      vendorselect(vendor) {
        return vendor;
      }
  }
