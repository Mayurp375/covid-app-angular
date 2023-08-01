import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../service/covid-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  covidData: any 
  covidData2: any;
  covidData3: any;
  
  displayedColumns: string[] = ['State','Active', 'Conformed', 'Deaths', 'Update'];
  
  

  constructor(private covidService: CovidServiceService){
    
  }
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.covidService.fetchData().subscribe((data:any)=>{
      console.log(data);
      
      this.covidData=data.statewise; 
      this.covidData2=data.tested;
      this.covidData3=data.cases_time_series;
    })
  }


 
  
}
