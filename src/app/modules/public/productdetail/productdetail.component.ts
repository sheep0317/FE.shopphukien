import { Component, Input, OnInit } from '@angular/core';
import { Res } from 'src/app/models/res.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  product: any;
  id :any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this. id = params['id'];
      console.log(this.id);
    })
    this.getProduct();
    console.log(this.product);
  }
  getProduct() {
    
    this.http.get<Res>(`http://localhost:3000/api/products/`+ this.id)
      .subscribe(res => {
        this.product = res.data;
        console.log(res)
      }
    )
  }
  addToCart() {
    
  }
}
