import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class BookingDialogComponent {
  isScheduling = false;
  showSuccess = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BookingDialogComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }

  scheduleMeeting() {
    if (this.isScheduling) return;
    
    this.isScheduling = true;
    
    // Simulate scheduling process
    setTimeout(() => {
      // Here you would integrate with Google Calendar API
      // For now, we'll simulate the process
      
      const meetingDetails = {
        date: this.data.selectedDate?.fullDate,
        time: this.data.selectedTimeSlot,
        attendee: this.data.scheduleData,
        googleMeetLink: this.generateGoogleMeetLink()
      };
      
      console.log('Meeting scheduled:', meetingDetails);
      
      // Send confirmation emails (simulated)
      this.sendMeetingConfirmation(meetingDetails);
      
      this.isScheduling = false;
      this.showSuccess = true;
      
      // Auto-close dialog after 3 seconds
      setTimeout(() => {
        this.dialogRef.close('success');
      }, 3000);
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
      to: this.data.scheduleData.email,
      subject: 'Meeting Confirmed - Nest Tech Solutions',
      body: `
        Dear ${this.data.scheduleData.name},
        
        Your meeting has been confirmed for:
        Date: ${meetingDetails.date}
        Time: ${meetingDetails.time.time}
        Duration: 30 minutes
        Platform: Google Meet
        
        Meeting Link: ${meetingDetails.googleMeetLink}
        
        We look forward to discussing your project!
        
        Best regards,
        Nest Tech Solutions Team
      `
    };
    
    // Email to your team (using your email)
    const teamEmail = {
      to: 'mushhoodyousafzai@gmail.com',
      subject: 'New Meeting Scheduled',
      body: `
        New meeting scheduled:
        
        Client: ${this.data.scheduleData.name}
        Email: ${this.data.scheduleData.email}
        Company: ${this.data.scheduleData.company}
        Date: ${meetingDetails.date}
        Time: ${meetingDetails.time.time}
        Project Brief: ${this.data.scheduleData.message}
        
        Meeting Link: ${meetingDetails.googleMeetLink}
      `
    };
    
    console.log('Client email:', clientEmail);
    console.log('Team email:', teamEmail);
  }
} 