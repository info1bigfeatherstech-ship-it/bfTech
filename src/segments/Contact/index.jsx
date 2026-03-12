import React from 'react'
import {useState} from 'react';
import {contactInfo} from '../../data';
import { cssPerfectShape  } from '../../util';
import Socials from '../../components/Socials';
import './Contact.css';
import countries from './ContactData';
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd31c74f-8bbc-4931-b629-c7a0eab1cf2f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  const [selectedCode, setSelectedCode] = useState("+91");
  const [phone, setPhone] = useState("");

 const handleCountryChange = (e) => {
  const selectedCountry = e.target.value;
  const selected = countries.find((c) => c.name === selectedCountry);

  const code = selected?.code || "";
  setSelectedCode(code);      // Store code separately if needed elsewhere
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
         <label>Country</label>
        <select onChange={handleCountryChange} className="control">
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
       <textarea name="message"  rows="6" placeholder="Enter your message" className="control"></textarea>
                </div>
                <div className="bottom">
                    <button type="submit" className="btn primary">Submit</button>
                </div>
            </form>
            <span>{result}</span>
        </div>
    </section>
  )
}


export default Contact