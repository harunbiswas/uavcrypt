import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  const items = [
    {
      name: "John D.",
      post: "Operations Manager",
      text: "The secure communication framework provided by this team has transformed how we manage our UAV fleet. The reliability and security of their system are unparalleled, allowing us to focus on our mission-critical tasks without worrying about data breaches or communication failures.",
      img: TestimonialImage01,
    },
    {
      name: "Sarah K.",
      post: "GCS Technology Lead",
      text: "Implementing their decentralized P2P communication protocols has been a game-changer for our Ground Control Systems. We’ve seen a significant improvement in real-time communication and system resilience, making our operations more efficient and secure than ever before.",
      img: TestimonialImage02,
    },
    {
      name: "Mark L.",
      post: "Chief Security Officer",
      text: "In an industry where security is paramount, their encryption technology gives us the peace of mind we need. The robust and innovative solutions they provide ensure that our UAV fleet’s communications are protected at all times, even in the most challenging environments.",
      img: TestimonialImage03,
    },
  ];
  return (
    <section id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
              >
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image
                      className="rounded-full"
                      src={item?.img}
                      width={48}
                      height={48}
                      alt="Testimonial 01"
                    />
                    <svg
                      className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                      viewBox="0 0 24 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">
                  — {item?.text}
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">{item?.name}</cite>{" "}
                  -{" "}
                  <a
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    {item?.post}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
