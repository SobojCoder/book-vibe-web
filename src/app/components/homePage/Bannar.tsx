import Image from "next/image";
import React from "react";
import bannarIamge from "@/assets/hero_img.jpg";
const Bannar = () => {
  return (
    <section className="container mx-auto p-20 bg-[#F3F3F3]">
      <div className="grid grid-cols-2 gap-8 items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-[#ffff] mt-8 font-bold ">
            View The List
          </button>
        </div>
        <Image src={bannarIamge} alt=""></Image>
      </div>
    </section>
  );
};

export default Bannar;
