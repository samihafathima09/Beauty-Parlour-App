export class Services {
  id: string;
  serviceTitle: string;
  serviceSubTitle: string;
  serviceImage: string;
  serviceDescription: string;
  constructor(id: string, serviceTitle: string, serviceSubTitle: string, serviceImage: string, serviceDescription: string) {
    this.id = id;
    this.serviceTitle = serviceTitle;
    this.serviceSubTitle = serviceSubTitle;
    this.serviceImage = serviceImage;
    this.serviceDescription = serviceDescription;

  }
}
