export default class PropertyModel {
  constructor({
    propertyType = [], // Array of property types
    title = "",
    propertyName = "",
    pricing = {
      BaseCharge: 0,
      ServiceFees: 0,
      PriceBeforeTax: 0,
      YouEarn: 0,
    },
    price = {
      BaseCharge: 0,
      ServiceFees: 0,
      PriceBeforeTax: 0,
      YouEarn: 0,
    },
    address = {
      country: "",
      houseAndFlat: "",
      streetAddress: "",
      landmark: "",
      district: "",
      city: "",
      state: "",
      pin: "",
      showLocation: true,
    },
    basicDetails = { Guests: 0, Bedrooms: 0, Beds: 0, Bathrooms: 0 },
    amenities = [],
    propertyCoverPhoto = null,
    description = "",
    availability = {
      minimumNight: 1,
      maximumNight: 14,
      checkinTime: "12:00",
    },
    bedrooms = [],
    photoGallery = [],
    checkinOut = { checkin: null, checkout: null },
    quietHour = { quietHourStart: null, quietHourEnd: null },
    AddInstruction = [],
    houseRules = {
      petsAllowed: false,
      maxNoPets: 0,
      smokingAllowed: false,
      commercialPhotography: false,
      eventAllowed: false,
      numberOfGuests: 0,
    },
    cards = [],
    payoutMethod = "",
    billingCountry = "",
  } = {}) {
    // Assigning properties to the object
    this.propertyType = propertyType;
    this.title = title;
    this.propertyName = propertyName;
    this.pricing = pricing;
    this.price = price;
    this.address = address;
    this.basicDetails = basicDetails;
    this.amenities = amenities;
    this.propertyCoverPhoto = propertyCoverPhoto;
    this.description = description;
    this.availability = availability;
    this.bedrooms = bedrooms;
    this.photoGallery = photoGallery;
    this.checkinOut = checkinOut;
    this.quietHour = quietHour;
    this.AddInstruction = AddInstruction;
    this.houseRules = houseRules;
    this.cards = cards;
    this.payoutMethod = payoutMethod;
    this.billingCountry = billingCountry;
  }

  // Static method to add a new property to the list
  static addProperty(propertyData) {
    console.log(propertyData, "datain model");
  
    // Ensure the static array exists
    if (!this.properties) {
      this.properties = [];
    }
  
    // Generate a unique ID for the property
    propertyData.id = this.properties.length > 0
      ? this.properties[this.properties.length - 1].id + 1 // Increment the last ID
      : 1; // Start with 1 if the array is empty
  
    // Add the property to the static array
    this.properties.push(propertyData);
  }
  

  // Static method to get all properties
  static allProperties() {
    return PropertyModel.properties;
  }


    // Static method to get properties by owner email
    static getPropertiesByEmail(ownerEmail) {
      return this.properties.filter(property => property.ownerEmail === ownerEmail);
    }
    static editProperty(id, updatedData) {
      console.log("Searching for property with ID:", id); // Log the ID being searched
      const propertyIndex = this.properties.findIndex((property) => property.id === id);
    
      if (propertyIndex === -1) {
        throw new Error("Property not found");
      }
    
      // Merge the updated data
      const updatedProperty = {
        ...this.properties[propertyIndex],
        ...updatedData,
        id: this.properties[propertyIndex].id, // Ensure `id` remains unchanged
      };
    
      this.properties[propertyIndex] = updatedProperty;
    
      return updatedProperty;
    }
    
    

    // Static method to edit a property by owner email and propertyId
  }
// Initialize the static properties list
PropertyModel.properties = [ {
  id:1,
  ownerEmail:"vibhu@admin.com",
  propertyType: ["Romantic", "City"], // Randomly selected property types
  title: "Cozy Retreat by the Lake", // Example title
  propertyName: "Lakeview Cottage", // Example property name
  pricing: {
    BaseCharge: 2500, // Base charge per night
    ServiceFees: 375, // Service fees (15% of BaseCharge)
    PriceBeforeTax: 2875, // Total price before tax
    YouEarn: 2125, // Earnings after deducting service fees
  },
  price: {
    BaseCharge: 2500, // Another pricing block (same as above for consistency)
    ServiceFees: 375,
    PriceBeforeTax: 2875,
    YouEarn: 2125,
  },
  address: {
    country: "Switzerland",
    houseAndFlat: "Flat 3B",
    streetAddress: "123 Lakeview Lane",
    landmark: "Near Sunset Point",
    district: "Geneva District",
    city: "Geneva",
    state: "Geneva State",
    pin: "1201",
    showLocation: true,
  },
  basicDetails: {
    Guests: 4, // Max guests
    Bedrooms: 2, // Number of bedrooms
    Beds: 2, // Number of beds
    Bathrooms: 2, // Number of bathrooms
  },
  amenities: ["wifi", "firepit", "workspace"], // List of amenities
  propertyCoverPhoto:"https://images.pexels.com/photos/21014/pexels-photo.jpg", // Example photo URL
  description: "A charming lakefront property with stunning views, perfect for a romantic getaway or family vacation.",
  availability: {
    minimumNight: 2, // Minimum nights required
    maximumNight: 7, // Maximum nights allowed
    checkinTime: "15:00", // Check-in time
  },
  bedrooms: [
    {
      id: 1,
      name: "Master Bedroom",
      photos: ["https://example.com/master-bedroom.jpg"],
      sleepingArrangement: { beds: 1, type: "King" },
    },
    {
      id: 2,
      name: "Guest Bedroom",
      photos: ["https://example.com/guest-bedroom.jpg"],
      sleepingArrangement: { beds: 1, type: "Queen" },
    },
  ],
  photoGallery: [
    { name: "Living Room", Photos: ["https://example.com/living-room.jpg"] },
    { name: "Kitchen", Photos: ["https://example.com/kitchen.jpg"] },
    { name: "Exterior", Photos: ["https://example.com/exterior.jpg"] },
  ],
  checkinOut: {
    checkin: "2024-11-22T15:00:00.000Z", // Check-in date and time
    checkout: "2024-11-29T11:00:00.000Z", // Check-out date and time
  },
  quietHour: {
    quietHourStart: "22:00",
    quietHourEnd: "06:00",
  },
  AddInstruction: ["Please remove shoes before entering.", "Use coasters on wooden tables."],
  houseRules: {
    petsAllowed: true,
    maxNoPets: 2,
    smokingAllowed: false,
    commercialPhotography: false,
    eventAllowed: true,
    numberOfGuests: 4,
  },
  cards: [
    { type: "Visa", lastFour: "1234" },
    { type: "MasterCard", lastFour: "5678" },
  ],
  payoutMethod: "Bank Transfer",
  billingCountry: "Switzerland",
}];
