import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ServiceService } from '../service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  bannerData:any;
  displayedColumns =['symbol','current_price','price_change_percentage_24h','market_cap']
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private service:ServiceService) { }

  ngOnInit(): void {
    this.getAllData();
    this.getBanner();
  }
  getBanner(){
    this.service.getTrendingCurrency("INR").subscribe(res=>{
      console.log(res)
      this.bannerData= res;
    })
  }
  getAllData(){
    this.service.getCurrencyData("INR").subscribe(res=>{
      this.dataSource = new MatTableDataSource(res);    
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


