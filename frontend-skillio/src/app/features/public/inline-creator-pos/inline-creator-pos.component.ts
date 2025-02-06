import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageUp, LucideAngularModule } from 'lucide-angular';
import { AvatarModule } from 'primeng/avatar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';

type PostType = 'offering' | 'seeking';
@Component({
  selector: 'app-inline-creator-pos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule, AvatarModule, DropdownModule, FileUploadModule, ChipsModule, LucideAngularModule],
  templateUrl: './inline-creator-pos.component.html',
  styleUrl: './inline-creator-pos.component.scss'
})
export class InlineCreatorPosComponent {
  readonly imageUp = ImageUp;

  postTypeOptions = [
    { label: "I'm Offering", value: 'offering' },
    { label: "I'm Seeking", value: 'seeking' }
  ];

  postForm = new FormGroup({
    postType: new FormControl<PostType>('offering', Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    tags: new FormControl('', []),
  });

  isEditing = signal(false);
  tags = signal<string[]>([]);
  currentTag = '';
  imagePreview = signal<string | null>(null);

  startEditing() {
    this.isEditing.set(true);
  }

  cancelEditing() {
    this.isEditing.set(false);
    this.postForm.reset({ postType: 'offering' });
    this.tags.set([]);
    this.imagePreview.set(null);
  }

  addTag() {
    const trimmedTag = this.currentTag.trim();
    if (trimmedTag && !this.tags().includes(trimmedTag)) {
      this.tags.update(tags => [...tags, trimmedTag]);
      this.currentTag = '';
    }
  }

  removeTag(tagToRemove: string) {
    this.tags.update(tags => tags.filter(tag => tag !== tagToRemove));
  }

  onFileSelect(event: any) {
    const file = event.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview.set(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  clearImage() {
    this.imagePreview.set(null);
  }

  publishPost() {
    if (this.postForm.valid) {
      // Implement your publish logic
      console.log(this.postForm.value, this.tags(), this.imagePreview());
      this.cancelEditing();
    }
  }
}
