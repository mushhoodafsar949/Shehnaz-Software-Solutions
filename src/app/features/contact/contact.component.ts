import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from './booking-dialog.component';

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isAvailable: boolean;
  isToday: boolean;
  timeSlots: TimeSlot[];
  fullDate: Date;
}

interface TimeSlot {
  time: string;
  isSelected: boolean;
  isAvailable: boolean;
}

interface ScheduleData {
  name: string;
  email: string;
  company: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false
})
export class ContactComponent implements OnInit {
  @ViewChild('calendarContainer', { static: false }) calendarContainerRef!: ElementRef;

  showMap = false;
  formSent = false;
  isSubmitting = false;
  isScheduling = false;
  allowReopen = true;

  // Calendar properties
  currentDate = new Date();
  currentMonthYear = '';
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: CalendarDay[] = [];
  selectedDate: CalendarDay | null = null;
  selectedTimeSlot: TimeSlot | null = null;

  // Schedule data
  scheduleData: ScheduleData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  contact = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    this.currentMonthYear = new Date(year, month).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    this.calendarDays = [];
    const today = new Date();

    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      const isCurrentMonth = currentDate.getMonth() === month;
      const isToday = currentDate.toDateString() === today.toDateString();
      const isAvailable = this.isDateAvailable(currentDate);

      this.calendarDays.push({
        date: currentDate.getDate(),
        isCurrentMonth,
        isSelected: false,
        isAvailable,
        isToday,
        fullDate: new Date(currentDate),
        timeSlots: isAvailable ? this.generateTimeSlots() : []
      });
    }
  }

  isDateAvailable(date: Date): boolean {
    const today = new Date();
    const dayOfWeek = date.getDay();
    
    // Available on weekdays (Monday-Friday) and future dates
    return date >= today && dayOfWeek >= 1 && dayOfWeek <= 5;
  }

  generateTimeSlots(): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push({
        time: `${hour}:00`,
        isSelected: false,
        isAvailable: true
      });
      slots.push({
        time: `${hour}:30`,
        isSelected: false,
        isAvailable: true
      });
    }
    
    return slots;
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  selectDate(day: CalendarDay) {
    if (!day.isAvailable) return;
    this.calendarDays.forEach(d => d.isSelected = false);
    day.isSelected = true;
    this.selectedDate = day;
    this.selectedTimeSlot = null;
  }

  selectTimeSlot(slot: TimeSlot) {
    if (!slot.isAvailable) return;
    if (this.selectedDate) {
      this.selectedDate.timeSlots.forEach(s => s.isSelected = false);
    }
    slot.isSelected = true;
    this.selectedTimeSlot = slot;
  }

  scheduleMeeting() {
    if (this.isScheduling) return;
    
    this.isScheduling = true;
    
    // Simulate scheduling process
    setTimeout(() => {
      // Here you would integrate with Google Calendar API
      // For now, we'll simulate the process
      
      const meetingDetails = {
        date: this.selectedDate?.fullDate,
        time: this.selectedTimeSlot,
        attendee: this.scheduleData,
        googleMeetLink: this.generateGoogleMeetLink()
      };
      
      console.log('Meeting scheduled:', meetingDetails);
      
      // Send confirmation emails (simulated)
      this.sendMeetingConfirmation(meetingDetails);
      
      this.isScheduling = false;
      this.showSchedulingSuccess();
      
      // Reset form
      this.resetSchedulingForm();
    }, 2000);
  }

  generateGoogleMeetLink(): string {
    // In a real implementation, this would create a Google Meet link
    // For now, we'll generate a placeholder
    const timestamp = Date.now();
    return `https://meet.google.com/abc-defg-hij?hs=122&t=${timestamp}`;
  }

  sendMeetingConfirmation(meetingDetails: any) {
    // In a real implementation, this would send emails via your backend
    console.log('Sending confirmation emails...');
    
    // Email to client
    const clientEmail = {
      to: this.scheduleData.email,
      subject: 'Meeting Confirmed - Shehnaz Software Solutions',
      body: `
        Dear ${this.scheduleData.name},
        
        Your meeting has been confirmed for:
        Date: ${meetingDetails.date}
        Time: ${meetingDetails.time.time}
        Duration: 30 minutes
        Platform: Google Meet
        
        Meeting Link: ${meetingDetails.googleMeetLink}
        
        We look forward to discussing your project!
        
        Best regards,
        Shehnaz Software Solutions Team
      `
    };
    
    // Email to your team (using your email)
    const teamEmail = {
      to: 'mushhoodyousafzai@gmail.com',
      subject: 'New Meeting Scheduled',
      body: `
        New meeting scheduled:
        
        Client: ${this.scheduleData.name}
        Email: ${this.scheduleData.email}
        Company: ${this.scheduleData.company}
        Date: ${meetingDetails.date}
        Time: ${meetingDetails.time.time}
        Project Brief: ${this.scheduleData.message}
        
        Meeting Link: ${meetingDetails.googleMeetLink}
      `
    };
    
    console.log('Client email:', clientEmail);
    console.log('Team email:', teamEmail);
  }

  showSchedulingSuccess() {
    // You can implement a success modal or notification here
    alert('Meeting scheduled successfully! Check your email for the Google Meet link.');
  }

  resetSchedulingForm() {
    this.scheduleData = {
      name: '',
      email: '',
      company: '',
      message: ''
    };
    this.selectedDate = null;
    this.selectedTimeSlot = null;
    this.calendarDays.forEach(d => d.isSelected = false);
  }

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.formSent = true;
      this.isSubmitting = false;
      
      // Reset form
      this.contact = {
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      };
    }, 1500);
  }

  closeSuccess() {
    this.formSent = false;
  }

  openBookingDialog() {
    if (!this.selectedDate || !this.selectedTimeSlot) return;
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      data: {
        selectedDate: this.selectedDate,
        selectedTimeSlot: this.selectedTimeSlot,
        scheduleData: this.scheduleData
      },
      width: '480px',
      maxWidth: '98vw',
      maxHeight: '90vh',
      panelClass: 'booking-dialog-panel',
      disableClose: false,
      autoFocus: true,
      position: { top: '5vh' }
    });

    // Handle dialog result
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        // Reset form after successful booking
        this.resetSchedulingForm();
      }
    });
  }
} 