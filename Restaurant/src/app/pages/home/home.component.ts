import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    { image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=1920&q=80', alt: 'Thai curry dish' },
    { image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1920&q=80', alt: 'Pad Thai noodles' },
    { image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1920&q=80', alt: 'Fresh salad' },
    { image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1920&q=80', alt: 'Thai soup' },
    { image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&q=80', alt: 'Gourmet dish' }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void { this.startSlideshow(); }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.startSlideshow();
  }

  private startSlideshow(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }
}