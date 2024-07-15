import { Component} from '@angular/core';
import { SchedulesService } from '../../services/schedules.service';

export interface Schedules {
  id: string;
  description: string;
  date_time_of_receiving: string;
  teacher_interested:string;
  accepted: boolean;
}



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  schedules : [] = []



  constructor(
    private scheduleService: SchedulesService
  ){}

  ngOnInit(){
    this.getSchedules()
  }

  //funzione per ricevere e visualizzare tutti gli appuntamento
  getSchedules() {
    this.scheduleService.GetSchedules().subscribe({
      next: (res) => {
        console.log('Data from database : ', res);
        this.schedules = res.map((schedule: Schedules) => ({ ...schedule, accepted: false }));
      },
      error: (err) => {
        console.error('No data in database');
      }
    });
  }

  //funzione per ricevere e visualizzare tutti gli appuntamento
  accettaAppuntamento(schedule: Schedules) {
    schedule.accepted = true;
  }

  rifiutaAppuntamento(schedule: Schedules){
    schedule.accepted = false
  }
}

