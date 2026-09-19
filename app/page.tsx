import { CWNavbar } from "@/components/coastal-wellness/navbar";
import { CWFooter } from "@/components/coastal-wellness/footer";
import { CWHero } from "@/components/coastal-wellness/sections/hero";
import { CWIntro } from "@/components/coastal-wellness/sections/intro";
import { CWServicesOverview } from "@/components/coastal-wellness/sections/services-overview";
import { CWWhoWeServe } from "@/components/coastal-wellness/sections/who-we-serve";
import { CWTeamPreview } from "@/components/coastal-wellness/sections/team-preview";
import { CWInsurance } from "@/components/coastal-wellness/sections/insurance";
import { CWLocations } from "@/components/coastal-wellness/sections/locations";
import { CWAwards } from "@/components/coastal-wellness/sections/awards";
import { CWCtaContact } from "@/components/coastal-wellness/sections/cta-contact";

export default function CoastalWellnessHomePage() {
  return (
    <>
      <CWNavbar overlay />
      <main>
        <CWHero />
        <CWIntro />
        <CWServicesOverview />
        <CWWhoWeServe />
        <CWTeamPreview />
        <CWInsurance />
        <CWLocations />
        <CWAwards />
        <CWCtaContact />
      </main>
      <CWFooter />
    </>
  );
}
