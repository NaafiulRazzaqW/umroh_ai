"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Progress,
  Image,
} from "@nextui-org/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faPlane,
  faLocationDot,
  faHotel,
  faStar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Home() {
  const [selectedKeysLocation, setSelectedKeysLocation] = React.useState(
    new Set(["Pilih Lokasi Berangkat"])
  );
  const [selectedKeysTime, setSelectedKeysTime] = React.useState(
    new Set(["Pilih Waktu Berangkat"])
  );
  const [selectedKeysCost, setSelectedKeysCost] = React.useState(
    new Set(["Pilih Biaya Umroh"])
  );

  const selectedValueLocation = React.useMemo(
    () => Array.from(selectedKeysLocation).join(", ").replaceAll("_", " "),
    [selectedKeysLocation]
  );
  const selectedValueTime = React.useMemo(
    () => Array.from(selectedKeysTime).join(", ").replaceAll("_", " "),
    [selectedKeysTime]
  );
  const selectedValueCost = React.useMemo(
    () => Array.from(selectedKeysCost).join(", ").replaceAll("_", " "),
    [selectedKeysCost]
  );
  return (
    <>
      <div className="bg-green-50 h-[250px] w-screen"></div>
      <div className="bg-white h-screen">
        <div className="flex justify-center grid grid-row-4">
          <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 grid grid-cols-4  drop-shadow-md">
            <div className="">
              <p className="font-semibold ml-1 mb-2 text-medium w-[200px]">
                Lokasi Keberangkatan
              </p>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    color="success"
                    className="capitalize"
                  >
                    {selectedValueLocation}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeysLocation}
                  onSelectionChange={setSelectedKeysLocation}
                >
                  <DropdownItem key="Semua Lokasi">Semua Lokasi</DropdownItem>
                  <DropdownItem key="jakarta">Jakarta</DropdownItem>
                  <DropdownItem key="surabaya">Surabaya</DropdownItem>
                  <DropdownItem key="bandung">Bandung</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="">
              <p className="font-semibold ml-1 mb-2 text-medium w-[200px]">
                Waktu Keberangkatan
              </p>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    color="success"
                    className="capitalize"
                  >
                    {selectedValueTime}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeysTime}
                  onSelectionChange={setSelectedKeysTime}
                >
                  <DropdownItem key="Semua Waktu">Semua Waktu</DropdownItem>
                  <DropdownItem key="Maret-2024">Maret-2024</DropdownItem>
                  <DropdownItem key="April-2024">April-2024</DropdownItem>
                  <DropdownItem key="Juni-2024">Juni-2024</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="">
              <p className="font-semibold ml-1 mb-2 text-medium w-[100px]">
                Biaya Umroh
              </p>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    color="success"
                    className="capitalize"
                  >
                    {selectedValueCost}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeysCost}
                  onSelectionChange={setSelectedKeysCost}
                >
                  <DropdownItem key="Semua Biaya">Semua Biaya</DropdownItem>
                  <DropdownItem key="<30 Juta">{"<30 Juta"}</DropdownItem>
                  <DropdownItem key="30 - 40 Juta">30 - 40 Juta</DropdownItem>
                  <DropdownItem key=">40 Juta">{">40 Juta"}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="flex justify-center items-end">
              <Button
                className=""
                color="success"
                radius="sm"
                size="md"
                fullWidth
              >
                <p className="text-white">Cari Paket Umroh</p>
              </Button>
            </div>
          </div>

          <div className="mt-10">
            <div>
              <p className="font-semibold">
                Paket Umroh dengan Keberangkatan Lebih Awal
              </p>
            </div>
            {/* card */}
            <div className="grid grid-cols-3 gap-5 mt-4 drop-shadow-md">
              <div className="max-w-sm p-6 bg-white border hover:bg-gray-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Umroh Lailatul Qadr Dan Idul Fitri 29 Maret 2024
                  </h5>
                </a>

                <div className="mb-4">
                  <p className="flex justify-end">Sisa 10 Seat</p>
                  <Progress
                    aria-label="Downloading..."
                    size="lg"
                    value={75}
                    color="success"
                    showValueLabel={false}
                    className="max-w-md"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Quad, <span className="text-gray-600">Sekamar Ber-4</span>
                    </p>
                  </div>
                  <p className="font-bold text-orange-500">Rp 51.4 JT</p>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="grid grid-rows-3 grid-flow-col gap-2 mb-4">
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">29 Mar 2024</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div>
                      <p className="flex items-center px-2">Saudia</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">Jakarta, +8 Kota</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faHotel} />
                    </div>
                    <div className="pl-2">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                      <p className="flex items-center">4</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <p className="flex items-center pl-2">16 Hari</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>

              <div className="max-w-sm p-6 bg-white border hover:bg-gray-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Umroh I'tikaf Ramadhan Ruby Free Kereta Cepat
                  </h5>
                </a>

                <div className="mb-4">
                  <p className="flex justify-end">Sisa 15 Seat</p>
                  <Progress
                    aria-label="Downloading..."
                    size="lg"
                    value={60}
                    color="success"
                    showValueLabel={false}
                    className="max-w-md"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Quad, <span className="text-gray-600">Sekamar Ber-4</span>
                    </p>
                  </div>
                  <p className="font-bold text-orange-500">Rp 55.4 JT</p>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="grid grid-rows-3 grid-flow-col gap-2 mb-4">
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">27 Mar 2024</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div>
                      <p className="flex items-center px-2">Garuda Airplane</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">Jakarta</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faHotel} />
                    </div>
                    <div className="pl-2">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                      <p className="flex items-center">4</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <p className="flex items-center pl-2">17 Hari</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border hover:bg-gray-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Myhajiumroh 17 Hari Umroh Akhir Ramadhan 1445h
                  </h5>
                </a>

                <div className="mb-4">
                  <p className="flex justify-end">Sisa 15 Seat</p>
                  <Progress
                    aria-label="Downloading..."
                    size="lg"
                    value={60}
                    color="success"
                    showValueLabel={false}
                    className="max-w-md"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Quad, <span className="text-gray-600">Sekamar Ber-4</span>
                    </p>
                  </div>
                  <p className="font-bold text-orange-500">Rp 50.9 JT</p>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="grid grid-rows-3 grid-flow-col gap-2 mb-4">
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">31 Maret 2024</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div>
                      <p className="flex items-center px-2">Qatar Airways</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">Jakarta, +7 Kota</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faHotel} />
                    </div>
                    <div className="pl-2">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                      <p className="flex items-center">4</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <p className="flex items-center pl-2">17 Hari</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border hover:bg-gray-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Umroh Libur Lebaran - Berangkat 13 April 2024
                  </h5>
                </a>

                <div className="mb-4">
                  <p className="flex justify-end">Sisa 40 Seat</p>
                  <Progress
                    aria-label="Downloading..."
                    size="lg"
                    value={10}
                    color="success"
                    showValueLabel={false}
                    className="max-w-md"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Quad, <span className="text-gray-600">Sekamar Ber-4</span>
                    </p>
                  </div>
                  <p className="font-bold text-orange-500">Rp 50.9 JT</p>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="grid grid-rows-3 grid-flow-col gap-2 mb-4">
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">13 April 2024</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div>
                      <p className="flex items-center px-2">Saudia</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">
                        Jakarta, +14 Kota
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faHotel} />
                    </div>
                    <div className="pl-2">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                      <p className="flex items-center">4</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <p className="flex items-center pl-2">9 Hari</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border hover:bg-gray-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Paket Umroh Syawal 2024 <br /> &nbsp;
                  </h5>
                </a>

                <div className="mb-4">
                  <p className="flex justify-end">Sisa 25 Seat</p>
                  <Progress
                    aria-label="Downloading..."
                    size="lg"
                    value={45}
                    color="success"
                    showValueLabel={false}
                    className="max-w-md"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Quad, <span className="text-gray-600">Sekamar Ber-4</span>
                    </p>
                  </div>
                  <p className="font-bold text-orange-500">Rp 50.9 JT</p>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="grid grid-rows-3 grid-flow-col gap-2 mb-4">
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">13 April 2024</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div>
                      <p className="flex items-center px-2">Qatar Airways</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">Jakarta, +2 Kota</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faHotel} />
                    </div>
                    <div className="pl-2">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                      <p className="flex items-center">4</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <p className="flex items-center pl-2">9 Hari</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="max-w-sm p-6 bg-white border hover:bg-gray-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Umroh Syawal Shappire 14 April City Tour Thaif
                  </h5>
                </a>

                <div className="mb-4">
                  <p className="flex justify-end">Sisa 25 Seat</p>
                  <Progress
                    aria-label="Downloading..."
                    size="lg"
                    value={45}
                    color="success"
                    showValueLabel={false}
                    className="max-w-md"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Quad, <span className="text-gray-600">Sekamar Ber-4</span>
                    </p>
                  </div>
                  <p className="font-bold text-orange-500">Rp 50.9 JT</p>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="grid grid-rows-3 grid-flow-col gap-2 mb-4">
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">14 April 2024</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div>
                      <p className="flex items-center px-2">Saudia</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                      <p className="flex items-center px-3">Jakarta</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faHotel} />
                    </div>
                    <div className="pl-2">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                      <p className="flex items-center">4</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <p className="flex items-center pl-2">9 Hari</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-6 mb-4">
              <Button
                className="max-w-sm"
                color="success"
                radius="sm"
                size="md"
                fullWidth
              >
                <p className="text-white">Lihat Lebih Banyak</p>
              </Button>
            </div>

            <p className="flex justify-center font-semibold text-3xl mt-10 mb-10">
              Mengapa Pesan Tiket Umroh di Umroh.ai
            </p>

            <div className="flex justify-center mb-6">
              <div className="w-[1000px] h-full p-6 bg-green-50 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-center">
                  <div className="max-w-full max-h-full p-6 bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="grid grid-cols-3">
                      <div className="flex flex-col">
                        <div className="flex justify-center">
                          <Image
                            src="https://www.umroh.com/jaminan.png"
                            height={100}
                            width={100}
                          />
                        </div>

                        <p className="mt-2 font-semibold text-lg text-center text-green-400">
                          Jaminan Berangkat dan Pembayaran Aman
                        </p>
                        <p className="mt-2 font-normal text-sm text-center text-black">
                          Dana aman 100% dan hanya kami bayarkan kepada biro
                          umroh setelah anda mendapatkan Kode PNR Penerbangan.{" "}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-center">
                          <Image
                            src="https://www.umroh.com/fasilitas.png"
                            height={100}
                            width={100}
                          />
                        </div>

                        <p className="mt-2 font-semibold text-lg text-center text-green-400">
                          Fasilitas saat Ibadah Umroh <br /> &nbsp;
                        </p>
                        <p className="mt-2 font-normal text-sm text-center text-black">
                          Nikmati fasilitas seperti gratis biaya pembuatan atau
                          perpanjangan Paspor, Internet Provider selama ibadah
                          umroh.{" "}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-center">
                          <Image
                            src="https://www.umroh.com/promo.png"
                            height={100}
                            width={100}
                          />
                        </div>

                        <p className="mt-2 font-semibold text-lg text-center text-green-400">
                          Promo Spesial Setiap Bulannya
                          <br /> &nbsp;
                        </p>
                        <p className="mt-2 font-normal text-sm text-center text-black">
                          Dapatkan harga termurah dan potongan harga paket Umroh
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 mt-8 gap-3">
                      <div className="flex flex-col">
                        <div className="flex justify-center">
                          <Image
                            src="https://www.umroh.com/cicilan.png"
                            height={100}
                            width={100}
                          />
                        </div>

                        <p className="mt-2 font-semibold text-lg text-center text-green-400">
                        Fitur Down Payment dan Cicilan Tanpa Bunga
                        </p>
                        <p className="mt-2 font-normal text-sm text-center text-black">
                        Anda dapat memesan paket umroh yang Anda inginkan dengan DP Rp.5.000.000, dilanjutkan dengan pelunasan pembayaran yang harus diselesaikan Sebulan sebelum keberangkatan{" "}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-center">
                          <Image
                            src="https://www.umroh.com/paket.png"
                            height={100}
                            width={100}
                          />
                        </div>

                        <p className="mt-2 font-semibold text-lg text-center text-green-400">
                        Biaya Paket Umroh Termurah
                        </p>
                        <p className="mt-2 font-normal text-sm text-center text-black">
                        Pemesanan paket umroh Anda langsung ditujukan ke biro umroh, tanpa melalui perantara/agent sehingga memastikan anda mendapatkan harga terbaik.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
