const testimonials = [
  {
    name: "Samantha H.",
    message:
      "Absolutely thrilled with my tattoo experience! From the initial consultation to the final touch-up, the artist demonstrated incredible skill and attention to detail. The design came out even better than I imagined, and the atmosphere of the studio was warm and welcoming. Highly recommend!",
  },
  {
    name: "Michael B.",
    message:
      "My tattoo exceeded all expectations! The artist took my vague idea and transformed it into a stunning piece of art. Not only was the execution flawless, but the studio's hygiene standards were top-notch, making me feel comfortable throughout the process. I couldn't be happier with the result!",
  },
  {
    name: "Emily S.",
    message:
      "Incredible talent and professionalism! I'm amazed by the intricate linework and shading in my tattoo. The artist's creativity truly shines through in their work. Plus, they were patient and accommodating, ensuring that every detail was perfect. I'm already planning my next piece with them!",
  },
  {
    name: "Daniel W.",
    message:
      "Absolutely in love with my new tattoo! The artist's mastery of color blew me away—it's vibrant and eye-catching. They listened attentively to my ideas and offered valuable suggestions to enhance the design. The entire experience was seamless, and I'm proud to wear their artwork on my skin.",
  },
  {
    name: "Olivia M.",
    message:
      "An unforgettable tattoo experience from start to finish! The artist's passion for their craft was evident in every stroke. They took the time to understand my vision and brought it to life with precision and creativity. The studio's relaxed atmosphere made the process enjoyable, and I'm thrilled with the final result. Highly recommend this talented artist to anyone looking for a unique and meaningful tattoo!",
  },
  {
    name: "Benjamin K.",
    message:
      "I'm absolutely blown away by my tattoo! The artist's attention to detail and commitment to perfection resulted in a piece of art that exceeded all my expectations. The entire process was smooth and enjoyable, and the studio's welcoming atmosphere made me feel right at home. I can't wait to show off my new ink!",
  },
]

export default function Testimonials() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col items-center justify-center p-8">
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-bold mb-4">430+ Happy Customers</h2>
          <p className="italic">They never thought it was a mistake.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-lg shadow-lg"
            >
              <p className="text-gray-800 mb-4 text-sm md:text-base">
                {testimonial.message}
              </p>
              <div className="border mb-4"></div>
              <p className="text-gray-800 font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
