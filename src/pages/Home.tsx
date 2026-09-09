import { Hero } from '../components/home/Hero';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { VehicleFinder } from '../components/home/VehicleFinder';
import { RecentWork } from '../components/home/RecentWork';
import { AboutTeaser } from '../components/home/AboutTeaser';
import { SocialProof } from '../components/home/SocialProof';
import { ContactCTA } from '../components/home/ContactCTA';

export function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <VehicleFinder />
      <RecentWork />
      <AboutTeaser />
      <SocialProof />
      <ContactCTA />
    </>
  );
}
