import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { BsAirplane, BsPerson, BsGem, BsCameraReels, BsPeopleFill, BsBicycle, BsTree, BsHeart, BsCupStraw } from 'react-icons/bs';
import './influencerSetting.css'
export default function InfluencerSettings({ selectedPropertyData, handleSave }) {
  const [settings, setSettings] = useState({
    openToCollaborations: false,
    typesOfCompensation: {
      freeStays: false,
      discounts: false,
      payments: false,
    },
    influencerCategories: [],
    followerCount: '',
    platformPreferences: {
      tiktok: false,
      instagram: false,
      youtube: false,
      facebook: false,
    },
    collaborationType: ''
  });

  const handleToggle = (category) => {
    setSettings(prev => ({
      ...prev,
      influencerCategories: prev.influencerCategories.includes(category)
        ? prev.influencerCategories.filter(c => c !== category)
        : [...prev.influencerCategories, category]
    }));
  };

  const handleSaveClick = () => {
    handleSave(settings);
  };

  return (
    <div className="influencerSettings-hostlogin">
      <Form>
        <Form.Group>
          <Form.Label>Are you open to influencer collaborations?</Form.Label>
          <Form.Check
           style={{accentColor: "#198E78",}}
            type="radio"
            label="Yes"
            checked={settings.openToCollaborations}
            onChange={() => setSettings({ ...settings, openToCollaborations: true })}
          />
          <Form.Check
            style={{accentColor: "#198E78"}}
            type="radio"
            label="No"
            checked={!settings.openToCollaborations}
            onChange={() => setSettings({ ...settings, openToCollaborations: false })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Types of Compensation</Form.Label>
          <Form.Check 
            style={{accentColor: "#198E78"}}
            type="checkbox"
            label="Free Stays"
            checked={settings.typesOfCompensation.freeStays}
            onChange={() =>
              setSettings({
                ...settings,
                typesOfCompensation: {
                  ...settings.typesOfCompensation,
                  freeStays: !settings.typesOfCompensation.freeStays
                }
              })
            }
          />
          <Form.Check
          style={{accentColor: "#198E78"}}
            type="checkbox"
            label="Discounts"
            checked={settings.typesOfCompensation.discounts}
            onChange={() =>
              setSettings({
                ...settings,
                typesOfCompensation: {
                  ...settings.typesOfCompensation,
                  discounts: !settings.typesOfCompensation.discounts
                }
              })
            }
          />
          <Form.Check
            type="checkbox"
            label="Payments"
            checked={settings.typesOfCompensation.payments}
            onChange={() =>
              setSettings({
                ...settings,
                typesOfCompensation: {
                  ...settings.typesOfCompensation,
                  payments: !settings.typesOfCompensation.payments
                }
              })
            }
          />
        </Form.Group>

        <Form.Group className='outerbox-influencer-categories'>
          <Form.Label>Influencer Categories</Form.Label>
          <Row>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Travel')}><BsAirplane /> Travel</Button></Col>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Lifestyle')}><BsPerson /> Lifestyle</Button></Col>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Luxury')}><BsGem /> Luxury</Button></Col>
          </Row>
          <Row>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Adventure')}><BsBicycle /> Adventure</Button></Col>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Family')}><BsPeopleFill /> Family</Button></Col>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Outdoor')}><BsTree /> Outdoor</Button></Col>
          </Row>
          <Row>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Food')}><BsCupStraw /> Food/Beverage</Button></Col>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Wellness')}><BsHeart /> Wellness</Button></Col>
            <Col><Button variant="outline-primary" onClick={() => handleToggle('Celebrities')}><BsCameraReels /> Celebrities</Button></Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Label>Minimum Follower Count</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Type in amount"
              value={settings.followerCount}
              onChange={(e) => setSettings({ ...settings, followerCount: e.target.value })}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Label>Platform Preferences</Form.Label>
          <Form.Check
            type="checkbox"
            label="TikTok"
            checked={settings.platformPreferences.tiktok}
            onChange={() =>
              setSettings({
                ...settings,
                platformPreferences: {
                  ...settings.platformPreferences,
                  tiktok: !settings.platformPreferences.tiktok
                }
              })
            }
          />
          <Form.Check
            type="checkbox"
            label="Instagram"
            checked={settings.platformPreferences.instagram}
            onChange={() =>
              setSettings({
                ...settings,
                platformPreferences: {
                  ...settings.platformPreferences,
                  instagram: !settings.platformPreferences.instagram
                }
              })
            }
          />
          <Form.Check
            type="checkbox"
            label="YouTube"
            checked={settings.platformPreferences.youtube}
            onChange={() =>
              setSettings({
                ...settings,
                platformPreferences: {
                  ...settings.platformPreferences,
                  youtube: !settings.platformPreferences.youtube
                }
              })
            }
          />
          <Form.Check
            type="checkbox"
            label="Facebook"
            checked={settings.platformPreferences.facebook}
            onChange={() =>
              setSettings({
                ...settings,
                platformPreferences: {
                  ...settings.platformPreferences,
                  facebook: !settings.platformPreferences.facebook
                }
              })
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Collaboration Type</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe briefly what you're looking for"
            value={settings.collaborationType}
            onChange={(e) => setSettings({ ...settings, collaborationType: e.target.value })}
          />
        </Form.Group>

        <Button  style={{backgroundColor:" #198E78",marginTop:"10px"}}variant="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Form>
    </div>
  );
}
