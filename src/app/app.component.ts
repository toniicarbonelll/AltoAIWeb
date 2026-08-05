import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  bookingUrl = 'https://calendly.com/toni-altoai';
  demoUrl = 'walkthrough/'
  year = new Date().getFullYear();
  openBooking(): void { window.open(this.bookingUrl, '_blank', 'noopener,noreferrer'); }
  openDemo(): void { window.open(this.demoUrl, '_blank', 'noopener,noreferrer'); }

  scrollTo(id: string): void { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }

  outcomes = [
    ['↗','Know what will happen next','Predict sales, repeat purchases and churn before they impact your results.'],
    ['◎','Find your best customers','Create clear customer segments for stronger targeting and retention.'],
    ['⌁','See real profitability','Blend store and marketing data to identify genuinely profitable channels.'],
    ['✦','Ask your data directly','Use Claude as a data analyst and receive answers in plain English.'],
    ['⚡','Act when something changes','Receive custom alerts when important metrics move unexpectedly.'],
    ['✓','Get recommendations, not reports','Turn dashboards and models into practical next actions.']
  ];

  services = [
    ['01','Data Engineering','One reliable source of truth','20+ connectors|Up to two years of data|BigQuery setup|Blended sales and MER'],
    ['02','Analytics','See what is happening now','100+ dashboards|Claude data analyst|Monthly analysis|Custom alerts'],
    ['03','Data Science','Know what happens next','Customer segmentation|Churn prediction|Purchase prediction|Sales forecasting'],
    ['04','Managed Service','Your external data team','Full configuration|Personal tutorial|Private Slack channel|Continuous monitoring'],
    ['05','Custom Intelligence','Built around your questions','Custom AI models|Explainable AI|Uplift modeling roadmap|Demand forecasting roadmap']
  ];
}
