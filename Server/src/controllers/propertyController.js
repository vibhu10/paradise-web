import PropertyModel from '../models/property.js';

export default class PropertyController {
  constructor() {
    // Initialize an empty array to store properties
    this.properties = PropertyModel.properties || []; // Ensure it starts as an empty array
  }

  // Method to get all properties
  getAllProperties(req, res) {
    const properties=PropertyModel.allProperties()
    res.status(200).send(properties);
    console.log(properties,"comming i geallpro")
  }

  // Method to get filtered properties based on criteria in the request
  getFilteredProperties(req, res) {
    const { type, priceRange, maxGuests } = req.query;

    const filteredProperties = this.properties.filter(property => {
      return (
        (!type || property.type === type) &&
        (!priceRange || (property.price >= priceRange.min && property.price <= priceRange.max)) &&
        (!maxGuests || property.maxGuests >= maxGuests)
      );
    });

    res.json(filteredProperties);
  }

  // Method to add a new property


  addProperty = (req, res) => {
    try {
      // Extract data from the request body
      const propertyData = req.body;
  
      // Validate the incoming data (optional but recommended)
      if (!propertyData.title || !propertyData.propertyName || !propertyData.pricing?.BaseCharge) {
        return res.status(400).json({ message: 'Missing required property fields' });
      }
  
      // Add the property using the static method
      PropertyModel.addProperty(propertyData);
  
      // Retrieve the newly added property (last property in the static array)
      const newProperty = PropertyModel.properties[PropertyModel.properties.length - 1];
  
      // Return success response
      res.status(201).json({
        message: 'Property added successfully',
        property: newProperty, // Respond with the created property
      });
    } catch (error) {
      res.status(500).json({
        message: 'An error occurred while adding the property',
        error: error.message,
      });
    }
  };
  
  
  // Method to rate a property
  rateProperty(req, res) {
    const { propertyId, rating } = req.body;
    const property = this.properties.find(prop => prop.id === propertyId);

    if (property) {
      property.rating = rating;  // Assuming each property has a `rating` field
      res.status(200).json({ message: "Rating updated", property });
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  }
}
