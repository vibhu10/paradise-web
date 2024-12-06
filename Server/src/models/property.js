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
    console.log(propertyData, "data in model@@@@@@@");
  
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
 
    // Static method to get property details based on title and internalName
    static getPropertyDetails(title, internalName) {
      console.log(title, internalName, "in the model");
    
      // Search for a match by either title or internalName (propertyName)
      return this.properties.find(
        (property) =>
          (title && property.title === title) || (internalName && property.propertyName === internalName)
      );
    }
    static updateProperty(propertyId, updatedData) {
      // Find the property by its ID
      const propertyIndex = PropertyModel.properties.findIndex((property) => property.id === propertyId);
      
      if (propertyIndex === -1) {
        throw new Error("Property not found");
      }
  
      // Update the property with new data
      const property = PropertyModel.properties[propertyIndex];
      
      // Update each property field with the corresponding value in updatedData
      Object.assign(property, updatedData);
  
      // Return the updated property
      return property;
    }
  }

  
// Initialize the static properties list
PropertyModel.properties = [
  // Property 1
  {
    propertyType: ["Unique", "Luxury", "Group Stays"],
    Address: {
      country: "Hungary",
      houseAndFlat: "Flat A101",
      streetAddress: "Main Street 12",
      landmark: "Near Central Park",
      district: "Budapest District",
      city: "Budapest",
      state: "Pest",
      pin: "1007",
      showLocation: true,
    },
    basicDetails: {
      Guests: 4,
      Bedrooms: 2,
      Beds: 3,
      Bathrooms: 2,
    },
    amenities: [
      { category: "Essentials", options: ["Wifi", "Air Conditioning"] },
      { category: "Kitchen & Dining", options: ["Full Kitchen"] },
      { category: "Laundry", options: ["Dryer"] },
      { category: "Parking", options: ["Free parking on premises"] },
      { category: "Outdoor & Recreation", options: ["Pool", "Firepit"] },
      { category: "Bathroom", options: ["Bathtub"] },
    ],
    coverPhotos: {
      1: { name: "Living Room", image: "https://via.placeholder.com/400?text=Living+Room" },
      2: { name: "Master Bedroom", image: "https://via.placeholder.com/400?text=Master+Bedroom" },
      cover: { name: "Cover Photo", image: "https://via.placeholder.com/600?text=Cover+Photo" },
    },
    title: "Luxury Apartment in Budapest",
    description: "A spacious apartment with modern amenities and a private balcony.",
    price: {
      BaseCharge: 2000,
      ServiceFees: 300,
      PriceBeforeTax: 2300,
      YouEarn: 1700,
    },
    availability: {
      minimumNight: 2,
      maximumNight: 7,
      checkinTime: "2024-12-06T14:00:00.000Z",
    },
    bedrooms: [
      {
        id: 1,
        name: "Bedroom 1",
        photos: ["https://via.placeholder.com/400?text=Bedroom+1"],
        sleepingArrangement: {
          single: 1,
          double: 1,
          queen: 0,
          king: 1,
          smallDouble: 0,
          bunkBed: 0,
          sofaBed: 1,
          sofa: 0,
        },
      },
    ],
    photoGallery: [
      { name: "Living Room", Photos: ["https://via.placeholder.com/400?text=Living+Room"] },
      { name: "Kitchen", Photos: ["https://via.placeholder.com/400?text=Kitchen"] },
      { name: "Exterior", Photos: ["https://via.placeholder.com/400?text=Exterior"] },
    ],
    checkinOut: {
      checkin: ["2024-12-06T14:00:00.000Z"],
      checkout: ["2024-12-13T10:00:00.000Z"],
    },
    quiteHour: {
      quiteHourStart: ["22:00"],
      quiteHourEnd: ["06:00"],
    },
    AddInstruction: ["Please remove shoes before entering.", "Quiet hours after 10 PM."],
    houseRules: {
      petsAllowed: true,
      maxNoPets: 1,
      smokingAllowed: false,
      commercialPhotography: false,
      eventAllowed: false,
      numberOfGuests: 4,
    },
    cards: [],
    payoutMethod: "PayPal",
    billingCountry: "Canada",
    ownerEmail: "vibhu@admin.com",
    id: 1,
    propertyName:"propertyOne"
  },
  // Property 2
  {
    propertyType: ["Seasonal", "Romantic", "Unique"],
    Address: {
      country: "Canada",
      houseAndFlat: "Cottage B3",
      streetAddress: "12 Snowy Lane",
      landmark: "Near Lake Louise",
      district: "Banff",
      city: "Calgary",
      state: "Alberta",
      pin: "T0L",
      showLocation: true,
    },
    basicDetails: {
      Guests: 6,
      Bedrooms: 3,
      Beds: 4,
      Bathrooms: 2,
    },
    amenities: [
      { category: "Essentials", options: ["Wifi", "Heating"] },
      { category: "Kitchen & Dining", options: ["Microwave", "Coffee Maker"] },
      { category: "Outdoor & Recreation", options: ["Jacuzzi", "Grill"] },
      { category: "Parking", options: ["Private Parking"] },
    ],
    coverPhotos: {
      1: { name: "Exterior", image: "https://via.placeholder.com/400?text=Exterior" },
      2: { name: "Bedroom", image: "https://via.placeholder.com/400?text=Bedroom" },
      cover: { name: "Living Room", image: "https://via.placeholder.com/600?text=Living+Room" },
    },
    title: "Snowy Mountain Retreat",
    description: "Escape to the tranquility of the mountains with this cozy winter cabin.",
    price: {
      BaseCharge: 3000,
      ServiceFees: 450,
      PriceBeforeTax: 3450,
      YouEarn: 2550,
    },
    availability: {
      minimumNight: 3,
      maximumNight: 10,
      checkinTime: "2024-12-10T15:00:00.000Z",
    },
    bedrooms: [
      {
        id: 1,
        name: "Master Bedroom",
        photos: ["https://via.placeholder.com/400?text=Master+Bedroom"],
        sleepingArrangement: {
          single: 0,
          double: 1,
          queen: 1,
          king: 0,
          smallDouble: 0,
          bunkBed: 0,
          sofaBed: 1,
          sofa: 0,
        },
      },
    ],
    photoGallery: [
      { name: "Living Room", Photos: ["https://via.placeholder.com/400?text=Living+Room"] },
      { name: "Kitchen", Photos: ["https://via.placeholder.com/400?text=Kitchen"] },
      { name: "Balcony", Photos: ["https://via.placeholder.com/400?text=Balcony"] },
    ],
    checkinOut: {
      checkin: ["2024-12-10T15:00:00.000Z"],
      checkout: ["2024-12-15T10:00:00.000Z"],
    },
    quiteHour: {
      quiteHourStart: ["21:00"],
      quiteHourEnd: ["07:00"],
    },
    AddInstruction: ["Do not leave fireplace unattended.", "Keep snowshoes inside the mudroom."],
    houseRules: {
      petsAllowed: false,
      maxNoPets: 0,
      smokingAllowed: false,
      commercialPhotography: true,
      eventAllowed: true,
      numberOfGuests: 6,
    },
    cards: [],
    payoutMethod: "Bank account",
    billingCountry: "USA",
    ownerEmail: "emma@host.com",
    id: 2,
     propertyName:"propertyTwo"
  },
  // Properties 3–8 (Additional properties, structured similarly) ...
];


