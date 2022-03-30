import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })

export class Service {
    constructor(private http: HttpClient){}

    getWeatherService(cityName: string) {
        const url = "https://api.openweathermap.org/data/2.5/weather?&APPID=60938402f9e39ad7d975fa4657b75e90&units=metric&q=" + cityName;
        return this.http.get(url)
    }

    postRegister(formRegister: any) {
        const url = "http://localhost:3000/register";
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body = JSON.stringify({ formRegister })
        return this.http.post(url, body, { headers })
    }
}