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
  listCity = [{
      id: 0,
      cityName: 'hanoi',
      weather: '22',
      date: Date.now()
  }];

  ngOnInit(): void {}

  getWeather(){
    this.wt.getWeatherService(this.txtCityName)
      .subscribe((res: any) => {
        this.weather = res.main.temp;
        this.listCity.unshift(
          {
            id: this.listCity.length + 1,
            cityName: this.cityName,
            weather: this.weather,
            date: Date.now()
          }
        )
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
