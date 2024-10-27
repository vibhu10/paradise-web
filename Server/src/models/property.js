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
  }
  
  // Initialize properties list as a static property
  PropertyModel.properties = [
    new PropertyModel({
      type: "listed",
      title: "Cozy Urban Loft",
      name: "Cityscape Loft",
      price: 1500,
      property_type: "Loft",
      photo: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?cs=srgb&dl=pexels-pixabay-462235.jpg&fm=jpg",
      checkInTime: "12:00",
      checkOutTime: "10:00",
      minNights: 2,
      maxNights: 14,
      petsAllowed: false,
      maxPets: 0,
      eventsAllowed: false,
      smokingAllowed: false,
      quietHoursEnabled: true,
      quietHoursStart: "21:00",
      quietHoursEnd: "07:00",
      commercialPhotography: false,
      maxGuests: 4,
      rules: ["No smoking", "No pets", "Quiet hours after 9 PM"],
      amenities: ["Wifi", "Air conditioning", "Kitchen", "TV", "Gym"],
      internalName: "urban loft",
      description: "Stay in the heart of the city at this cozy loft, perfect for a small group or couple. Enjoy stunning city views, modern amenities, and easy access to restaurants and shops. With a fully equipped kitchen, gym, and smart TV, you'll feel right at home.",
      instructions: [
        "Please be mindful of neighbors.",
        "No loud music after 9 PM.",
        "Check-in via keyless entry."
      ],
      wifiDetails: {
        networkName: "LoftWiFi",
        password: "City12345"
      },
      guideBooks: [
        {
          title: "City Highlights",
          content: "Don't miss the local museums, shopping districts, and rooftop bars."
        },
        {
          title: "Best Coffee Spots",
          content: "Check out the nearby cafes for a perfect cup of coffee."
        }
      ],
      cancellationPolicy: "Free cancellation within 24 hours of booking. 70% refund up to 5 days before check-in.",
      extraFees: {
        cleaningFee: 80,
        serviceFee: 40
      },
      additionalRules: [
        { rule: "No outside guests allowed.", enforced: true },
        { rule: "No loud music or parties.", enforced: false }
      ],
      locationDetails: {
        address: "123 Urban Ave, New York, NY 10001, USA",
        parkingInfo: "Parking available at nearby garage, additional fees apply.",
        guestEntrance: {
          stepFreeEntrance: true,
          entranceWiderThan32Inches: false,
          accessibleParkingSpot: false,
          stepFreePathToEntrance: false
        }
      },
      addressData: {
        country: "United States",
        flat: "Apt 3B",
        street: "Urban Ave",
        landmark: "Near Central Park",
        district: "Manhattan",
        city: "New York",
        state: "NY",
        pinCode: "10001"
      },
      showLocation: true,
      hostContact: {
        phone: "+1-555-987-6543",
        email: "host@urbanloft.com"
      },
      houseInstructions: [
        "Remove shoes upon entry.",
        "Please respect quiet hours.",
        "Trash is located outside the building."
      ],
      houseManual: "The loft is equipped with everything you need for a comfortable stay. Please make sure to follow house rules and enjoy your time in the city."
    })
  ];
  