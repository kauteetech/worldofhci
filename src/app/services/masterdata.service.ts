import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { HpeService } from '../services/shared/hpe';
import { CiscoService } from '../services/shared/cisco';
import { NutanixService } from '../services/shared/nutanix';
import { VmwareService } from '../services/shared/vmware';
import { DellemcService } from '../services/shared/dellemc';
import { Pivot3Service } from '../services/shared/pivot';
import { ScaleService } from '../services/shared/scale';
import { NetappService } from '../services/shared/netapp';
import { HuaweiService } from '../services/shared/huawei';
import { DatacoreService } from '../services/shared/datacore';

@Injectable()
export class MasterdataService {

      vmw = [];
      hpe = [];
      cis = [];
      nut = [];
      del = [];
      hua = [];
      piv = [];
      sca = [];
      dat = [];
      net = [];


      
      vmwhci =  [];
      hpehci = [];
      cishci = [];
      nuthci = [];
      delhci = [];
      huahci = [];
      pivhci = [];
      scahci = [];
      dathci = [];
      nethci = [];


      totalScore: number;


  constructor(  

                private vmwserv: VmwareService,
                private hpeserv: HpeService,
                private cisserv: CiscoService,
                private nutserv: NutanixService,
                private delserv: DellemcService,
                private huaserv: HuaweiService,
                private pivserv: Pivot3Service,
                private scaserv: ScaleService,
                private datserv: DatacoreService,
                private netserv: NetappService


             ) { 

                this.vmw = this.vmwserv.vmware;
                this.hpe = this.hpeserv.hpe;
                this.cis = this.cisserv.cisco;
                this.nut = this.nutserv.nutanix
                this.del = this.delserv.dellemc;
                this.hua = this.huaserv.Huawei;
                this.piv = this.pivserv.pivot3;
                this.sca = this.scaserv.scale;
                this.dat = this.datserv.datacore;
                this.net = this.netserv.netapp;
              


                this.vmwhci = this.vmwserv.hcifunction;
                this.hpehci = this.hpeserv.hcifunction;
                this.cishci = this.cisserv.hcifunction;
                this.nuthci = this.nutserv.hcifunction;
                this.delhci = this.delserv.hcifunction;
                this.huahci = this.huaserv.hcifunction;
                this.pivhci = this.pivserv.hcifunction;
                this.scahci = this.scaserv.hcifunction;
                this.dathci = this.datserv.hcifunction;
                this.nethci = this.netserv.hcifunction;

                }
 
}
