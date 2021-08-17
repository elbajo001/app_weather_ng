import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../shared/dataservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Weather } from '../models/weatherComp';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  formularioDatos!: FormGroup;
  varWeather!: Weather;

  constructor(private parService: DataserviceService, private fbGenerator:FormBuilder) { }

  ngOnInit(): void {

    this.formularioDatos = this.fbGenerator.group({
      pais: ['colombia', Validators.required],
      ciudad: ['popayan', Validators.required]
    })

    this.parService.getWeather(this.formularioDatos.value.ciudad, this.formularioDatos.value.pais).subscribe((weather) => {
      this.varWeather = weather;
    })

  }

  consultar(){
    this.parService.getWeather(this.formularioDatos.value.ciudad, this.formularioDatos.value.pais).subscribe((weather) => {
      this.varWeather = weather;
    })
  }

}
