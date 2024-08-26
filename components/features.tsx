import { FaMound } from "react-icons/fa6";
import { RxValue } from "react-icons/rx";
import { SiPrivatedivision } from "react-icons/si";

export default function Features() {
  const items = [
    {
      title: "Our Mission",
      text: "Our mission is to revolutionize the way Unmanned Aerial Vehicles (UAVs) and Ground Control Systems (GCS) communicate by delivering a robust, secure, and efficient communication framework. We are committed to advancing the capabilities of UAV fleets by leveraging innovative encryption technologies and decentralized P2P protocols to create a seamless and secure network.",
      icon: <FaMound />,
    },
    {
      title: "Our Vision",
      text: "We provide a secure communication framework designed for UAV fleets and Ground Control Systems (GCS). Using cutting-edge encryption and decentralized peer-to-peer (P2P) protocols, we ensure real-time communication with unmatched reliability and security.",
      icon: <SiPrivatedivision />,
    },
    {
      title: "Our Vision",
      text: "We are dedicated to delivering a secure and innovative communication framework for UAV fleets and Ground Control Systems (GCS). Our core values—Security First, Innovation, Reliability, Integrity, Collaboration, and Customer-Centricity—drive us to protect data integrity, ensure consistent performance, and stay at the forefront of technological advancements. By leveraging cutting-edge encryption and decentralized peer-to-peer protocols, we offer unmatched reliability and security, empowering our customers to achieve their operational goals with confidence",
      icon: <RxValue />,
    },
  ];
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-800">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Secure Peer-to-Peer UAV Communication.</h2>
            <p className="text-xl text-gray-400">
              Next-gen, encrypted communication for UAV fleets and ground
              control systems.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/*  item */}
            {items.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div className="icon text-purple-600 text-5xl">
                  {item?.icon}
                </div>
                <h4 className="h4 mb-2">{item?.title}</h4>
                <p className="text-lg text-gray-400 text-center">
                  {item?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
