import Head from "next/head";
import Link from "next/link";
import {
  InformationCircleIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function LearnMore() {
  return (
    <>
      <Head>
        <title>Learn More | SK Natural Farm</title>
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
        {/* Home Button */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition hover:underline"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Intro */}
        <section className="mb-16">
          <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-green-600 to-lime-500 text-transparent bg-clip-text mb-6">
            About SK Natural Farm
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            At <strong>SK Natural Farm</strong>, we’re reshaping agriculture and defense with cutting-edge drone technology. We fuse traditional farming values with modern automation to deliver scalable, smart, and sustainable solutions.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16 bg-green-50 p-8 rounded-xl shadow">
          <div className="flex items-center gap-4 mb-4">
            <GlobeAltIcon className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-green-700">Our Mission</h2>
          </div>
          <p className="text-lg">
            To deliver eco-friendly, innovative drone solutions that transform agricultural productivity and enhance national defense capabilities.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-16 bg-green-100 p-8 rounded-xl shadow">
          <div className="flex items-center gap-4 mb-4">
            <LightBulbIcon className="h-8 w-8 text-green-700" />
            <h2 className="text-3xl font-bold text-green-800">Our Vision</h2>
          </div>
          <p className="text-lg">
            To become a global leader in agri-tech and defense-grade drone systems, enabling smarter farming and safer borders with advanced autonomous technology.
          </p>
        </section>

        {/* Drone Categories */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <RocketLaunchIcon className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-green-700">Drone Categories</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            <li className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <strong className="block text-green-700 mb-2">AgroPro Series</strong>
              Precision farming drones for seeding, pesticide spraying, and crop monitoring.
            </li>
            <li className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <strong className="block text-green-700 mb-2">GuardX Series</strong>
              Defense drones built for terrain mapping, surveillance, and threat detection.
            </li>
            <li className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <strong className="block text-green-700 mb-2">SmartFly Custom</strong>
              Custom-designed drones for research institutes, startups, and industries.
            </li>
          </ul>
        </section>

        {/* Technology */}
        <section className="mb-16 bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl shadow">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheckIcon className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-green-800">Technology & Innovation</h2>
          </div>
          <p className="text-lg mb-2">
            Our drones are powered by advanced AI flight systems, real-time analytics, and environmental awareness features like:
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Terrain-following GPS and route optimization</li>
            <li>Obstacle detection and auto-stabilization</li>
            <li>Smart payload management and data sync</li>
            <li>Extended battery and flight efficiency</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-green-600 to-lime-500 text-transparent bg-clip-text">
            Interested in Collaborating?
          </h2>
          <p className="text-lg mb-8">
            Reach out to explore partnership opportunities or watch our product demo in action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://forms.cloud.microsoft/r/EeH8xhLjBN?origin=lprLink"
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:scale-105 transition"
            >
              Contact Us
            </a>
            
          </div>
        </section>
      </main>
    </>
  );
}
