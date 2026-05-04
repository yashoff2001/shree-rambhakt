import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function RestaurantReservationForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter valid 10-digit number";
    }

    if (!formData.date) newErrors.date = "Date is required";

    if (!formData.time) newErrors.time = "Time is required";

    if (!formData.guestCount) newErrors.guestCount = "Select guests";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.specialRequests.trim()) {
      newErrors.specialRequests = "This field is required";
    }
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstErrorField}"]`)?.focus();
      return;
    }

    emailjs
      .sendForm("ServiceId", "TemplateId", form.current, "PublicKey")
      .then(() => {
        setStatusMessage("Message sent successfully! ✅");
      })
      .catch(() => {
        setStatusMessage("❌ Failed to send. Please try again.");
      });

    e.target.reset();
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    date: "",
    time: "",
    guestCount: "",
    email: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm("ServiceId", "TemplateId", form.current, "PublicKey")
  //       .then(() => {
  //         setStatusMessage("Message sent successfully! ✅");
  //         // Now send the thank you email
  //         emailjs
  //           .send(
  //             "ServiceId",
  //             "TemplateId",
  //             {
  //               user_email: formData.email,
  //               name: formData.name,
  //               phoneNumber: formData.phoneNumber,
  //               date: formData.date,
  //               time: formData.time,
  //               guestCount: formData.guestCount,
  //               email: formData.email,
  //               specialRequests: formData.specialRequests,
  //             },
  //             "PublicKey",
  //           )
  //           .then(() => {
  //             console.log("Thank You email sent.");
  //           })
  //           .catch((error) => {
  //             setStatusMessage("❌ Error sending Thank You email.");
  //             console.log(error);
  //           });
  //       })
  //       .catch((error) => {
  //         setStatusMessage("❌ Failed to send. Please try again.");
  //         console.log(error);
  //       });

  //     e.target.reset();
  //   };

  return (
    <div className="rounded-2xl p-7 bg-white">
      <h2 className="text-[22px] text-slate-800 font-semibold mb-5">
        Make a Reservation
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-3" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Name */}
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between items-end">
              <label htmlFor="name">Full Name</label>
              {errors.name && (
                <span className="text-red-500 text-[10px]">{errors.name}</span>
              )}
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your full Name"
              value={formData.name}
              onChange={handleChange}
              className={`border p-2 rounded-md outline-0 ${
                errors.name ? "border-red-500" : "border-zinc-200"
              }`}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between items-end">
              <label htmlFor="phoneNumber">Phone Number</label>
              {errors.phoneNumber && (
                <span className="text-red-500 text-[10px]">
                  {errors.phoneNumber}
                </span>
              )}
            </div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Your Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`border p-2 rounded-md outline-0 ${
                errors.phoneNumber ? "border-red-500" : "border-zinc-200"
              }`}
              required
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between items-end">
              <label htmlFor="date">Date</label>
              {errors.date && (
                <span className="text-red-500 text-[10px]">{errors.date}</span>
              )}
            </div>
            <input
              type="date"
              id="date"
              name="date"
              className={`p-2 outline-0 rounded-md border px-4 py-2 hover:shadow focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 w-[100%] ${
                errors.date ? "border-red-500" : "border-zinc-200"
              }`}
            />
          </div>

          {/* Time */}
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between items-end">
              <label htmlFor="time">Time</label>
              {errors.time && (
                <span className="text-red-500 text-[10px]">{errors.time}</span>
              )}
            </div>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`border p-2 rounded-md outline-0 backdrop-blur-md ${errors.time ? "border-red-500" : "border-zinc-200"}`}
              required
            >
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
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between items-end">
              <label htmlFor="guestCount">Number of Guests</label>
              {errors.guestCount && (
                <span className="text-red-500 text-[10px]">
                  {errors.guestCount}
                </span>
              )}
            </div>
            <select
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className={`border p-2 rounded-md outline-0 backdrop-blur-md ${errors.guestCount ? "border-red-500" : "border-zinc-200"}`}
              required
            >
              <option value="1 Person">1 Person</option>
              <option value="2 People">2 People</option>
              <option value="3 People">3 People</option>
              <option value="4 people">4 people</option>
              <option value="5 People">5 People</option>
              <option value="6 + People">6 + People</option>
            </select>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between items-end">
              <label htmlFor="email">Email</label>
              {errors.email && (
                <span className="text-red-500 text-[10px]">{errors.email}</span>
              )}
            </div>
            <input
              type="text"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`border p-2 rounded-md outline-0 ${
                errors.email ? "border-red-500" : "border-zinc-200"
              }`}
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-0.5">
          <label htmlFor="specialRequests">Special Requests</label>
          {/* <div className="flex flex-col"> */}
          <textarea
            name="specialRequests"
            placeholder="Any dietary restrictions or special occasions..."
            value={formData.specialRequests}
            onChange={handleChange}
            rows="4"
            className="border p-2 rounded-md outline-0 border-zinc-200"
            //   className={`border p-2 rounded-md outline-0 ${
            //     errors.specialRequests ? "border-red-500" : "border-zinc-200"
            //   }`}
            //   required
          ></textarea>
          {/* {errors.specialRequests && (
              <span className="text-red-500 text-[10px]">{errors.specialRequests}</span>
            )} */}
          {/* </div> */}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-red-500 hover:brightness-104 cursor-pointer transition duration-300 py-3 px-8 rounded-md w-full mb-5 font-semibold text-xl place-self-center"
        >
          Confirm Reservation
        </button>

        {statusMessage && (
          <p className="text-center text-green-600 font-medium">
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default RestaurantReservationForm;
