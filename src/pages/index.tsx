import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import useSWR from "swr";
import Search from "../components/Search";
import SubNavigation from "../components/SubNavigation";

import { PawPrint, Users, Calendar, Bone } from 'lucide-react';
import HeroSection from "./pawrise/pawrise_hero";
import AdoptableDogs from "./pawrise/pawrise_adoptable_pets";
import AboutUsSection from "./pawrise/pawrise_about_us";
import CallToActionSection from "./pawrise/pawrise_call_to_action";
import OurTeamSection from "./pawrise/pawrise_our_team";
import SuccessStoriesSection from "./pawrise/pawrise_success_stories";
import Contact from "./pawrise/pawrise_contact";
import Header from "./pawrise/pawrise_header";

const API_URL = "https://ipapi.co/json/";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Index() {
  const { data, error } = useSWR(API_URL, fetcher);

  if (data) {
    localStorage.setItem("ip", JSON.stringify(data));
  }

  const dogs = [
    {
      name: "Rocky",
      image: "/dogs/rocky.jpg",
      weight: "75 lbs",
      age: "4 years",
      favorite: "Chicken treats",
      description: "Rocky is always ready for an adventure and loves being around people."
    },
    {
      name: "Bella",
      image: "/dogs/bella.jpg",
      weight: "20 lbs",
      age: "5 years",
      favorite: "Salmon snacks",
      description: "Bella is a loyal companion who brings calm and warmth to her family."
    },
    {
      name: "Max",
      image: "/dogs/max.jpg",
      weight: "60 lbs",
      age: "3 years",
      favorite: "Chicken treats",
      description: "Max is an affectionate dog who’s always up for some fun and adventure."
    }
  ];

  return (
    <Layout>
      <main className="bg-white">
        <Header/>
        <HeroSection/>
        <AdoptableDogs/>
        <AboutUsSection/>
        <CallToActionSection/>
        <OurTeamSection/>
        <SuccessStoriesSection/>
        <Contact/>
      </main>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}