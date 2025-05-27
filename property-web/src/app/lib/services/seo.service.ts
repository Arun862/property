import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { 
    
  }

  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: "description", content: description });
  }

  setCanonicalURL() {
    const canonicalUrl = window.location.href;
    this.metaService.addTag({ rel: "canonical", href: canonicalUrl });
  }
}
