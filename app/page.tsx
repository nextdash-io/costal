import { CWNavbar } from "@/components/coastal-wellness/navbar";
import { CWFooter } from "@/components/coastal-wellness/footer";
import { CWHero } from "@/components/coastal-wellness/sections/hero";
import { CWAwards } from "@/components/coastal-wellness/sections/awards";
import { CWIntro } from "@/components/coastal-wellness/sections/intro";
import { CWWhoWeServe } from "@/components/coastal-wellness/sections/who-we-serve";
import { CWTherapyCards } from "@/components/coastal-wellness/sections/therapy-cards";
import { CWTeamPreview } from "@/components/coastal-wellness/sections/team-preview";
import { CWInsurance } from "@/components/coastal-wellness/sections/insurance";
import { CWLocations } from "@/components/coastal-wellness/sections/locations";
import { CWCtaContact } from "@/components/coastal-wellness/sections/cta-contact";

export default function CoastalWellnessHomePage() {
  return (
    <>
      <CWNavbar />
      <main>
        <CWHero />
        <CWAwards />
        <CWIntro />
        <CWWhoWeServe />
        <CWTherapyCards />
        <CWTeamPreview />
        <CWInsurance />
        <CWLocations />
        <CWCtaContact />
      </main>
      <CWFooter />
    </>
  );
}
