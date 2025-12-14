import { Component, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { BookingDialogComponent } from './booking-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  contactMethods = [
    {
      icon: 'pi pi-envelope',
      title: 'Email Us',
      value: 'contact@nesttechsolutions.com',
      link: 'mailto:contact@nesttechsolutions.com',
      description: 'Send us an email for detailed inquiries and project discussions.'
    },
    {
      icon: 'pi pi-phone',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Speak directly with our team for immediate assistance.'
    },
    {
      icon: 'pi pi-comments',
      title: 'Live Chat',
      value: 'Start Chat',
      link: '#',
      description: 'Get instant answers to your questions via live chat support.'
    },
    {
      icon: 'pi pi-calendar-plus',
      title: 'Schedule Meeting',
      value: 'Book Now',
      link: '#',
      description: 'Schedule a consultation with our experts at your convenience.'
    }
  ];

  socialLinks = [
    {
      icon: 'pi pi-linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/nesttechsolutions',
      description: 'Connect with us professionally and see our latest updates.',
      cta: 'Follow Us'
    },
    {
      icon: 'pi pi-github',
      name: 'GitHub',
      url: 'https://github.com/nesttechsolutions',
      description: 'Explore our open-source projects and contributions.',
      cta: 'View Repositories'
    },
    {
      icon: 'pi pi-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/nesttechsolutions',
      description: 'Get the latest tech insights and company news.',
      cta: 'Follow Updates'
    },
    {
      icon: 'pi pi-youtube',
      name: 'YouTube',
      url: 'https://youtube.com/@nesttechsolutions',
      description: 'Watch our tutorials, case studies, and tech talks.',
      cta: 'Subscribe Now'
    }
  ];

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  openBookingDialog() {
    this.dialogService.open(BookingDialogComponent, {
      header: 'Schedule a Meeting',
      width: '90%',
      maximizable: true,
      style: { maxWidth: '600px' },
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      dismissableMask: true
    }).onClose.subscribe(result => {
      if (result?.success) {
        this.messageService.add({
          severity: 'success',
          summary: 'Meeting Scheduled',
          detail: 'We will contact you shortly to confirm your appointment.'
        });
      }
    });
  }
}