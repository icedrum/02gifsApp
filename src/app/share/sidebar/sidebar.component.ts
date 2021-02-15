import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../../gifts/services/gifts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private gifser:GiftsService) { }

  get historial():String[]{
    return this.gifser.historial;
  }

  ngOnInit(): void {
    
  }

}
