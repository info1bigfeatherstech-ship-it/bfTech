import React, { useMemo, useState } from 'react';
import {contactInfo} from '../../data';
import { cssPerfectShape  } from '../../util';
import Socials from '../../components/Socials';
import './Contact.css';
import countries from './ContactData';
const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setResult("Sending....");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "bd31c74f-8bbc-4931-b629-c7a0eab1cf2f");
      formData.append("subject", "New Contact Form Submission");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setResult(data?.message || "Submission failed. Please try again.");
        return;
      }

      if (data?.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setPhone("");
        setSelectedCountry(defaultCountryName);
      } else {
        console.log("Error", data);
        setResult(data?.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.log("Error", err);
      setResult("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  
  const defaultCountryName = useMemo(
    () => countries?.[0]?.name || "India",
    []
  );
  const [selectedCountry, setSelectedCountry] = useState(defaultCountryName);
  const [phone, setPhone] = useState("");

 const handleCountryChange = (e) => {
  const countryName = e.target.value;
  setSelectedCountry(countryName);
  const selected = countries.find((c) => c.name === countryName);

  const code = selected?.code || "";
  setPhone(code + " ");       // Pre-fill code in the phone input
};

  return (
    <section id="contact">
        <div className="container">
            <div className="contact-info-wrapper">
            {contactInfo.map((info,index)=>(
                <div className="contact-info" key={index}>
                    <div className="icon"style={{...cssPerfectShape(70, 70)}}>
                    <info.icon/>
                    </div>
                    <div className="info">
                        <h3>{info.title}</h3> 
                        <p className="description">{info.description}</p>
                        <h4 className="value">{info.value}</h4>
                    </div>
                     </div>
            ))}
            <Socials/> 
            </div>
            <form onSubmit={onSubmit}>
                <div className="top">
                    Get In Touch 
                    <p className="description">
                        Have a project in mind or need expert advice? We're here to discuss!
                        </p>
                </div>
                <div className="middle">
                  <label>Your Full Name</label>
        <input type="text" name="name" placeholder="Enter your name " className="control" required />
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="control"
          required
        />
         <label>Country</label>
        <select
          name="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="control"
        >
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          className="control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Write your message here</label>
       <textarea name="message"  rows="6" placeholder="Enter your message" className="control" required></textarea>
                </div>
                <div className="bottom">
                    <button type="submit" className="btn primary" disabled={isSending}>
                      {isSending ? "Sending..." : "Submit"}
                    </button>
                </div>
            </form>
            <span>{result}</span>
        </div>
    </section>
  )
}


export default Contact