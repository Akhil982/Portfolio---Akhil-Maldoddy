import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }
  ngOnInit(): void {
    var options = {
      strings: ['FULL-STACK DEVELOPER','Angular', 'Spring Boot'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
}