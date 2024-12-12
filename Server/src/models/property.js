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
   {
      title: "Lakeview Paradise",
      internalName: "property_one",
      propertyType: ["Luxury", "Waterfront", "Scenic Views"],
      Address: {
        country: "Switzerland",
        houseAndFlat: "flat no 12",
        streetAddress: "street no one",
        landmark: "near city center",
        district: "swiz",
        city: "Zurich",
        state: "zrich",
        pin: "12445",
        showLocation: true
      },
      basicDetails: {
        Guests: 2,
        Bedrooms: 1,
        Beds: 3,
        Bathrooms: 2
      },
      amenities: [
        {
          category: "Essentials",
          options: ["Wifi", "Air Conditioning"]
        },
        {
          category: "Kitchen & Dining",
          options: ["Kitchen"]
        },
        {
          category: "Laundry",
          options: ["Washing Machine"]
        },
        {
          category: "Parking",
          options: ["Free parking on premises", "Paid parking on premises"]
        },
        {
          category: "Workspace",
          options: ["Dedicated Workspace"]
        },
        {
          category: "Entertainment",
          options: ["TV"]
        },
        {
          category: "Outdoor & Recreation",
          options: ["Pool", "Firepit", "Outdoor Shower"]
        },
        {
          category: "Bathroom",
          options: ["Bathtub"]
        }
      ],
      coverPhotos: {
        1: {
          name: "Living Room",
          image: "blob:http://localhost:3001/84d2fdfa-87a4-4e32-b442-a8de6ec608f5"
        },
        2: {
          name: "Bedroom",
          image: "/image (1).png"
        },
        4: {
          name: "balcony view",
          image: "blob:http://localhost:3001/6485e5ad-7498-4a54-872b-4543cd85cbf1"
        },
        cover: {
          name: "Cover Photo",
          image: "blob:http://localhost:3001/1037382d-6acb-451a-9dee-bbb8f72e935a"
        }
      },
      description: "This is a property with a very good view of mountains and a lake.",
      price: {
        BaseCharge: 2000,
        ServiceFees: 280,
        PriceBeforeTax: 2280,
        YouEarn: 1940
      },
      availability: {
        minimumNight: 1,
        maximumNight: 5,
        checkinTime: "2024-12-10T05:10:44.887Z"
      },
      bedrooms: [
        {
          id: 1,
          name: "Bedroom 1",
          photos: ["blob:http://localhost:3001/dbdd0dee-ed8e-4979-bf87-971b19a43b24"],
          sleepingArrangement: {
            single: 0,
            double: 0,
            queen: 0,
            king: 1,
            smallDouble: 0,
            bunkBed: 1,
            sofaBed: 0,
            sofa: 0
          }
        },
        {
          id: 2,
          name: "pool",
          photos: ["blob:http://localhost:3001/3088d113-8baf-4207-9db9-403ad3911b9f"],
          sleepingArrangement: {
            single: 0,
            double: 0,
            queen: 0,
            king: 0,
            smallDouble: 0,
            bunkBed: 0,
            sofaBed: 0,
            sofa: 0
          }
        }
      ],
      photoGallery: [
        {
          name: "Living room",
          Photos: [
            "blob:http://localhost:3001/23cb0e33-5a62-48fb-bca1-f096c7d1b340",
            "blob:http://localhost:3001/6cf9527b-883a-423a-ba1e-5f355a30fefa",
            "blob:http://localhost:3001/6f08699a-b3d4-424d-b4ed-c4387b3e5e19",
            "blob:http://localhost:3001/e4973e10-6018-439d-9ec0-bf95299ca59d"
          ]
        },
        {
          name: "Full Kitchen",
          Photos: []
        },
        {
          name: "Exterior",
          Photos: [
            "blob:http://localhost:3001/00fe005a-e44d-4359-84ab-6f82b7c73ad8",
            "blob:http://localhost:3001/2a5863fb-d5cf-4c2e-b5c7-bf0f4e710123",
            "blob:http://localhost:3001/6a7cc47a-53f5-4170-912b-259ac89c5f98"
          ]
        },
        {
          name: "Dining area",
          Photos: []
        },
        {
          name: "Wash Rooms",
          Photos: [
            "blob:http://localhost:3001/70750eac-2488-4f24-bc8c-093b4438e941",
            "blob:http://localhost:3001/922b8656-e1b6-4a5f-af31-d09871f23403",
            "blob:http://localhost:3001/1703690d-f7ea-408e-a7fb-3bb4113ac72c"
          ]
        }
      ],
      checkinOut: {
        checkin: ["2024-12-10T06:30:00.000Z"],
        checkout: ["2024-12-10T05:30:00.000Z"]
      },
      quiteHour: {
        quiteHourStart: ["2024-12-09T18:30:00.000Z"],
        quiteHourEnd: ["2024-12-10T01:30:00.000Z"]
      },
      AddInstruction: [
        "instruction one",
        "instruction two",
        "instruction three"
      ],
      houseRules: {
        petsAllowed: true,
        maxNoPets: 1,
        smokingAllowed: true,
        commercialPhotography: true,
        eventAllowed: true,
        numberOfGuests: 1
      },
      cards: [],
      payoutMethod: "Bank account",
      billingCountry: "United States",
      ownerEmail: "vibhu@admin.com",
      id: 1
    }
    ,
      {
        title: "Mountain Retreat",
        internalName: "property_two",
        propertyType: ["Rustic", "Mountain View", "Peaceful"],
        Address: {
          country: "Canada",
          houseAndFlat: "Chalet 15",
          streetAddress: "Alpine Road 23",
          landmark: "Near Pine Forest",
          district: "Whistler",
          city: "Vancouver",
          state: "British Columbia",
          pin: "V0N 1B2",
          showLocation: true
        },
        basicDetails: {
          Guests: 6,
          Bedrooms: 3,
          Beds: 4,
          Bathrooms: 2
        },
        amenities: [
          { category: "Essentials", options: ["Wifi", "Heating"] },
          { category: "Kitchen & Dining", options: ["Full Kitchen"] },
          { category: "Outdoor & Recreation", options: ["Hot Tub", "Barbecue Grill"] },
          { category: "Entertainment", options: ["Board Games"] }
        ],
        coverPhotos: {
          1: { name: "Living Room", image: "https://via.placeholder.com/300" },
          2: { name: "Bedroom", image: "https://via.placeholder.com/300" },
          3: { name: "Balcony View", image: "https://via.placeholder.com/300" },
          cover: { name: "Cover Photo", image: "https://via.placeholder.com/300" }
        },
        description: "A cozy retreat with stunning mountain views and peaceful surroundings.",
        price: {
          BaseCharge: 2500,
          ServiceFees: 300,
          PriceBeforeTax: 2800,
          YouEarn: 2400
        },
        availability: {
          minimumNight: 2,
          maximumNight: 10,
          checkinTime: "2024-12-10T14:00:00Z"
        },
        bedrooms: [
          {
            id: 1,
            name: "Master Bedroom",
            photos: ["https://via.placeholder.com/300"],
            sleepingArrangement: { king: 1 }
          },
          {
            id: 2,
            name: "Guest Bedroom",
            photos: ["https://via.placeholder.com/300"],
            sleepingArrangement: { queen: 1 }
          }
        ],
        photoGallery: [
          { name: "Living Room", Photos: ["https://via.placeholder.com/300"] },
          { name: "Kitchen", Photos: ["https://via.placeholder.com/300"] },
          { name: "Exterior", Photos: ["https://via.placeholder.com/300"] }
        ],
        checkinOut: {
          checkin: ["2024-12-11T15:00:00Z"],
          checkout: ["2024-12-12T10:00:00Z"]
        },
        quiteHour: {
          quiteHourStart: ["2024-12-10T22:00:00Z"],
          quiteHourEnd: ["2024-12-11T06:00:00Z"]
        },
        AddInstruction: [
          "No noise after 10 PM",
          "Dispose of trash in the bins provided"
        ],
        houseRules: {
          petsAllowed: false,
          smokingAllowed: false,
          eventAllowed: false,
          numberOfGuests: 6
        },
        cards: [],
        payoutMethod: "Bank account",
        billingCountry: "Canada",
        ownerEmail: "owner1@example.com",
        id: 2
      },
      {
        title: "Beachside Villa",
        internalName: "property_three",
        propertyType: ["Luxury", "Beachfront", "Modern"],
        Address: {
          country: "Australia",
          houseAndFlat: "Villa 8",
          streetAddress: "Ocean Drive",
          landmark: "Near Surfer's Point",
          district: "Gold Coast",
          city: "Brisbane",
          state: "Queensland",
          pin: "4217",
          showLocation: true
        },
        basicDetails: {
          Guests: 8,
          Bedrooms: 4,
          Beds: 6,
          Bathrooms: 3
        },
        amenities: [
          { category: "Essentials", options: ["Wifi", "Air Conditioning"] },
          { category: "Kitchen & Dining", options: ["Fully Equipped Kitchen"] },
          { category: "Outdoor & Recreation", options: ["Swimming Pool", "Beach Access"] },
          { category: "Entertainment", options: ["Smart TV"] }
        ],
        coverPhotos: {
          1: { name: "Living Room", image: "https://via.placeholder.com/300" },
          2: { name: "Bedroom", image: "https://via.placeholder.com/300" },
          3: { name: "Balcony View", image: "https://via.placeholder.com/300" },
          cover: { name: "Cover Photo", image: "https://via.placeholder.com/300" }
        },
        description: "A luxurious villa with direct beach access and stunning ocean views.",
        price: {
          BaseCharge: 4000,
          ServiceFees: 500,
          PriceBeforeTax: 4500,
          YouEarn: 3700
        },
        availability: {
          minimumNight: 3,
          maximumNight: 15,
          checkinTime: "2024-12-10T12:00:00Z"
        },
        bedrooms: [
          {
            id: 1,
            name: "Master Suite",
            photos: ["https://via.placeholder.com/300"],
            sleepingArrangement: { king: 1 }
          },
          {
            id: 2,
            name: "Guest Room",
            photos: ["https://via.placeholder.com/300"],
            sleepingArrangement: { queen: 1 }
          }
        ],
        photoGallery: [
          { name: "Living Room", Photos: ["https://via.placeholder.com/300"] },
          { name: "Kitchen", Photos: ["https://via.placeholder.com/300"] },
          { name: "Exterior", Photos: ["https://via.placeholder.com/300"] }
        ],
        checkinOut: {
          checkin: ["2024-12-11T14:00:00Z"],
          checkout: ["2024-12-12T11:00:00Z"]
        },
        quiteHour: {
          quiteHourStart: ["2024-12-10T23:00:00Z"],
          quiteHourEnd: ["2024-12-11T07:00:00Z"]
        },
        AddInstruction: ["Keep gates closed", "Shower before using the pool"],
        houseRules: {
          petsAllowed: true,
          smokingAllowed: false,
          eventAllowed: true,
          numberOfGuests: 8
        },
        cards: [],
        payoutMethod: "PayPal",
        billingCountry: "Australia",
        ownerEmail: "vibhu@admin.com",
        id: 3
      }
    
      ,
        {
          title: "Oceanfront Bliss",
          internalName: "property_four",
          propertyType: ["Luxury", "Beachfront", "Scenic Views"],
          Address: {
            country: "Maldives",
            houseAndFlat: "Villa 15",
            streetAddress: "Coral Road",
            landmark: "Near Coral Reef Resort",
            district: "Malé Atoll",
            city: "Malé",
            state: "Maldives",
            pin: "20224",
            showLocation: true
          },
          basicDetails: {
            Guests: 4,
            Bedrooms: 2,
            Beds: 3,
            Bathrooms: 2
          },
          amenities: [
            {
              category: "Essentials",
              options: ["Wifi", "Air Conditioning", "Heating"]
            },
            {
              category: "Kitchen & Dining",
              options: ["Fully Equipped Kitchen"]
            },
            {
              category: "Outdoor & Recreation",
              options: ["Private Pool", "Beach Access"]
            }
          ],
          coverPhotos: {
            1: {
              name: "Living Room",
              image: "https://via.placeholder.com/150"
            },
            2: {
              name: "Bedroom",
              image: "https://via.placeholder.com/150"
            },
            cover: {
              name: "Cover Photo",
              image: "https://via.placeholder.com/150"
            }
          },
          description: "Experience tranquility in a private beachfront villa with breathtaking ocean views.",
          price: {
            BaseCharge: 4000,
            ServiceFees: 400,
            PriceBeforeTax: 4400,
            YouEarn: 3600
          },
          availability: {
            minimumNight: 3,
            maximumNight: 10,
            checkinTime: "2024-12-20T15:00:00.000Z"
          },
          bedrooms: [
            {
              id: 1,
              name: "Master Bedroom",
              photos: ["https://via.placeholder.com/150"],
              sleepingArrangement: {
                single: 0,
                double: 1,
                queen: 1,
                king: 0,
                smallDouble: 0,
                bunkBed: 0,
                sofaBed: 0,
                sofa: 0
              }
            },
            {
              id: 2,
              name: "Guest Bedroom",
              photos: ["https://via.placeholder.com/150"],
              sleepingArrangement: {
                single: 2,
                double: 0,
                queen: 0,
                king: 0,
                smallDouble: 0,
                bunkBed: 0,
                sofaBed: 0,
                sofa: 0
              }
            }
          ],
          photoGallery: [
            {
              name: "Pool Area",
              Photos: ["https://via.placeholder.com/150"]
            },
            {
              name: "Beach View",
              Photos: ["https://via.placeholder.com/150"]
            }
          ],
          checkinOut: {
            checkin: ["2024-12-20T15:00:00.000Z"],
            checkout: ["2024-12-30T11:00:00.000Z"]
          },
          quiteHour: {
            quiteHourStart: ["2024-12-19T22:00:00.000Z"],
            quiteHourEnd: ["2024-12-20T07:00:00.000Z"]
          },
          AddInstruction: [
            "Use eco-friendly products during your stay.",
            "Do not disturb marine life in the nearby reef."
          ],
          houseRules: {
            petsAllowed: false,
            maxNoPets: 0,
            smokingAllowed: false,
            commercialPhotography: true,
            eventAllowed: false,
            numberOfGuests: 4
          },
          cards: [],
          payoutMethod: "Bank account",
          billingCountry: "United States",
          ownerEmail: "vibhu@admin.com",
          id: 4
        },
        {
          title: "Forest Retreat",
          internalName: "property_five",
          propertyType: ["Nature", "Adventure", "Wellness"],
          Address: {
            country: "Canada",
            houseAndFlat: "Cabin 23",
            streetAddress: "Evergreen Road",
            landmark: "Near National Park Entrance",
            district: "Ontario",
            city: "Toronto",
            state: "Ontario",
            pin: "M5B 2H1",
            showLocation: true
          },
          basicDetails: {
            Guests: 6,
            Bedrooms: 3,
            Beds: 6,
            Bathrooms: 3
          },
          amenities: [
            {
              category: "Essentials",
              options: ["Wifi", "Heating"]
            },
            {
              category: "Outdoor & Recreation",
              options: ["Hiking Trails", "Firepit", "Hot Tub"]
            },
            {
              category: "Kitchen & Dining",
              options: ["Outdoor BBQ", "Modern Kitchen"]
            }
          ],
          coverPhotos: {
            1: {
              name: "Cabin Front",
              image: "https://via.placeholder.com/150"
            },
            cover: {
              name: "Cover Photo",
              image: "https://via.placeholder.com/150"
            }
          },
          description: "Reconnect with nature in this cozy forest cabin, perfect for adventure seekers and families.",
          price: {
            BaseCharge: 3500,
            ServiceFees: 350,
            PriceBeforeTax: 3850,
            YouEarn: 3200
          },
          availability: {
            minimumNight: 2,
            maximumNight: 14,
            checkinTime: "2024-12-22T16:00:00.000Z"
          },
          bedrooms: [
            {
              id: 1,
              name: "Master Bedroom",
              photos: ["https://via.placeholder.com/150"],
              sleepingArrangement: {
                single: 0,
                double: 0,
                queen: 1,
                king: 0,
                smallDouble: 0,
                bunkBed: 0,
                sofaBed: 0,
                sofa: 0
              }
            },
            {
              id: 2,
              name: "Kids Room",
              photos: ["https://via.placeholder.com/150"],
              sleepingArrangement: {
                single: 4,
                double: 0,
                queen: 0,
                king: 0,
                smallDouble: 0,
                bunkBed: 2,
                sofaBed: 0,
                sofa: 0
              }
            }
          ],
          photoGallery: [
            {
              name: "Living Room",
              Photos: ["https://via.placeholder.com/150"]
            },
            {
              name: "Hot Tub Area",
              Photos: ["https://via.placeholder.com/150"]
            }
          ],
          checkinOut: {
            checkin: ["2024-12-22T16:00:00.000Z"],
            checkout: ["2024-12-29T11:00:00.000Z"]
          },
          quiteHour: {
            quiteHourStart: ["2024-12-21T23:00:00.000Z"],
            quiteHourEnd: ["2024-12-22T07:00:00.000Z"]
          },
          AddInstruction: [
            "Bring your own firewood.",
            "Use designated trails for hiking."
          ],
          houseRules: {
            petsAllowed: true,
            maxNoPets: 2,
            smokingAllowed: false,
            commercialPhotography: true,
            eventAllowed: true,
            numberOfGuests: 6
          },
          cards: [],
          payoutMethod: "PayPal",
          billingCountry: "United States",
          ownerEmail: "vibhu@admin.com",
          id: 5
        }
      
      
  

];


