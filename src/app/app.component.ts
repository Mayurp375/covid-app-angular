import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from './service/covid-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  covidData: any = [] ;
  covidData2: any = [] ;
  covidData3: any = [] ;
  title = 'covid-app';
  constructor(private covidService: CovidServiceService) {}

  ngOnInit() : any{
    this.getData()
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
