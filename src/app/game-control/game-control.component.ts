import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired=new EventEmitter<number>();
  interval=0;
  lastnumber=1-1;
  constructor() { }

  ngOnInit(): void {
  }

  onStartgame()
  {
    this.interval=setInterval(()=>{
      this.intervalFired.emit(this.lastnumber +1);
      this.lastnumber++;
    },1000);
  }
  onPausegame()
  {
    clearInterval(this.interval);
  }

}
