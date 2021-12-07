import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-cus-history',
  templateUrl: './cus-history.component.html',
  styleUrls: ['./cus-history.component.css']
})
export class CusHistoryComponent implements OnInit {

  constructor(private billService: BillService) { }
  allOrder: any = [];
  ngOnInit(): void {
    this.getAllBill();
  }
  getAllBill() {
    this.billService.getBillByEmail().subscribe(
      data => {
        this.allOrder = data['data'];
        console.log(this.allOrder);
      },
      err => {
        console.log(err);
      }
    );
  }
  isPaid(status: string) {
    if (status.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
