import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const MarbleContactForm = () => {

    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");

    const ServiceId = import.meta.env.ServiceId;
    const TemplateId = import.meta.env.TemplateId;
    const PublicKey = import.meta.env.PublicKey;

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        phoneNumber : "",
        service : "",
        message : ""
    });

    const timeFormatter = () => {
        const date = new Date();

        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'p.m.' : 'a.m.';

        hours = hours % 12;
        hours = hours ? hours : 12; // hour '0' should be '12'

        return `${month} ${day}, ${year} ${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    };

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };
    
    const sendEmail = (e) => {

        e.preventDefault();

        const time = timeFormatter();
        console.log("Form submitted at:", time);

        emailjs.sendForm('service_9qjtub9', 'template_sufp2z2', form.current, 'QaWRsxDeRb3IiaXJR')
            .then(() => {
                setStatusMessage("Message sent successfully! ✅");
                // Now send the thank you email
                emailjs.send('service_9qjtub9', 'template_g8lqtj4', {
                    user_email: formData.email,
                    name: formData.name,
                    services: formData.service 
                }, 'QaWRsxDeRb3IiaXJR')
                .then(() => {
                    console.log("Thank You email sent.");
                })
                .catch((error) => {
                    setStatusMessage("❌ Error sending Thank You email.");
                    console.log(error);
                });
            })
            .catch((error) => {
                setStatusMessage("❌ Failed to send. Please try again.");
                console.log(error);
            });

        e.target.reset();
    };

    return (
        <div className="rounded-2xl p-7 bg-white" id='menuSection'>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-7">

                <div className="flex flex-col md:flex-row gap-7">

                    {/* Name */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="name">Full Name</label>
                        <input  type="text" name="name" placeholder="Your full Name" value={formData.name} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0" required />
                    </div>
                    
                    {/* Email */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="email">Email</label>
                        <input  type="text" name="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0" required />
                    </div>

                </div>
                
                {/* Phone Number */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input  type="text" name="phoneNumber" placeholder="Enter Your Number" value={formData.phoneNumber} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0" required />
                </div>
                
                {/* Product */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="service">Product</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0 backdrop-blur-md" required>
                        <option value="">Select a Product</option>
                        <option value="Italian Calacatta">Italian Calacatta</option>
                        <option value="Indian Green Marble">Indian Green Marble</option>
                        <option value="Spanish Black Marquina">Spanish Black Marquina</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="service">Service of Intrest</label>
                    <textarea name="message" placeholder="Describe your problem..." value={formData.message} onChange={handleChange} rows="4" className="border border-zinc-200 p-2 rounded-md outline-0" required ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="text-white bg-yellow-500 hover:brightness-104 cursor-pointer transition duration-300 py-3 px-8 rounded-md w-full mb-5 font-semibold text-xl place-self-center">Submit Enquiry</button>

                {statusMessage && (
                    <p className="text-center text-green-600 font-medium">{statusMessage}</p>
                )}

            </form>

        </div>
    );
};

export default MarbleContactForm;