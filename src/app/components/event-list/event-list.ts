import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceFormatPipe } from '../../pipes/price-format-pipe';
import { Highlight } from '../../directives/highlight';

interface EventItem {
  name: string;
  date: string;    // ISO yyyy-MM-dd
  price: number;
  category: string;
}

@Component({
  selector: 'app-event-list',
  imports: [CommonModule,PriceFormatPipe,Highlight],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList {

   events: EventItem[] = [
    { name: 'Tech Innovators Conference', date: '2025-09-12', price: 3500, category: 'Conference' },
    { name: 'Creative Writing Workshop', date: '2025-10-05', price: 800, category: 'Workshop' },
    { name: 'Rock Music Concert', date: '2025-11-20', price: 2500, category: 'Concert' },
    { name: 'AI & Machine Learning Summit', date: '2025-12-02', price: 5000, category: 'Conference' }
  ];

}
