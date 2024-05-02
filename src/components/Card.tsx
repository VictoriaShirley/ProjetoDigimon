"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

interface CardProps {
  nome: string;
  img: string;
  alt: string;
  level: string; 
}

const Card: React.FC<CardProps> = ({ nome, img, alt, level }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center w-full md:w-52 h-90 md:h-70 p-4 mb-2 md:mb-0  text-xl text-white bg-gray-medium bg-opacity-50 border border-white rounded-xl font-doppio space-y-4">
      <div>{nome}</div>
      <img src={img} alt={alt} className="w-42 h-42 rounded-2xl" />
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="w-32 h-10 text-white bg-blue font-dosis rounded-3xl hover:scale-105"
      >
        Ver detalhes
      </button>

      <Dialog
        className="fixed inset-0 flex items-center justify-center backdrop-blur-lg"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className="p-4 w-[18rem] h-auto md:w-[30rem] text-white bg-gray-light border border-white rounded-xl font-inter relative z-20">
        <div className="flex justify-between items-center mb-4">
            <div className="text-blue font-bold text-md md:text-xl uppercase">
              {nome}
            </div>
            <img
              src="./icons/x-circle.svg"
              alt="Close"
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
          

            <div className="relative space-y-40 md:space-y-52 mt-4">
              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={alt}
                  className="absolute w-[12rem] h-[12rem] md:w-[16rem] md:h-[16rem] rounded-2xl drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col items-center w-[16rem] md:w-[28rem] bg-white rounded-2xl p-6 z-10 space-y-1 md:space-y-2 h-auto">
                <div className="flex flex-row items-center mt-4 md:mt-8">
                  <div className="bg-blue rounded-full w-2 h-2 md:w-3 md:h-3 flex-shrink-0"></div>
                  <div className="text-gray-dark text-[12px] md:text-[px] md:text-lg ml-3">{level}</div>
                </div>
                <span className="text-gray-dark text-[12px] md:text-[16px] text-justify font-medium">
                  <strong className="text-gray-dark">Descrição:</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscingelit. Integer nulla eros, pulvinar id
                  magna sed, sagittis tempuselit. Nulla lacinia laoreet magna
                  quis maximus. Morbi non arcuullamcorper justo commodo feugiat
                  a id tellus. Ut idscelerisque urna. In eu nunc venenatis,
                  lobortis ipsumvitae, sagittis quam.
                </span>
              </div>
            </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Card;
