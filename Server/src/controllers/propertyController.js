import PropertyModel from '../models/property.js';

export default class PropertyController {
  constructor() {
    // Initialize an empty array to store properties
    this.properties = PropertyModel.properties || []; // Ensure it starts as an empty array
  }

  // Method to get all properties
  getAllProperties(req, res) {
    const properties=PropertyModel.allProperty();
    res.status(200).send(properties);
    console.log(properties)
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
  addProperty(req, res) {
    const propertyData = req.body;

    // Create a new property instance
    const newProperty = new PropertyModel(
      propertyData.type,
      propertyData.title,
      propertyData.name,
      propertyData.price
    );

    // Assign additional property data
    Object.assign(newProperty, propertyData);

    // Add the new property to the properties array
    this.properties.push(newProperty);

    // Optionally, you may also want to add the property to the static list in PropertyModel
    PropertyModel.addProperty(newProperty);

    res.status(201).json({
      message: 'Property added successfully',
      property: newProperty
    });
  }

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
