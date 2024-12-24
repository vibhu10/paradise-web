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
    

    



    // In PropertyController.js
async getPropertyDetails(req, res) {
  try {
    const { title, internalName } = req.query;

    if (!title && !internalName) {
      return res.status(400).json({
        message: 'At least title or internalName is required.',
      });
    }

    // Try to find the property by either title or internalName
    const property = PropertyModel.properties.find((prop) => 
      
      (title && prop.title === title) || (internalName && prop.internalName === internalName)
    );

    if (!property) {
      return res.status(404).json({
        message: 'Property not found.',
      });
    }

    res.status(200).json({
      success: true,
      property,
    });
  } catch (error) {
    console.error('Error fetching property details:', error.message);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
}
// Method to update a property


async updateProperty(req, res) {
  try {
    const { propertyId } = req.params;  // Property ID from route params
    const updatedData = req.body;  // New data for the property
console.log(propertyId,updatedData,"incontroller for update")
    // Retrieve the user's email from JWT payload
    const userEmail = req.user?.email;

    if (!userEmail) {
      return res.status(400).json({ message: 'User email not found in token' });
    }

    // Find the property by ID and check if the user is the owner
    const property = PropertyModel.properties.find(
      (prop) => prop.id === parseInt(propertyId) && prop.ownerEmail === userEmail
    );

    if (!property) {
      return res.status(404).json({ message: 'Property not found or you are not the owner' });
    }

    // Update the property data with the provided information
    Object.assign(property, updatedData);

    // Return a success response with the updated property
    return res.status(200).json({
      message: 'Property updated successfully',
      property,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating property', error: error.message });
  }
}


getPropertyByType = (req, res) => {

  const { type } = req.query;  // Get 'type' from the query string

  const properties = PropertyModel.getPropertyByType(type);  // Filter based on the type
  res.json(properties);  // Send the filtered properties back to the client
};

// advanced filer for property
async getAdvancedFilteredProperties(req, res) {

  const {
    selectedFilters = [],
    selectedAmenities = [],
    selectedPropertyTypes = [],
    priceRange = { min: 0, max: 0 },
    petsAllowed,
    instantBook,
    flexibleCancellation,
    accessibilityFeatures = {},
  } = req.body;

  console.log("Pets Allowed:", petsAllowed, "Property Types:", selectedPropertyTypes);

  let query = {};


  // Price range filter
  if (priceRange.min !== undefined) query.price = { $gte: parseInt(priceRange.min) };
  if (priceRange.max !== undefined) query.price = { ...query.price, $lte: parseInt(priceRange.max) };

  // Array-based filters
  if (selectedFilters.length) query.filters = { $in: selectedFilters };
  if (selectedAmenities.length) query.amenities = { $in: selectedAmenities };
  if (selectedPropertyTypes.length) query.propertyTypes = { $in: selectedPropertyTypes };

  // Boolean filters
  if (petsAllowed !== undefined) query.petsAllowed = petsAllowed;
  if (instantBook !== undefined) query.instantBook = instantBook;
  if (flexibleCancellation !== undefined) query.flexibleCancellation = flexibleCancellation;

  // Accessibility features
  if (accessibilityFeatures) {
    const accessibilityQuery = Object.entries(accessibilityFeatures).reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {}
    );
    if (Object.keys(accessibilityQuery).length) query.accessibilityFeatures = accessibilityQuery;
  }

  try {
    const properties = await PropertyModel.getAdvancedFilteredProperties(query);
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error querying properties:', error);
    res.status(500).send('Internal Server Error');
  }
}

}




  

  