import { useState } from "react";
import pic1 from "../assets/Images/works1.webp";
import pic2 from "../assets/Images/works2.webp";
import pic3 from "../assets/Images/works3.webp";
import pic4 from "../assets/Images/works4.webp";
import pic5 from "../assets/Images/works5.webp";
import TheWorks from "./TheWorks";
import Modal from "../constants/Modal";



export default function WorksPage() {
  const [showModal , setshowModal]= useState( false)

  const [modalContent, setModalContent]= useState("")
 const  showdetails =(content : any)=>{
  setModalContent(content)
  setshowModal(true)
 }
  return (
    <div className="bg-white  flex flex-col w-full py-10 px-5 md:px-10">
      {/* <div className="absolut fixed inset-0 bg-black opacity-40"></div> */}

      <div className="flex flex-col items-center text-primary">
        <p className="font-bold text-xl md:text-3xl ">Works</p>
        <p className="text-xs md:text-base">
          Petromis Energy Limited provides innovative and comprehensive services
          across the oil and gas, renewable energy, metal recycling,
          transportation, and precious stone mining sectors, ensuring
          sustainable and efficient solutions for our clients in West Africa.
        </p>
      </div>
      <div className=" w-full flex flex-col items-center  gap-y-5 my-5 md:grid md:grid-cols-2 lg:grid-cols-3">
<TheWorks
          img={pic1}
          bgcolor="primary"
          sub="OIL & GAS"
          content="We offer a comprehensive range of oil and gas services, focused on the upstream sector in West Africa. Our expertise includes exploration and production, where we employ advanced geological and geophysical techniques to discover and develop new reserves. Our drilling services utilize state-of-the-art technology for efficient well planning and completion. We also specialize in production optimization, using advanced monitoring systems and enhanced recovery methods to maximize output. Our field development services cover the entire lifecycle of oil and gas fields, from appraisal to full-scale production. Additionally, we provide technical consultancy in reservoir and production engineering, ensuring operational efficiency and risk management. Our commitment to health, safety, and environmental management ensures that all operations adhere to the highest standards of safety and sustainability."
          link={() => showdetails("We offer a comprehensive range of oil and gas services, focused on the upstream sector in West Africa. Our expertise includes exploration and production, where we employ advanced geological and geophysical techniques to discover and develop new reserves. Our drilling services utilize state-of-the-art technology for efficient well planning and completion. We also specialize in production optimization, using advanced monitoring systems and enhanced recovery methods to maximize output. Our field development services cover the entire lifecycle of oil and gas fields, from appraisal to full-scale production. Additionally, we provide technical consultancy in reservoir and production engineering, ensuring operational efficiency and risk management. Our commitment to health, safety, and environmental management ensures that all operations adhere to the highest standards of safety and sustainability.")}
        />

        <TheWorks
          img={pic3}
          bgcolor="primary"
          sub="METAL RECYCLING"
          content="We are dedicated to providing top-tier metal recycling services, focusing on the sustainable management of metal resources in the West African region. We offer comprehensive solutions for the collection, processing, and recycling of ferrous and non-ferrous metals. Utilizing advanced technology and industry best practices, our services include scrap metal sorting, cutting, and shredding to ensure high-quality recycling outputs. We are committed to environmental stewardship, reducing the ecological footprint of metal waste, and promoting circular economy principles. Our team of experts ensures that all recycling processes comply with stringent environmental regulations and safety standards, contributing to a cleaner and more sustainable future."
          link={()=> showdetails("We are dedicated to providing top-tier metal recycling services, focusing on the sustainable management of metal resources in the West African region. We offer comprehensive solutions for the collection, processing, and recycling of ferrous and non-ferrous metals. Utilizing advanced technology and industry best practices, our services include scrap metal sorting, cutting, and shredding to ensure high-quality recycling outputs. We are committed to environmental stewardship, reducing the ecological footprint of metal waste, and promoting circular economy principles. Our team of experts ensures that all recycling processes comply with stringent environmental regulations and safety standards, contributing to a cleaner and more sustainable future.")}
        />
        <TheWorks
          img={pic4}
          bgcolor="primary"
          sub="TRANSPORTATION"
          content="We provide reliable and efficient transportation services, specializing in courier and delivery solutions across West Africa. Our services are designed to meet the diverse needs of our clients, offering secure and timely delivery of parcels, documents, and goods. We utilize a modern fleet of vehicles and employ advanced tracking technology to ensure real-time monitoring and prompt delivery. Our dedicated team of logistics professionals is committed to providing exceptional customer service, ensuring that every delivery is handled with care and precision. Whether for urgent courier services or routine deliveries, Petromis Energy Limited ensures that your items reach their destination safely and on time."
          link={()=>showdetails("We provide reliable and efficient transportation services, specializing in courier and delivery solutions across West Africa. Our services are designed to meet the diverse needs of our clients, offering secure and timely delivery of parcels, documents, and goods. We utilize a modern fleet of vehicles and employ advanced tracking technology to ensure real-time monitoring and prompt delivery. Our dedicated team of logistics professionals is committed to providing exceptional customer service, ensuring that every delivery is handled with care and precision. Whether for urgent courier services or routine deliveries, Petromis Energy Limited ensures that your items reach their destination safely and on time.")}
        />

        <TheWorks
          img={pic2}
          bgcolor="primary"
          sub="RENEWABLE ENERGY"
          content="We are committed to advancing the adoption of renewable energy solutions in West Africa. Our renewable energy services encompass the development, implementation, and management of sustainable energy projects, including solar, wind, and biomass. We offer end-to-end solutions, from initial feasibility studies and system design to installation, operation, and maintenance. By leveraging cutting-edge technology and industry best practices, we ensure that our renewable energy projects are efficient, reliable, and environmentally friendly. Our team of experts works closely with clients to tailor solutions that meet their specific energy needs, contributing to a cleaner, more sustainable future for the region."
          link={()=> showdetails("We are committed to advancing the adoption of renewable energy solutions in West Africa. Our renewable energy services encompass the development, implementation, and management of sustainable energy projects, including solar, wind, and biomass. We offer end-to-end solutions, from initial feasibility studies and system design to installation, operation, and maintenance. By leveraging cutting-edge technology and industry best practices, we ensure that our renewable energy projects are efficient, reliable, and environmentally friendly. Our team of experts works closely with clients to tailor solutions that meet their specific energy needs, contributing to a cleaner, more sustainable future for the region.")}
        />
        <TheWorks
          img={pic5}
          bgcolor="primary"
          sub="PRECIOUS STONE MINING"
          content="We excel in providing comprehensive precious stone mining services across West Africa. Our expertise spans the entire mining lifecycle, from exploration and extraction to processing and marketing. We utilize advanced geological survey techniques and cutting-edge mining technology to efficiently and sustainably extract high-quality gemstones. Our commitment to best practices ensures that all operations adhere to strict environmental and safety standards, minimizing impact on the surrounding ecosystem. By partnering with local communities and stakeholders, we promote ethical mining practices and contribute to regional economic development. Petromis Energy Limited is dedicated to delivering superior value and quality in every facet of precious stone mining."
          link={()=>showdetails("We excel in providing comprehensive precious stone mining services across West Africa. Our expertise spans the entire mining lifecycle, from exploration and extraction to processing and marketing. We utilize advanced geological survey techniques and cutting-edge mining technology to efficiently and sustainably extract high-quality gemstones. Our commitment to best practices ensures that all operations adhere to strict environmental and safety standards, minimizing impact on the surrounding ecosystem. By partnering with local communities and stakeholders, we promote ethical mining practices and contribute to regional economic development. Petromis Energy Limited is dedicated to delivering superior value and quality in every facet of precious stone mining.")}
        />
      </div>
      <div className="flex my-5 justify-center">
      <Modal show={showModal} onClose={() => setshowModal(false)} content={modalContent} />
        
      </div>
    </div>
  );
}
