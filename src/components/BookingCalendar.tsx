import React from "react";
// import Button from "./Button";

const BookingCalendar = () => {
  return (
    <section id="contact" className="bg-[#f7e7ce] w-full py-10 px-5 md:px-20">
      {/* Heading: smaller on mobile, large on md+ */}
      <h2 className="font-cabrito text-[#946847] text-[2.4rem] md:text-[7.5rem] leading-tight md:leading-tight">
        Secure Your Spot
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-0 md:mt-14">
        {/* LEFT: Text Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="md:ms-2 font-cabrito text-[#946847] text-lg font-light leading-tight max-w-full md:max-w-[27rem] mt-10 md:mt-16">
            Whether you’re ready to reserve or simply exploring, we’re here to
            guide you through every detail. Book a call with our team to learn
            more about Victoria Village, the investment process, or life in Koh
            Samui.
            <br />
            <br />
            Use the integrated Calendly scheduler to choose a convenient date
            and time that works best for you.
          </p>

          <div className="ms-4 md:ms-2 flex flex-col gap-3 max-w-full md:max-w-[17rem] mt-6 md:mt-10">
            {/* <a href="#" onClick={(e) => e.preventDefault()}>
              <Button variant="primary">Book Your Call Now</Button>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Button variant="secondary">Download Free Brochure</Button>
            </a> */}
          </div>
        </div>

        {/* RIGHT: Calendly Embed */}
        <div className="w-full h-[30rem] md:h-[35rem] bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://calendly.com/rogerthatvivek/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a call"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
