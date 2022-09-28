import { Car } from "./Car.js"
import { House } from "./House"
import { Job } from "./Job.js"
import { SellerProfile } from "./SellerProfile.js"

export class Classified {
  constructor(data) {
    this.id = data.id // classified id
    this.listingType = data.listingType
    this._sellerId = data._sellerId

    // if(this.listingType == 'Car'){
    //   this.listing = new Car(data.listing)
    // }
    // if(this.listingType == 'Job'){
    //   this.listing = new Job(data.listing)
    // }

    switch (this.listingType) {
      case 'Car':
        this.listing = new Car(data.listing)
        break;
      case 'Job':
        this.listing = new Job(data.listing)
        break;
      case 'House':
        this.listing = new House(data.listing)
        break;
      default:
        this.listing = data.listing
    }
    this.seller = new SellerProfile(data.seller) // should I leave it a POJO???
  }
}



