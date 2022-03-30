import { Component, OnInit } from '@angular/core';
import { Service } from '../../../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private wt: Service) {}

  txtCityName = '';
  weather = '';
  cityName = '';

  ngOnInit(): void {}

  getWeather(){
    this.wt.getWeatherService(this.txtCityName)
      .subscribe((res: any) => {
        this.weather = res.main.temp;
      },
      (err: any) => {
        this.weather = '';
        this.cityName = '';
        alert('Tên thành phố không chính xác')
      })
    this.cityName = this.txtCityName;
    this.txtCityName = '';
  }
}
