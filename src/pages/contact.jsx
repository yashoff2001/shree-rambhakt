import ContactPageImage from '../assets/images/contact-page.jpg'
import ContactDetails from '../components/contact-details';
import ContactForm from '../components/contact-form';

const Contact = () => {
    return (
        <>
            {/* Main Section */}
            <div className="md:h-auto" style={{ backgroundImage: `url(${ContactPageImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-slate-800/85">
                    <div className="container mx-auto">
                        <div className="pt-40 pb-20 px-5">
                            <div className="flex flex-col text-center items-center">
                                <h2 className="p-2 text-5xl font-semibold text-white mb-6">Get in Touch</h2>
                                <p className="text-gray-300/70 mb-6">We're here to answer any questions you may have about our businesses and services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="container mx-auto">

                <div className="pt-40 pb-15 px-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">

                        {/* Contact Form */}
                        <ContactForm />

                        {/* Contact Details */}
                        <ContactDetails />
                        
                    </div>
                
                    <div className="w-full h-[400px]  rounded-xl overflow-hidden shadow-md border border-gray-300">
                        <iframe
                            title="Shree Rambhakt Group Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.8251015517793!2d74.63200250426229!3d25.342697707190105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2363bc9fa4b%3A0x4e9774c80a1b5d8c!2sShri%20Ram%20Bhakta%20Bhojnalaya%20%26%20Juice%20-%20Shake!5e0!3m2!1sen!2sin!4v1754499656491!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            className="w-full h-full"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>

                
            </div>

        </>
    )
};

export default Contact;