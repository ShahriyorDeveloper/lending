"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { HiMenuAlt2 } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import bino from "../../../public/images/bino.png";
import headerHome from "../../../public/images/chamadon.png";
import moshina from "../../../public/images/moshina.png";
import savat from "../../../public/images/savat.png";
import uy from "../../../public/images/uy.png";
import down from "../../../public/svgs/down.svg";
import Logo from "../../../public/svgs/logo.svg";
import LocalSwitcher from "../local-switcher";

const Header = () => {
  const t = useTranslations();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Toggle menu function
  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className={`w-full ${isMenuOpen ? "bg-white" : null}`}>
        <div className="max-sm:hidden w-[90%] m-auto flex items-center h-[73px] justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center flex-wrap">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="px-5 py-3 hover:bg-transparent bg-transparent border-none text-nav_link font-semibold text-[20px] leading-6"
                >
                  {t("nav_titles.title1")} <Image src={down} alt="down" className="" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[1300px] mx-auto rounded-[24px] p-8 mt-3">
                <div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[32px] leading-10 mb-8">
                      {t("popover_headings.title1")}
                    </h2>
                    <div className="grid grid-cols-4 gap-x-[24px]">
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            {t("popover_block1.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block1.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block1.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block1.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src={uy} alt="moshina" className="mr-[20px]" />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block1.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block1.description3")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[32px] leading-10 mb-8 mt-[48px]">
                      {t("popover_headings.title2")}
                    </h2>
                    <div className="grid grid-cols-4 gap-x-[24px] gap-y-[32px]">
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block2.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block2.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src={uy} alt="moshina" className="mr-[20px]" />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block2.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block2.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block2.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block2.description3")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block2.title4")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block2.description4")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src={moshina} alt="moshina" className="mr-[20px]" />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block2.title5")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block2.description5")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src={uy} alt="moshina" className="mr-[20px]" />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block2.title6")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block2.description6")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                             {t("popover_block2.title7")}
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            
                             {t("popover_block2.description7")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[32px] leading-10 mb-8 mt-[48px]">
                      {t("popover_headings.title3")}
                    </h2>
                    <div className="grid grid-cols-4 gap-x-[24px] gap-y-[32px]">
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src={uy} alt="moshina" className="mr-[20px]" />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[20px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src={uy} alt="moshina" className="mr-[20px]" />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src={uy} alt="moshina" className="mr-[20px]" />
                        <div>
                          <h3 className="text-nav_link font-medium text-[20px] leading-[28px]">
                            Information Portal
                          </h3>
                          <p className="text-nav_link font-medium text-[16px] leading-[24px]">
                            Stay updated on events in culture, <br />{" "}
                            entertainment, and leisure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Link
              href="/"
              className="px-5 py-3 text-nav_link font-semibold text-[20px] leading-6"
            >
              {t("nav_titles.title2")}
            </Link>
            <Link
              href="/"
              className="pl-5 pr-10 py-3 text-nav_link font-semibold text-[20px] leading-6"
            >
               {t("nav_titles.title3")}
            </Link>
            <LocalSwitcher />
            <button className="ml-6 text-white font-medium w-[108px] text-[20px] leading-6 h-[48px] rounded-[12px] bg-nav_button">
              {t("registrationBtn.title")}
            </button>
          </div>
        </div>

        {/* mobile */}
        <div className="hidden w-[90%] m-auto max-sm:flex items-center h-[73px] justify-between">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <GiCancel className="w-5 h-5" />
            ) : (
              <HiMenuAlt2 className="w-5 h-5" />
            )}
          </button>

          <Link href="/">
            <Image src={Logo} alt="logo" className="w-[73] h-[24]" />
          </Link>

          <button className="text-white font-medium w-[74px] text-[14px] leading-6 h-[32px] rounded-[10px] bg-nav_button">
            {t("registrationBtn.title")}
          </button>
        </div>
        {isMenuOpen ? (
          <div className="flex flex-col absolute top-[70px] left-[18px] lg:hidden mt-3 p-4 rounded-[20px] mx-auto w-[92%] bg-white overflow-visible">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex justify-between hover:bg-transparent bg-transparent border-none text-nav_link font-semibold text-[14px] leading-4">
                {t("nav_titles.title1")} <Image src={down} alt="down" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[370px] mx-auto rounded-[24px] p-3 mt-3">
                <div>
                  <div className="h-[260px]">
                    <h2 className="text-nav_link font-normal text-[18px] leading-7">
                      {t("popover_headings.title1")}
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex items-center mt-3">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block1.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block1.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block1.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block1.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="moshina" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block1.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block1.description3")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[18px] leading-7 mt-[48px]">
                      {t("popover_headings.title2")}
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex items-center mt-3">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="moshina" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description3")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title4")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description4")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={moshina}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title5")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description5")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image src={uy} alt="moshina" className="mr-[12px]" />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title6")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description6")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={savat}
                          alt="moshina"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block2.title7")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block2.description7")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-nav_link font-normal text-[18px] leading-7 mt-[48px]">
                      {t("popover_headings.title3")}
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex items-center mt-3">
                        <Image
                          src={uy}
                          alt="uy"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title1")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description1")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={uy}
                          alt="uy"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title2")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description2")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={uy}
                          alt="uy"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title3")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description3")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={uy}
                          alt="uy"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title4")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description4")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={uy}
                          alt="uy"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title5")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description5")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={uy}
                          alt="uy"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title6")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description6")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={uy}
                          alt="uy"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title7")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description7")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <Image
                          src={uy}
                          alt="uy"
                          className="mr-[12px]"
                        />
                        <div>
                          <h3 className="text-nav_link font-normal text-[18px] leading-[20px]">
                            {t("popover_block3.title8")}
                          </h3>
                          <p className="text-nav_link font-medium text-[13px] leading-[14px] mt-2">
                            {t("popover_block3.description8")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Link
              href="/"
              className="mt-6 text-nav_link font-semibold text-[14px] leading-4"
            >
              {t("nav_titles.title2")}
            </Link>
            <Link
              href="/"
              className="mt-6 mb-10 text-nav_link font-semibold text-[14px] leading-4"
            >
              {t("nav_titles.title3")}
            </Link>
            <LocalSwitcher />
          </div>
        ) : null}
      </nav>

      <div className="lg:grid grid-cols-2 w-[90%] m-auto mt-3.5 gap-x-[32px] max-sm:gap-x-[16px]">
        <div className="bg-gradient-to-bl flex flex-col justify-between from-headerBlock to-headerBlock1 rounded-[32px] max-sm:min-h-[400px]">
          <div className="p-8">
            <h1 className="leading-[48.25px] text-[40px] text-header_h1_color font-normal max-sm:text-[24px] max-sm:leading-[24px]">
              {t("headerBlock1.title")}
            </h1>
            <p className="leading-[32px] text-[24px] text-white font-medium mt-1 max-sm:text-[16px] max-sm:leading-[16px]">
              {t("headerBlock1.description")}
            </p>
          </div>
          <Image
            src={headerHome}
            alt="home img"
            className="max-sm:w-[300px] max-sm:h-[300px]"
          />
        </div>
        <div className="">
          <div className="bg-headerBlock2 rounded-[32px] max-sm:mt-[12px]">
            <div className="pt-6 pl-6 pr-6">
              <h2 className="leading-40 text-header_h1_color text-[32px] font-normal max-sm:text-[24px] max-sm:leading-[24px]">
                {t("headerBlock2.title")}
              </h2>
              <p className="leading-[32px] text-white font-medium text-[20px] mt-[3px] max-sm:text-[16px] max-sm:leading-[16px]">
                {t("headerBlock2.description")}
              </p>
            </div>
            <Image
              src={bino}
              alt="travel_img"
              className="rounded-b-[32px] w-full"
            />
          </div>
          <div className="bg-headerBlock3 max-sm:mt-[12px] mt-[32px] rounded-[32px] p-4 h-[404px] max-sm:h-[250px]">
            <h2 className="leading-40 text-header_h1_color text-[32px] font-normal max-sm:text-[24px] max-sm:leading-[24px]">
              {t("headerBlock3.title")}
            </h2>
            <p className="leading-[32px] text-white font-medium text-[20px] mt-[3px] max-sm:text-[16px] max-sm:leading-[16px]">
              {t("headerBlock3.description")}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
