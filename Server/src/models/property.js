export default class PropertyModel {
    constructor({
      type = "",
      title = "",
      name = "",
      price = 0,
      property_type = "",
      photo = "",
      checkInTime = "12:00",
      checkOutTime = "10:00",
      minNights = 1,
      maxNights = 14,
      petsAllowed = false,
      maxPets = 0,
      eventsAllowed = false,
      smokingAllowed = false,
      quietHoursEnabled = true,
      quietHoursStart = "21:00",
      quietHoursEnd = "07:00",
      commercialPhotography = false,
      maxGuests = 4,
      rules = [],
      amenities = [],
      internalName = "",
      description = "",
      instructions = [],
      wifiDetails = { networkName: "", password: "" },
      guideBooks = [],
      cancellationPolicy = "",
      extraFees = { cleaningFee: 0, serviceFee: 0 },
      additionalRules = [],
      locationDetails = {},
      addressDirections = "",
      guestOptions = {},
      addressData = {},
      showLocation = true,
      hostContact = {},
      houseInstructions = [],
      houseManual = ""
    } = {}) {
      // Assign the properties to the object instance
      this.type = type;
      this.title = title;
      this.name = name;
      this.price = price;
      this.property_type = property_type;
      this.photo = photo;
      this.checkInTime = checkInTime;
      this.checkOutTime = checkOutTime;
      this.minNights = minNights;
      this.maxNights = maxNights;
      this.petsAllowed = petsAllowed;
      this.maxPets = maxPets;
      this.eventsAllowed = eventsAllowed;
      this.smokingAllowed = smokingAllowed;
      this.quietHoursEnabled = quietHoursEnabled;
      this.quietHoursStart = quietHoursStart;
      this.quietHoursEnd = quietHoursEnd;
      this.commercialPhotography = commercialPhotography;
      this.maxGuests = maxGuests;
      this.rules = rules;
      this.amenities = amenities;
      this.internalName = internalName;
      this.description = description;
      this.instructions = instructions;
      this.wifiDetails = wifiDetails;
      this.guideBooks = guideBooks;
      this.cancellationPolicy = cancellationPolicy;
      this.extraFees = extraFees;
      this.additionalRules = additionalRules;
      this.locationDetails = locationDetails;
      this.addressDirections = addressDirections;
      this.guestOptions = guestOptions;
      this.addressData = addressData;
      this.showLocation = showLocation;
      this.hostContact = hostContact;
      this.houseInstructions = houseInstructions;
      this.houseManual = houseManual;
    }
  
    // Static method to add a new property to the list
    static addProperty(propertyData) {
      const newProperty = new PropertyModel(propertyData);
      PropertyModel.properties.push(newProperty);
    }

    static allProperty(){
    return properties
    }
  }
  
  // Initialize properties list as a static property
 const properties = [
  {
    "type": "listed",
    "title": "Cozy Urban Loft",
    "name": "Cityscape Loft",
    "price": "1500",
    "property_type": "Loft",
    "photo": "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?cs=srgb&dl=pexels-pixabay-462235.jpg&fm=jpg",
    "checkInTime": "12:00",
    "checkOutTime": "10:00",
    "minNights": "2",
    "maxNights": "14",
    "petsAllowed": "false",
    "maxPets": "0",
    "eventsAllowed": "false",
    "smokingAllowed": "false",
    "quietHoursEnabled": "true",
    "quietHoursStart": "21:00",
    "quietHoursEnd": "07:00",
    "commercialPhotography": "false",
    "maxGuests": "4",
    "rules": "No smoking, No pets, Quiet hours after 9 PM",
    "amenities": ["Wifi", "Air conditioning", "Kitchen", "TV", "Gym"],
    "internalName": "urban loft",
    "description": "Stay in the heart of the city at this cozy loft, perfect for a small group or couple. Enjoy stunning city views, modern amenities, and easy access to restaurants and shops. With a fully equipped kitchen, gym, and smart TV, you'll feel right at home.",
    "instructions": [
      "Please be mindful of neighbors.",
      "No loud music after 9 PM.",
      "Check-in via keyless entry."
    ],
    "wifiDetails": {
      "networkName": "LoftWiFi",
      "password": "City12345"
    },
    "guideBooks": [
      {
        "title": "City Highlights",
        "content": "Don't miss the local museums, shopping districts, and rooftop bars."
      },
      {
        "title": "Best Coffee Spots",
        "content": "Check out the nearby cafes for a perfect cup of coffee."
      }
    ],
    "cancellationPolicy": "Free cancellation within 24 hours of booking. 70% refund up to 5 days before check-in.",
    "extraFees": {
      "cleaningFee": "80",
      "serviceFee": "40"
    },
    "additionalRules": [
      {"No outside guests allowed.":true},
      {"No loud music or parties.":false},
      
    ],
    "locationDetails": {
      "address": "123 Urban Ave, New York, NY 10001, USA",
      "parkingInfo": "Parking available at nearby garage, additional fees apply.",
      "guestEntrance": {
        "stepFreeEntrance": true,
        "entranceWiderThan32Inches": false,
        "accessibleParkingSpot": false,
        "stepFreePathToEntrance": false
      }
    },
    "addressDirections": "Address is 123 Urban Ave, New York, NY 10001. Parking available at nearby garage.",
    "guestOptions": {
      "stepFreeEntrance": true,
      "widerEntrance": false,
      "accessibleParking": false,
      "stepFreePath": false
    },
    "addressData": {
      "country": "United States",
      "flat": "Apt 3B",
      "street": "Urban Ave",
      "landmark": "Near Central Park",
      "district": "Manhattan",
      "city": "New York",
      "state": "NY",
      "pinCode": "10001"
    },
    "showLocation": true,
    "hostContact": {
      "phone": "+1-555-987-6543",
      "email": "host@urbanloft.com"
    },
    "houseInstructions": [
      "Remove shoes upon entry.",
      "Please respect quiet hours.",
      "Trash is located outside the building."
    ],
    "houseManual": "The loft is equipped with everything you need for a comfortable stay. Please make sure to follow house rules and enjoy your time in the city."
  },
  {
    "type": "listed",
    "title": "Secluded Forest Cabin",
    "name": "Tranquil Cabin Retreat",
    "price": "1750",
    "property_type": "Cabin",
    "photo": "https://images.pexels.com/photos/3602023/pexels-photo-3602023.jpeg",
    "checkInTime": "15:00",
    "checkOutTime": "11:00",
    "minNights": "3",
    "maxNights": "7",
    "petsAllowed": "true",
    "maxPets": "2",
    "eventsAllowed": "false",
    "smokingAllowed": "true",
    "quietHoursEnabled": "true",
    "quietHoursStart": "22:00",
    "quietHoursEnd": "08:00",
    "commercialPhotography": "true",
    "maxGuests": "8",
    "rules": "No smoking inside, Quiet hours after 10 PM, Pets allowed with an additional fee.",
    "amenities": ["Fireplace", "Hot tub", "Washing machine", "Wifi", "Grill"],
    "internalName": "forest retreat",
    "description": "Escape to this tranquil forest cabin, surrounded by nature and perfect for a peaceful getaway. With a hot tub, fireplace, and BBQ grill, it's the ultimate retreat for relaxation and outdoor adventure. Enjoy hiking trails and wildlife right outside your door.",
    "instructions": [
      "Check-in instructions will be provided 48 hours before arrival.",
      "Please respect wildlife and keep noise levels low.",
      "Ensure the fireplace is turned off before leaving."
    ],
    "wifiDetails": {
      "networkName": "CabinWifi",
      "password": "Nature2024"
    },
    "guideBooks": [
      {
        "title": "Hiking Trails",
        "content": "Explore nearby trails with varying difficulty levels, perfect for any adventurer."
      },
      {
        "title": "Local Wildlife",
        "content": "Keep an eye out for deer, birds, and other wildlife that frequent the area."
      }
    ],
    "cancellationPolicy": "Full refund up to 1 week before check-in. 50% refund if canceled within 3 days.",
    "extraFees": {
      "cleaningFee": "120",
      "serviceFee": "60",
      "petFee": "50"
    },
    "additionalRules": [
      {"No outside guests allowed.":true},
      {"No loud music or parties.":false},
      
    ],
    "locationDetails": {
      "address": "456 Mountain Rd, Asheville, NC 28801, USA",
      "parkingInfo": "Ample parking available for up to 4 cars.",
      "guestEntrance": {
        "stepFreeEntrance": false,
        "entranceWiderThan32Inches": true,
        "accessibleParkingSpot": false,
        "stepFreePathToEntrance": false
      }
    },
    "addressDirections": "Located at 456 Mountain Rd, Asheville, NC 28801. Ample parking available.",
    "guestOptions": {
      "stepFreeEntrance": false,
      "widerEntrance": true,
      "accessibleParking": false,
      "stepFreePath": false
    },
    "addressData": {
      "country": "United States",
      "flat": "Cabin",
      "street": "Mountain Rd",
      "landmark": "Near Blue Ridge Parkway",
      "district": "Asheville",
      "city": "Asheville",
      "state": "NC",
      "pinCode": "28801"
    },
    "showLocation": true,
    "hostContact": {
      "phone": "+1-555-456-7890",
      "email": "host@cabinretreat.com"
    },
    "houseInstructions": [
      "Please respect the natural surroundings.",
      "No littering outside.",
      "Firepit should be extinguished by 10 PM."
    ],
    "houseManual": "Enjoy a peaceful stay surrounded by nature. Please follow all house rules and ensure you leave the cabin as you found it."
  },
  {
    "type": "inProgress",
    "title": "Luxurious Coastal Villa",
    "name": "Ocean Breeze Villa",
    "price": "3500",
    "property_type": "Villa",
    "photo": "https://images.pexels.com/photos/210262/pexels-photo-210262.jpeg?cs=srgb&dl=pexels-pixabay-210262.jpg&fm=jpg",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "minNights": "5",
    "maxNights": "30",
    "petsAllowed": "false",
    "maxPets": "0",
    "eventsAllowed": "true",
    "smokingAllowed": "false",
    "quietHoursEnabled": "false",
    "quietHoursStart": "23:00",
    "quietHoursEnd": "06:00",
    "commercialPhotography": "true",
    "maxGuests": "10",
    "rules": "No smoking inside, No pets, Quiet hours after 11 PM",
    "amenities": ["Private pool", "Beach access", "BBQ", "Wifi", "Air conditioning"],
    "internalName": "beach villa",
    "description": "This luxurious coastal villa offers stunning ocean views, private beach access, and a beautiful infinity pool. Perfect for larger groups or families, enjoy spacious living areas, outdoor dining, and all the comforts of a luxury home. Host a special event or simply relax by the pool.",
    "instructions": [
      "The pool is available from 7:00 AM to 9:00 PM.",
      "Please clean up after using the BBQ.",
      "No glassware in the pool area."
    ],
    "wifiDetails": {
      "networkName": "VillaWifi",
      "password": "Ocean2024"
    },
    "guideBooks": [
      {
        "title": "Beach Activities",
        "content": "Try kayaking, paddleboarding, or simply relax on the sandy shores."
      },
      {
        "title": "Best Seafood Restaurants",
        "content": "Check out local spots for fresh seafood and oceanfront dining."
      }
    ],
    "cancellationPolicy": "50% refund up to 2 weeks before check-in. No refund within 7 days of check-in.",
    "extraFees": {
      "cleaningFee": "150",
      "serviceFee": "75"
    },
    "additionalRules": [
      "No fireworks or open flames near the villa.",
      "No diving in the shallow pool area.",
      "All outdoor lights must be turned off after 10 PM."
    ],
    "locationDetails": {
      "address": "789 Coastal Dr, Malibu, CA 90265, USA",
      "parkingInfo": "Private parking for up to 6 cars.",
      "guestEntrance": {
        "stepFreeEntrance": true,
        "entranceWiderThan32Inches": true,
        "accessibleParkingSpot": true,
        "stepFreePathToEntrance": true
      }
    },
    "addressDirections": "Located at 789 Coastal Dr, Malibu, CA 90265. Private parking available.",
    "guestOptions": {
      "stepFreeEntrance": true,
      "widerEntrance": true,
      "accessibleParking": true,
      "stepFreePath": true
    },
    "addressData": {
      "country": "United States",
      "flat": "Villa",
      "street": "Coastal Dr",
      "landmark": "Near Malibu Beach",
      "district": "Malibu",
      "city": "Malibu",
      "state": "CA",
      "pinCode": "90265"
    },
    "showLocation": true,
    "hostContact": {
      "phone": "+1-555-111-2222",
      "email": "host@oceanbreezevilla.com"
    },
    "houseInstructions": [
      "Please ensure the pool cover is used at night.",
      "Outdoor furniture must be stored in case of strong winds.",
      "Keep the beach access gate locked when not in use."
    ],
    "houseManual": "This villa offers the ultimate in coastal luxury. Please respect all house rules and enjoy your stay in this stunning setting."
  }
];
