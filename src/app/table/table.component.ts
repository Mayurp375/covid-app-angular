import { Component } from '@angular/core';
import { CovidServiceService } from '../service/covid-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  covidData: any;
  covidData2: any;
  covidData3: any;
  
  
  constructor(private covidService: CovidServiceService){
    
  }

  getData(){
    this.covidService.fetchData().subscribe((data:any)=>{
      console.log(data);
      
      this.covidData=data.statewise; 
      this.covidData2=data.tested;
      this.covidData3=data.cases_time_series;
    })
  }

  // const ELEMENT_DATA: PeriodicElement[] = [

  // ];
  
}
