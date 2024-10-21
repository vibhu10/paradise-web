import './check-in-guide-css/house-rules.css';
import { useState, useEffect } from 'react';

export default function HouseRules({ onSave, selectedPropertyData }) {
    const [formData, setFormData] = useState({
        petsAllowed: false,
        maxPets: 1,
        eventsAllowed: false,
        smokingAllowed: false,
        quietHoursStart: '11:00 pm',
        quietHoursEnd: '11:00 am',
        commercialPhotographyAllowed: false,
        numberOfGuests: 1,
        checkInTime: '11:00 pm',
        checkOutTime: '11:00 am',
        noShoes: false,
        noSmokingInside: false,
        additionalRules: []
    });

    // Initialize formData with selectedPropertyData when the component mounts
    useEffect(() => {
        if (selectedPropertyData) {
            setFormData({
                ...formData,
                petsAllowed: selectedPropertyData.petsAllowed || false,
                maxPets: selectedPropertyData.maxPets || 1,
                eventsAllowed: selectedPropertyData.eventsAllowed || false,
                smokingAllowed: selectedPropertyData.smokingAllowed || false,
                quietHoursStart: selectedPropertyData.quietHoursStart || '11:00 pm',
                quietHoursEnd: selectedPropertyData.quietHoursEnd || '11:00 am',
                commercialPhotographyAllowed: selectedPropertyData.commercialPhotographyAllowed || false,
                numberOfGuests: selectedPropertyData.numberOfGuests || 1,
                checkInTime: selectedPropertyData.checkInTime || '11:00 pm',
                checkOutTime: selectedPropertyData.checkOutTime || '11:00 am',
                noShoes: selectedPropertyData.noShoes || false,
                noSmokingInside: selectedPropertyData.noSmokingInside || false,
                additionalRules: selectedPropertyData.additionalRules || []
            });
        }
    }, [selectedPropertyData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAdditionalRuleChange = (index, value) => {
        const updatedRules = [...formData.additionalRules];
        updatedRules[index].value = value;
        setFormData((prev) => ({
            ...prev,
            additionalRules: updatedRules
        }));
    };

    const handleAddRule = () => {
        setFormData((prev) => ({
            ...prev,
            additionalRules: [
                ...prev.additionalRules,
                { label: '', type: 'text', value: '' } // Default to text input
            ]
        }));
    };

    const handleSave = () => {
        onSave(formData);
    };

    return (
        <div className="house-rules-container">
            <h3>House Rules</h3>
            <p>Guests are expected to follow your rules and may be removed from Paradise if they don't.</p>

            {/* Existing fields */}
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
                       
                        <input style={{border:"none", fontWeight:600}}
                            type="text"
                            value={rule}
                            placeholder={rule}
                            onChange={(e) => handleAdditionalRuleChange(index, e.target.value)}
                        />
                    </label>
                </div>
            ))}

            <button type="button" style={{type:"block",background:"white",color:"black", border:"1px solid black"}} onClick={handleAddRule}>Add More Rules</button>
            <div>

            <button style={{color:"white",background:"#198E78"}}onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
