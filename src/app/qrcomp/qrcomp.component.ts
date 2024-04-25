import { Component, ViewChild, ElementRef } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-qrcomp',
  templateUrl: './qrcomp.component.html',
  styleUrls: ['./qrcomp.component.css']
})
export class QrcompComponent {

  constructor(private message: NzMessageService){}

  link: string = '';
  linkToQR: string = '';
  isLoadingButton: boolean = false;
  disbtn2Value: boolean = true;
  size: NzButtonSize = 'large';
  qrLoading: 'active' | 'expired' | 'loading' = 'expired';
  inputStatus: 'error' | 'warning' | '' = '';

  qrbg: string = '#fff'
  qrcolor: string = '#000000'

  @ViewChild('download', { static: false }) download!: ElementRef;

  genQR() {
    console.log("Output: ", this.link)
    if (this.link == '') {
      this.message.create('error','Please Enter a link!');
      this.inputStatus = 'error'
    }
    else {
      this.message.create('success','QR Code has been generated!');
      this.isLoadingButton = true;
      this.qrLoading = 'active';
      this.linkToQR = this.link;
      this.link='';
      this.isLoadingButton = false;
      this.disbtn2Value = false;
    }
  }

  downloadQR(){
    const canvas = document.getElementById('download')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
      this.download.nativeElement.href = canvas.toDataURL('image/png');
      this.download.nativeElement.download = 'qr-code';
      const event = new MouseEvent('click');
      this.download.nativeElement.dispatchEvent(event);
      this.message.create('success', 'QR Code will be downloaded...')
    }

  }

  paste(){
    navigator.clipboard.readText().then(
      text => {
        this.link = text;
      }
     )
      .catch(error => {
        console.error('Cannot read clipboard text: ', error);
      }
    );
  }


}