import { Component, ViewChild, ElementRef } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { isEmpty } from 'rxjs';
import { NzColor } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'app-qrcomp',
  templateUrl: './qrcomp.component.html',
  styleUrls: ['./qrcomp.component.css']
})
export class QrcompComponent {

  link: string = '';
  linkToQR: string = '';
  isLoadingButton: boolean = false;
  disbtn2Value: boolean = true;
  size: NzButtonSize = 'large';
  qrLoading: 'active' | 'expired' | 'loading' = 'loading';
  inputStatus: 'error' | 'warning' | '' = '';

  qrbg: string = '#fff'
  qrcolor: string = '#000000'

  @ViewChild('download', { static: false }) download!: ElementRef;

  genQR() {
    console.log("Output: ", this.link)
    if (this.link == '') {
      this.inputStatus = 'error'
    }
    else {
      this.isLoadingButton = true;
      this.qrLoading = 'active';
      this.linkToQR = this.link;
      this.isLoadingButton = false;
      this.disbtn2Value = false;
    }
  }


}