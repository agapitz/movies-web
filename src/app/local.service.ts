import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LocalService {
  host: any = "http://localhost:7050";//staging
  idHolder: any = 0;


  myBrowser() {

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {

      return 'Opera';

    } else if (navigator.userAgent.indexOf("Chrome") != -1) {

      return 'Chrome';

    } else if (navigator.userAgent.indexOf("Safari") != -1) {

      return 'Safari';

    } else if (navigator.userAgent.indexOf("Firefox") != -1) {

      return 'Firefox';

    } else if ((navigator.userAgent.indexOf("MSIE") != -1)) {

      return 'IE';

    } else {

      return 'this browser';

    }
  }

}
