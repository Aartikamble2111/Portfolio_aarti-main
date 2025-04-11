import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('listAnimation', [
      transition(':enter', [
        query(
          '.skill',
          [
            style({ opacity: 0, transform: 'translateX(-20px)' }),
            stagger(
              100,
              animate(
                '400ms ease-out',
                style({ opacity: 1, transform: 'translateX(0)' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML',
      percentage: 90,
      color: 'rgb(181, 183, 188)',
      icon: 'assets/icons/html.png',
    },
    {
      name: 'CSS',
      percentage: 90,
      color: 'rgb(181, 183, 188)',
      icon: 'assets/icons/css.png',
    },
    {
      name: 'JAVASCRIPT',
      percentage: 85,
      color: 'rgb(181, 183, 188)',
      icon: 'assets/icons/js.png',
    },
    {
      name: 'ANGULAR',
      percentage: 90,
      color: 'rgb(181, 183, 188)',
      icon: 'assets/icons/Angular.png',
    },
    {
      name: 'TYPESCRIPT',
      percentage: 80,
      color: 'rgb(181, 183, 188)',
      icon: 'assets/icons/typescript.png',
    },
    // {
    //   name: 'ANGULAR MATERIAL',
    //   percentage: 80,
    //   color: 'rgb(181, 183, 188)',
    //   icon: 'assets/icons/material.svg',
    // },
  ];

  constructor(private titleservice: Title) {
    this.titleservice.setTitle('Aarti Kamble - Skills');
  }

  scrollToSection(skills: string) {
    const element = document.getElementById(skills);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
