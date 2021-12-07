import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-slr-bill',
  templateUrl: './slr-bill.component.html',
  styleUrls: ['./slr-bill.component.css']
})
export class SlrBillComponent implements OnInit {

  allBill: any = [];
  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.getAllBill();
  }
  getAllBill(){
    this.billService.getAllBill().subscribe(
      res=>{
        console.log(res);
        this.allBill = res['data'];
        console.log(this.allBill);
      },
      err=>{
        console.log(err);
      }
    )
  }
  isPaid(status: string) {
    if (status.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  deleteBill(id: string) {
    this.billService.deleteBill(id).subscribe(
      res => {
        console.log(res);
        this.getAllBill();
      },
      err => {
        console.log(err);
      }
    )
  }
  getOrder(id: string) {
    var dateNow = new Date();
    console.log(dateNow);
    this.billService.updateBill(id, dateNow).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }
}
