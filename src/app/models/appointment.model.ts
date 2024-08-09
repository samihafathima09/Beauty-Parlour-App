export class Appointment {
  id: string;
  bookedTime: string;
  clientPhone: string;
  clientEmail: string;
  bookedService: string;
  constructor(id: string, bookedTime: string, bookedService: string, clientEmail: string, clientPhone: string) {
    this.id = id;
    this.bookedTime = bookedTime;
    this.bookedService = bookedService;
    this.clientEmail = clientEmail;
    this.clientPhone = clientPhone;
  }
}
