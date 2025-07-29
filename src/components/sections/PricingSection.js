/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeading } from "#/SectionHeading";
import { Tabs } from "#/base";
import { PricingCard } from "#/cards";

export function PricingSection({
  title,
  description,
  badge,
  pricing,
  ...rest
}) {
  const [tenure, setTenure] = React.useState("army");
  const [wingFilter, setWingFilter] = React.useState("");

  const droneTypes = [
    {
      name: "Quadcopter A1",
      wings: "4 Wings",
      use: "Surveying & Mapping",
      payload: "Up to 10 kg",
      image: "/images/drone1.jpg",
    },
    {
      name: "Hexacopter B2",
      wings: "6 Wings",
      use: "Crop Spraying",
      payload: "Up to 15 kg",
      image: "/images/drone2.jpg",
    },
    {
      name: "Octocopter C3",
      wings: "8 Wings",
      use: "Heavy Payload Delivery",
      payload: "Up to 25 kg",
      image: "/images/drone3.jpg",
    },
    {
      name: "Quadcopter D4",
      wings: "4 Wings",
      use: "Military Surveillance",
      payload: "Up to 12 kg",
      image: "/images/drone4.jpg",
    },
    {
      name: "Hexacopter E5",
      wings: "6 Wings",
      use: "Seed Sowing",
      payload: "Up to 18 kg",
      image: "/images/drone5.jpg",
    },
    {
      name: "Octocopter F6",
      wings: "8 Wings",
      use: "Forest Fire Mapping",
      payload: "Up to 30 kg",
      image: "/images/drone6.jpg",
    },
  ];

  return (
    <section className="bg-base-100 dark:bg-base-900 py-24" {...rest}>
      <div className="container px-4 mx-auto min-h-screen">
        {/* Section Heading */}
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />

        {/* Tabs */}
        <div className="text-center my-10">
          <Tabs
            value={tenure}
            onChange={setTenure}
            options={["Agro", "Army"]}
          />
          <div className="text-sm mt-4">
            We let you customize your drone to fit your exact needs.
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pricing.map((price, index) => (
            <PricingCard key={index} {...price} tenure={tenure} />
          ))}
        </div>

        {/* 🎥 Auto-scrolling Video Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Watch Our Drone Videos
          </h2>

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-left w-max">
              {[
                "drone1.mp4",
                "drone2.mp4",
                "drone3.mp4",
                "drone4.mp4",
                "drone5.mp4",
                "drone6.mp4",
                "drone7.mp4",
              ].map((file, i) => (
                <video
                  key={i}
                  className="rounded-xl w-[320px] h-[200px] object-cover"
                  src={`/videos/${file}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ))}
            </div>
          </div>
        </div>

        {/* 🛩️ Product Table Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Drone Types by Wing Configuration
          </h2>

          {/* Dropdown Filter */}
          <div className="flex justify-end mb-4">
            <select
              value={wingFilter}
              onChange={(e) => setWingFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-white"
            >
              <option value="">All Wings</option>
              <option value="4 Wings">4 Wings</option>
              <option value="6 Wings">6 Wings</option>
              <option value="8 Wings">8 Wings</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Image</th>
                  <th className="px-4 py-3 text-left">Drone Type</th>
                  <th className="px-4 py-3 text-left">Wings</th>
                  <th className="px-4 py-3 text-left">Use Case</th>
                  <th className="px-4 py-3 text-left">Payload</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
                {droneTypes
                  .filter((d) => !wingFilter || d.wings === wingFilter)
                  .map((drone, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      <td className="px-4 py-3">
                        <img
                          src={drone.image}
                          alt={drone.name}
                          className="w-20 h-14 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-3">{drone.name}</td>
                      <td className="px-4 py-3">{drone.wings}</td>
                      <td className="px-4 py-3">{drone.use}</td>
                      <td className="px-4 py-3">{drone.payload}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
