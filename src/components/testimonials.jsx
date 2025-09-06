import Carousel from "./carousel";

function Testimonials() {

  return (
    <>
      {/* Testimonials Section Home Page */}
      <div className="bg-[url(./assets/images/testimonial.png)] bg-no-repeat bg-center bg-cover py-5 md:py-10 flex items-center">

        <div className="py-15 lg:py-20 px-5 w-full">

          <div className="flex flex-col gap-2 items-center text-center mb-6 text-white">
            <p className="p-2 rounded-full w-[fit-content] bg-gray-300/10 px-5">Client Testimonials</p>

            <h2 className="p-2 text-4xl font-semibold">What Our Clients Say</h2>

            <p className="lg:w-[40%]">Our commitment to excellence and quality has earned us the trust and appreciation of our valued clients across all our business segments.</p>
          </div>

          <div className="">
            <Carousel />
          </div>


        </div>
      </div>
    </>
  )
}

export default Testimonials;