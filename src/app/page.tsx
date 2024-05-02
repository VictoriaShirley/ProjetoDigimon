"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonFilter from "@/components/ButtonFilter";
import Card from "@/components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface Digimon {
  name: string;
  img: string;
  level: string;
}

const DigimonApp: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [digimons, setDigimons] = useState<Digimon[]>([]);
  const [allDigimons, setAllDigimons] = useState<Digimon[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Digimon[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchDigimons = async () => {
    try {
      let url = "https://digimon-api.vercel.app/api/digimon";
      if (searchInput) {
        if (searchInput.length === 1) {
          setSearchResults(
            allDigimons.filter((digimon) =>
              digimon.name.toLowerCase().startsWith(searchInput.toLowerCase())
            )
          );
        } else {
          setSearchResults(
            allDigimons.filter((digimon) =>
              digimon.name.toLowerCase().includes(searchInput.toLowerCase())
            )
          );
        }
        if (searchResults.length > 0) {
          setDigimons(searchResults);
        } else {
          setDigimons([]);
        }
      } else if (activeFilter) {
        url = `https://digimon-api.vercel.app/api/digimon/level/${activeFilter}`;
        const response = await axios.get<Digimon[]>(url);
        setDigimons(response.data);
      } else {
        // Se não houver um searchInput ou activeFilter, carregar todos os Digimons
        setDigimons(allDigimons);
      }
    } catch (error) {
      console.error("Error fetching digimons:", error);
    }
  };
  

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
    setActiveFilter("");
  };

  const handleSearchLevelChange = (level: string) => {
    setActiveFilter(level);
    setSearchInput("");
  };

  useEffect(() => {
    fetchAllDigimons();
  }, []);

  useEffect(() => {
    fetchDigimons();
  }, [searchInput, activeFilter]);

  useEffect(() => {
    if (!searchInput) {
      setSearchResults([]);
    } else {
      setSearchResults(
        allDigimons.filter((digimon) =>
          digimon.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  }, [searchInput]);

  const fetchAllDigimons = async () => {
    try {
      const response = await axios.get<Digimon[]>(
        "https://digimon-api.vercel.app/api/digimon"
      );
      setAllDigimons(response.data);
    } catch (error) {
      console.error("Error fetching all digimons:", error);
    }
  };

  return (
    <body>
      <div className="flex flex-col items-center p-4">
        <div className="mb-12 md:mb-24">
          <img
            className="w-48 md:w-60"
            src="./img/logo.svg"
            alt="Logo do Digimon."
          />
        </div>
        <div className="relative w-full lg:w-[64rem] mb-12">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full h-10 px-5 py-2 bg-gray-medium bg-opacity-50 border border-white rounded-2xl placeholder-gray-light text-xl"
            style={{ paddingRight: "2.5rem" }}
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <img
            src="./icons/search.svg"
            alt="Ícone de busca"
            className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-5"
          />
        </div>

        {windowWidth && windowWidth < 1120 ? (
          <div className="mb-12 w-full z-0">
            <Swiper
              spaceBetween={1}
              slidesPerView={8}
              breakpoints={{
                728: {
                  slidesPerView: 5,
                },
                620: {
                  slidesPerView: 4,
                },
                430: {
                  slidesPerView: 3,
                },
                290: {
                  slidesPerView: 2, 
                },
                0: {
                  slidesPerView: 1, 
                },
              }}
              className="w-full"
            >
              <SwiperSlide>
                <ButtonFilter
                  texto="Todos"
                  ativo={!activeFilter}
                  onClick={() => handleSearchLevelChange("")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ButtonFilter
                  texto="Fresh"
                  ativo={activeFilter === "Fresh"}
                  onClick={() => handleSearchLevelChange("Fresh")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ButtonFilter
                  texto="In Traning"
                  ativo={activeFilter === "In Training"}
                  onClick={() => handleSearchLevelChange("In Training")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ButtonFilter
                  texto="Rookie"
                  ativo={activeFilter === "Rookie"}
                  onClick={() => handleSearchLevelChange("Rookie")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ButtonFilter
                  texto="Champion"
                  ativo={activeFilter === "Champion"}
                  onClick={() => handleSearchLevelChange("Champion")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ButtonFilter
                  texto="Mega"
                  ativo={activeFilter === "Mega"}
                  onClick={() => handleSearchLevelChange("Mega")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ButtonFilter
                  texto="Ultimate"
                  ativo={activeFilter === "Ultimate"}
                  onClick={() => handleSearchLevelChange("Ultimate")}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
          <div className="hidden md:block md:space-x-8 mb-12">
            <ButtonFilter
              texto="Todos"
              ativo={!activeFilter}
              onClick={() => handleSearchLevelChange("")}
            />
            <ButtonFilter
              texto="Fresh"
              ativo={activeFilter === "Fresh"}
              onClick={() => handleSearchLevelChange("Fresh")}
            />
            <ButtonFilter
              texto="In Traning"
              ativo={activeFilter === "In Training"}
              onClick={() => handleSearchLevelChange("In Training")}
            />
            <ButtonFilter
              texto="Rookie"
              ativo={activeFilter === "Rookie"}
              onClick={() => handleSearchLevelChange("Rookie")}
            />
            <ButtonFilter
              texto="Champion"
              ativo={activeFilter === "Champion"}
              onClick={() => handleSearchLevelChange("Champion")}
            />
            <ButtonFilter
              texto="Mega"
              ativo={activeFilter === "Mega"}
              onClick={() => handleSearchLevelChange("Mega")}
            />
            <ButtonFilter
              texto="Ultimate"
              ativo={activeFilter === "Ultimate"}
              onClick={() => handleSearchLevelChange("Ultimate")}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:grid-cols-5 lg:gap-7">
          {(searchResults.length > 0 ? searchResults : digimons).map(
            (digimon) => (
              <Card
                key={digimon.name}
                nome={digimon.name}
                img={digimon.img}
                alt={digimon.name}
                level={digimon.level}
              />
            )
          )}
        </div>
      </div>
    </body>
  );
};

export default DigimonApp;
