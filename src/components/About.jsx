import React from 'react'
import img2 from '../assets/img2.png'
const About = () => {
  return (
    <> 
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
        <img
          alt=""
          src={img2}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl text-secondary">The unseen of spending three
years at Pixelgrade</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-shade px-12 py-3 text-sm font-normal text-white transition hover:bg-green focus:outline-none focus:ring focus:ring-primary"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default About