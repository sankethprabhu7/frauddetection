import { Component, OnInit, OnChanges, ViewChild, ElementRef , AfterViewInit} from '@angular/core';
import { HttpService } from '../http-service.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges , AfterViewInit {
  @ViewChild('resultDialog', { static: false }) oDialog: ElementRef;
  @ViewChild('resultDialog1', { static: false }) mainDialog: ElementRef;
  date1: string;
  date2: string;
  hidden = true;
  userName;
  object1 = Object;
  jsondata1: any;
  headvar;
  contvalue: number;
  alertArray: Array<any> = [];
  checkedarray: Array<any> = [];
  saverunid: any;
  dialog = document.getElementById('hello-dialog') as HTMLInputElement;
  busy: boolean;
  savestatus: any;
  stickycolumn: string;
  headerCount: number;
  constructor(private httpService: HttpService,
              public datepipe: DatePipe) {
              //  this.mysfun();

  }


  ngOnInit() {

    // const x = document.getElementById('myDiv1');
    // // x.style.display = 'none';
    this.busy = true;
    setTimeout(() => {
      this.busy = false;
      this.mainDialog.nativeElement.open();
  }, 2000);
  }
  ngOnChanges() {
  }
  ngAfterViewInit() {
    this.mysfun();
   // this.mainDialog.nativeElement.open();
  }
  mysfun() {

  }

  fundatepicker() {
    this.busy = true;
    setTimeout(() => {
      this.busy = false;
  }, 5000);
    this.mainDialog.nativeElement.close();

    this.headvar = 'Data';
    console.log(this.date1, this.date2);
    this.httpService.getdata(this.date1, this.date2)
      .subscribe(
        resultArray => {
          this.alertArray = resultArray;
          const a = JSON.stringify(this.alertArray);
          this.headerCount = Object.keys(a).length;
          console.log('head count ' + this.headerCount);
          // if (resultArray.length > 0) {
          this.busy = false;
          const x = document.getElementById('myDiv1');
          x.style.display = 'block';
          // }
        });
    this.busy = true;
    setTimeout(() => {
          this.busy = false;
      }, 6000);
  }


  funsaverunid() {

    this.httpService.postresult(this.date1, this.date2, this.contvalue, this.checkedarray, this.saverunid)
      .subscribe(
        result => {
        this.savestatus = result;
        this.savestatus = JSON.stringify(this.savestatus);
        console.log(this.savestatus);
        this.savestatus = JSON.parse(this.savestatus);
          // if(this.savestatus="successfully saved")
        this.savestatus = this.savestatus.status;
        }
      );
    this.stickycolumn = '';
    this.oDialog.nativeElement.open();
  }

  myDatepicker1(event) {
    this.date1 = event.detail.value;
    this.date1 = this.datepipe.transform(this.date1, 'yyyy/MM/dd');
  }
  myDatepicker2(event) {
    this.date2 = event.detail.value;
    this.date2 = this.datepipe.transform(this.date2, 'yyyy/MM/dd');
  }

  mycontamination(event) {
    console.log(event.target.value);
    this.contvalue = event.target.value;
  }
  funrunid(event) {
    this.saverunid = event.target.value;
  }
  funcontamination() {
    this.busy = true;
    setTimeout(() => {
      this.busy = false;
  }, 3000);
    this.headvar = 'Result';
    this.httpService.getresult(this.date1, this.date2, this.contvalue, this.checkedarray)
      .subscribe(
        resultArray => this.alertArray = resultArray,
      );
  }
  mycheckevent(event) {
    console.log(event);
    if (event.target.checked === true) {
      this.checkedarray.push(event.target.text);
    } else {
      this.checkedarray.splice(this.checkedarray.findIndex(item => item === event.target.text), 1);
    }
    console.log(this.checkedarray);
  }
  closedialog() {
    this.oDialog.nativeElement.close();

  }

  myfun(event) {
    console.log(this.checkedarray);

  }
}
