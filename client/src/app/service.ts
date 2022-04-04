import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class Service {
    constructor(private http: HttpClient){}

    private messageSource = new BehaviorSubject('message from service');
    currentMessage = this.messageSource.asObservable();

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    changeMessage(msg: string) {
        this.messageSource.next(msg);
    }

    getWeatherService(cityName: string) {
        const url = "https://api.openweathermap.org/data/2.5/weather?&APPID=60938402f9e39ad7d975fa4657b75e90&units=metric&q=" + cityName;
        return this.http.get(url)
    }

    postRegister(formRegister: any) {
        const url = "http://localhost:3000/register";
        return this.http.post(url, formRegister, this.httpOptions);
    }

    postLogin(formLogin: any) {
        const url = "http://localhost:3000/login"
        return this.http.post(url, formLogin, this.httpOptions)
    }
}