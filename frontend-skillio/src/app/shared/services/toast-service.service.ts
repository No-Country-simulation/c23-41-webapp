import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {
  messageService = inject(MessageService);

  private defaultConfig = {
    key: 'mainToast',
    life: 4000,
  };

  success(message: string, title: string = 'Success') {
    this.messageService.add({
      ...this.defaultConfig,
      severity: 'success',
      summary: title,
      detail: message,
      styleClass: 'bg-white text-gray-900',
      icon: undefined
    });
  }

  error(message: string, title: string = 'Error') {
    this.messageService.add({
      ...this.defaultConfig,
      severity: 'error',
      summary: title,
      detail: message
    });
  }

  info(message: string, title: string = 'Info') {
    this.messageService.add({
      ...this.defaultConfig,
      severity: 'info',
      summary: title,
      detail: message
    });
  }
}
