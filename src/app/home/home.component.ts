import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit(): void {
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/post-3-3.png');
  }
  
}
