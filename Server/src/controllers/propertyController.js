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
        console.log(propertyData, "data coming in property controller");

        // Retrieve the user's email from the JWT payload (added by the jwtAuth middleware)
        const userEmail = req.user?.email;

        if (!userEmail) {
            return res.status(400).json({ message: 'User email not found in token' });
        }

        // Embed the user's email in the property data
        propertyData.ownerEmail = userEmail;

        // Validate the incoming data
        // Check if required fields are present
        const missingFields = [];
        if (!propertyData.title) missingFields.push('title');
      
        if (!propertyData.price.BaseCharge
        ) missingFields.push('BaseCharge');

        if (missingFields.length > 0) {
            return res.status(400).json({
                message: 'Missing required property fields',
                missingFields,
            });
        }

        // Add the property using the static method in your model
       
PropertyModel.addProperty(propertyData)
        // Retrieve the newly added property (last property in the static array)
        const newProperty = PropertyModel.properties[PropertyModel.properties.length - 1];

        // Return success response
        res.status(201).json({
            message: 'Property added successfully',
            property: newProperty, // Respond with the created property
        });
    } catch (error) {
        // Catch any unexpected errors
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


  // Fetch all properties by email
  async getPropertiesByEmail(req, res) {
    try {
      const email = req.user.email; // Extract email from JWT token (provided by jwtAuth middleware)
      
      // Use the static method to retrieve properties
      const properties = PropertyModel.getPropertiesByEmail(email);
  
      console.log(properties, "Fetched properties by email");
      return res.status(200).json({ success: true, properties });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Error fetching properties." });
    }
  }
  
    // Edit property by email and propertyId
    
     getPropertyByName = (req, res) => {
      const { internalName, name } = req.query; // Use query parameters for GET request
    console.log(internalName,name,"namereceived")
      // Use the static method from the model to fetch the property
      const property = PropertyModel.getPropertyByName(internalName, name);
    
      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }
    
      return res.status(200).json({ property });
    };
    

    editProperty = (req, res) => {
      try {
        const propertyId = parseInt(req.body.id); // Assuming numeric IDs
        const updatedData = req.body;
        
        console.log("Received data in edit property controller:",propertyId, updatedData); // Log incoming data
    
        if (!propertyId) {
          return res.status(400).json({ message: "Property ID is required" });
        }
    
        if (!updatedData || Object.keys(updatedData).length === 0) {
          return res.status(400).json({ message: "Updated data is required" });
        }
    
        const updatedProperty = PropertyModel.editProperty(propertyId, updatedData);
    console.log(updatedProperty,"data comming after update")
        if (!updatedProperty) {
          return res.status(404).json({ message: "Property not found" });
        }
    
        return res.status(200).json({
          message: "Property updated successfully",
          property: updatedProperty,
        });
      } catch (error) {
        console.error("Error updating property:", error.message);
        return res.status(500).json({ message: "Internal server error" });
      }
    };
    

  }