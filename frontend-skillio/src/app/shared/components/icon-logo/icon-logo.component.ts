import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


export type LogoSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

export interface LogoProps {
  size?: LogoSize;
  label?: string;
  labelPosition?: 'right' | 'left';
}

export const LOGO_SIZES: Record<LogoSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-6 h-6',
  'base': 'w-8 h-8',
  'lg': 'w-10 h-10',
  'xl': 'w-12 h-12',
  '2xl': 'w-16 h-16'
};

export const LABEL_SIZES: Record<LogoSize, string> = {
  'xs': 'text-xs',
  'sm': 'text-sm',
  'base': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-xl',
  '2xl': 'text-2xl'
};

@Component({
  selector: 'app-icon-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-logo.component.html',
  styleUrl: './icon-logo.component.scss'
})
export class IconLogoComponent {
  @Input({ required: true }) size: LogoSize = 'base';
  @Input() label?: string;
  @Input() labelPosition: 'right' | 'left' = 'right';
  @Input() labelSize: LogoSize = 'base';
  get sizeClass(): string {
    return LOGO_SIZES[this.size] || LOGO_SIZES.base;
  }

  get labelSizeClass(): string {
    return LABEL_SIZES[this.labelSize] || LABEL_SIZES.base;
  }
}
