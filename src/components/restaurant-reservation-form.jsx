import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function RestaurantReservationForm() {

    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");

    const [formData, setFormData] = useState({
        name : "",
        phoneNumber : "",
        date : "",
        time : "",
        guestCount : "",
        email : "",
        specialRequests : ""
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
                    phoneNumber: formData.phoneNumber,
                    date: formData.date,
                    time: formData.time,
                    guestCount: formData.guestCount,
                    email: formData.email,
                    specialRequests: formData.specialRequests,
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

            <h2 className="text-[22px] text-slate-800 font-semibold mb-5">Make a Reservation</h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-7">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">

                    {/* Name */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="name">Full Name</label>
                        <input  type="text" name="name" placeholder="Your full Name" value={formData.name} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0" required />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input  type="text" name="phoneNumber" placeholder="Enter Your Number" value={formData.phoneNumber} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0" required />
                    </div>

                    {/* Date */}
                    <div className="flex flex-col space-y-1 w-full max-w-xs">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" className="rounded-md border border-gray-300 px-4 py-2 hover:shadow focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 w-[100%]"/>
                    </div>

                    {/* Time */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="time">Time</label>
                        <select name="time" value={formData.time} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0 backdrop-blur-md" required>
                            <option value="">Select Time</option>
                            <option value="12:00PM">12:00 PM</option>
                            <option value="1:00PM">1:00 PM</option>
                            <option value="2:00PM">2:00 PM</option>
                            <option value="7:00PM">7:00 PM</option>
                            <option value="8:00PM">8:00 PM</option>
                            <option value="9:00PM">9:00 PM</option>
                        </select>
                    </div>

                    {/* No. of Guests */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="guestCount">Number of Guests</label>
                        <select name="guestCount" value={formData.guestCount} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0 backdrop-blur-md" required>
                            <option value="1 Person">1 Person</option>
                            <option value="2 People">2 People</option>
                            <option value="3 People">3 People</option>
                            <option value="4 people">4 people</option>
                            <option value="5 People">5 People</option>
                            <option value="6 + People">6 + People</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="email">Email</label>
                        <input  type="text" name="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} className="border border-zinc-200 p-2 rounded-md outline-0" required />
                    </div>

                </div>
                

                {/* Message */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="specialRequests">Special Requests</label>
                    <textarea name="specialRequests" placeholder="Any dietary restrictions or special occasions..." value={formData.specialRequests} onChange={handleChange} rows="4" className="border border-zinc-200 p-2 rounded-md outline-0" required ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="text-white bg-red-500 hover:brightness-104 cursor-pointer transition duration-300 py-3 px-8 rounded-md w-full mb-5 font-semibold text-xl place-self-center">Confirm Reservation</button>

                {statusMessage && (
                    <p className="text-center text-green-600 font-medium">{statusMessage}</p>
                )}

            </form>

        </div>
    );
}

export default RestaurantReservationForm;