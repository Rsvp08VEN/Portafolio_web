import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit, AfterViewInit {
  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef>;
  
  skills: Skill[] = [
    { name: 'Angular', level: 100, category: 'Frontend' },
    { name: 'Vue', level: 80, category: 'Frontend' },
    { name: 'React', level: 70, category: 'Frontend' },
    { name: 'JavaScript', level: 100, category: 'Frontend' },
    { name: 'Ionic', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 100, category: 'Frontend' },
    { name: 'HTML', level: 100, category: 'Frontend' },
    { name: 'CSS', level: 100, category: 'Frontend' },
    { name: 'jQuery', level: 100, category: 'Frontend' },
    { name: 'Bootstrap', level: 100, category: 'Frontend' },
    { name: 'MySQL', level: 65, category: 'Backend' },
    { name: 'SQL', level: 90, category: 'Backend' },
    { name: 'PostgreSQL', level: 90, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Backend' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'Nest JS', level: 100, category: 'Backend' },
    { name: 'Electron JS', level: 60, category: 'Backend' }
  ];
  
  animationTriggered = false;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  get frontendSkills() {
    return this.skills.filter(skill => skill.category === 'Frontend');
  }
  
  get backendSkills() {
    return this.skills.filter(skill => skill.category === 'Backend');
  }
  
  ngOnInit() {}
  
  ngAfterViewInit() {
    this.observeSection();
  }
  
  private observeSection() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animationTriggered) {
            this.animationTriggered = true;
            this.animateProgressBars();
          }
        });
      }, { threshold: 0.3 });
      
      const skillsSection = document.querySelector('.skills-section');
      if (skillsSection) {
        observer.observe(skillsSection);
      }
    }
  }
  
  private animateProgressBars() {
    this.progressBars.forEach((progressBar, index) => {
      setTimeout(() => {
        progressBar.nativeElement.style.width = `${progressBar.nativeElement.dataset['level']}%`;
      }, index * 100);
    });
  }
}