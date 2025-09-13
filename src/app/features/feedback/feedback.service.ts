import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class FeedbackService {
  private feedbacks = [
    { name: 'Ali', message: 'Great service!' },
    { name: 'Sara', message: 'Loved working with NTS.' }
  ];

  getFeedbacks(): Observable<any[]> {
    return of(this.feedbacks);
  }

  postFeedback(feedback: any): Observable<any> {
    this.feedbacks.push(feedback);
    return of(feedback);
  }
} 