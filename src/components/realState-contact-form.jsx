import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function RealStateContactForm() {

    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");

    const ServiceId = import.meta.env.ServiceId;
    const TemplateId = import.meta.env.TemplateId;
    const PublicKey = import.meta.env.PublicKey;

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        phoneNumber : "",
        propertyType : "",
        budget : "",
        requirement : "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };
    
    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('ServiceId', 'TemplateId', form.current, 'PublicKey')
            .then(() => {
                setStatusMessage("Message sent successfully! ✅");
                // Now send the thank you email
                emailjs.send('ServiceId', 'TemplateId', {
                    user_email: formData.email,
                    name: formData.name,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    propertyType: formData.propertyType,
                    budget: formData.budget,
                    requirement: formData.requirement,
                }, 'PublicKey')
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
        <div className="rounded-2xl p-7 bg-white">

            <h2 className="text-[22px] text-slate-800 font-semibold mb-5">Property Inquiry Form</h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-7">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">

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

                    {/* Phone Number */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input  type="text" name="phoneNumber" placeholder="Enter Your Number" value={formData.phoneNumber} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0" required />
                    </div>

                    {/* Property Type */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="propertyType">Property Type</label>
                        <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0 backdrop-blur-md" required>
                            <option value="Select property type">Select property type</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="budget"></label>
                        <select name="budget" value={formData.budget} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0 backdrop-blur-md" required>
                            <option value="Select budget range">Select budget range</option>
                            <option value="1Cr-2Cr">&#8377;1 Cr - &#8377;2 Cr </option>
                            <option value="2Cr-5Cr">&#8377;2 Cr - &#8377;5 Cr</option>
                            <option value="5Cr-10Cr">&#8377;5 Cr - &#8377;10 Cr</option>
                            <option value="10Cr+">Above &#8377;10  Cr</option>
                        </select>
                    </div>

                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="requirement">Your Requirements</label>
                    <textarea name="requirement" placeholder="Tell us about your specific requirements, preferred locations, etc." typeof="text" value={formData.message} onChange={handleChange} rows="4" className="border border-zinc-200 p-2 rounded-md outline-0" required ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="text-white bg-slate-700 hover:brightness-104 cursor-pointer transition duration-300 py-3 px-8 rounded-md w-full mb-5 font-semibold text-xl place-self-center">Submit Enquiry</button>

                {statusMessage && (
                    <p className="text-center text-green-600 font-medium">{statusMessage}</p>
                )}

            </form>

        </div>
    );
}

export default RealStateContactForm;