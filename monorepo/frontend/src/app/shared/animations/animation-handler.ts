import { animate, style, transition, trigger } from '@angular/animations';

export class AnimationHandler {
  static getFadeInOut() {
    return [
      trigger('fadeInOut', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateX(-50px)' }), 
          animate('400ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })) 
        ]),
        transition(':leave', [
          animate('400ms ease-out', style({ opacity: 0, transform: 'translateX(50px)' }))
        ])
      ])
    ];
  }
}
