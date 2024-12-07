import './house-rules.css';
import { useState, useEffect } from 'react';

export default function HouseRules({ onSave, selectedPropertyData }) {
    const [formData, setFormData] = useState({
        propertyId: null, // Add propertyId to the state
        petsAllowed: false,
        maxPets: 1,
        eventsAllowed: false,
        smokingAllowed: false,
        quietHoursStart: '23:00', // Default fallback values in 24-hour format
        quietHoursEnd: '11:00',
        commercialPhotographyAllowed: false,
        numberOfGuests: 1,
        checkInTime: '23:00',
        checkOutTime: '11:00',
        noShoes: false,
        noSmokingInside: false,
        additionalRules: [],
    });

    // Initialize formData with selectedPropertyData when the component mounts
    useEffect(() => {
        if (selectedPropertyData) {
            setFormData({
                ...formData,
                propertyId: selectedPropertyData?.id || null, // Set the property ID
                petsAllowed: selectedPropertyData?.houseRules?.petsAllowed || false,
                maxPets: selectedPropertyData?.
                maxPets
                || 1,
                eventsAllowed: selectedPropertyData?.houseRules?.eventAllowed || false,
                smokingAllowed: selectedPropertyData?.houseRules?.smokingAllowed || false,
                commercialPhotographyAllowed: selectedPropertyData?.houseRules?.commercialPhotography || false,
                numberOfGuests: selectedPropertyData?.houseRules?.numberOfGuests || 1,
                quietHoursStart: selectedPropertyData?.quiteHour?.
                quiteHourStart?.slice(11, 16) || '23:00', // Extract time part
                quietHoursEnd: selectedPropertyData?.quiteHour?.quiteHourEnd?.slice(11, 16) || '11:00', // Extract time part
                checkInTime: selectedPropertyData?.checkinOut?.checkin?.[0]?.slice(11, 16) || '23:00', // Extract check-in time
                checkOutTime: selectedPropertyData?.checkinOut?.checkout?.[0]?.slice(11, 16) || '11:00', // Extract check-out time
                additionalRules: selectedPropertyData?.houseRules?.additionalRules || [],
            });
        }
    }, [selectedPropertyData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleAdditionalRuleChange = (index, value) => {
        const updatedRules = [...formData.additionalRules];
        updatedRules[index] = value;
        setFormData((prev) => ({
            ...prev,
            additionalRules: updatedRules,
        }));
    };

    const handleAddRule = () => {
        setFormData((prev) => ({
            ...prev,
            additionalRules: [...prev.additionalRules, ''], // Add a new empty string for the rule value
        }));
    };

    const handleSave = () => {
        onSave(formData); // Now includes the propertyId
    };

    return (
        <div className="house-rules-container">
            <h3>House Rules</h3>
            <p>Guests are expected to follow your rules and may be removed if they don't.</p>

            <label>
                Pets allowed
                <input
                    type="checkbox"
                    name="petsAllowed"
                    checked={formData.petsAllowed}
                    onChange={handleChange}
                />
            </label>
            {formData.petsAllowed && (
                <div>
                    <label>
                        Maximum number of pets allowed
                        <input
                            type="number"
                            name="maxPets"
                            value={formData.maxPets}
                            onChange={handleChange}
                            min="1"
                        />
                    </label>
                </div>
            )}

            <label>
                Events allowed
                <input
                    type="checkbox"
                    name="eventsAllowed"
                    checked={formData.eventsAllowed}
                    onChange={handleChange}
                />
            </label>

            <label>
                Smoking, vaping, e-cigarettes allowed
                <input
                    type="checkbox"
                    name="smokingAllowed"
                    checked={formData.smokingAllowed}
                    onChange={handleChange}
                />
            </label>

            <div className="quiet-hours">
                <label>
                    Quiet hours
                    <input
                        type="time"
                        name="quietHoursStart"
                        value={formData.quietHoursStart}
                        onChange={handleChange}
                    />
                    to
                    <input
                        type="time"
                        name="quietHoursEnd"
                        value={formData.quietHoursEnd}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <label>
                Commercial photography and filming allowed
                <input
                    type="checkbox"
                    name="commercialPhotographyAllowed"
                    checked={formData.commercialPhotographyAllowed}
                    onChange={handleChange}
                />
            </label>

            <label>
                Number of guests
                <input
                    type="number"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    min="1"
                />
            </label>

            <div className="check-in-out">
                <label>
                    Check-in time
                    <input
                        type="time"
                        name="checkInTime"
                        value={formData.checkInTime}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Checkout time
                    <input
                        type="time"
                        name="checkOutTime"
                        value={formData.checkOutTime}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <h4>Additional Rules</h4>
            {formData.additionalRules.map((rule, index) => (
                <div key={index} className="additional-rule">
                    <label>
                        <input
                            type="text"
                            value={rule}
                            placeholder={`Rule ${index + 1}`}
                            onChange={(e) => handleAdditionalRuleChange(index, e.target.value)}
                        />
                    </label>
                </div>
            ))}

            <button
                type="button"
                style={{ display: 'block', background: 'white', color: 'black', border: '1px solid black' }}
                onClick={handleAddRule}
            >
                Add More Rules
            </button>

            <div>
                <button
                    style={{ color: 'white', background: '#198E78' }}
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
}
