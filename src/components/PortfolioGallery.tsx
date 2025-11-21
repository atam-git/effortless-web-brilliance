import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import all portfolio images
import portfolio01 from "@/assets/Portfolio/NDS-Portfolio-01-01-Bravura.jpg";
import portfolio02 from "@/assets/Portfolio/NDS-Portfolio-01-02-Twinglo.jpg";
import portfolio03 from "@/assets/Portfolio/NDS-Portfolio-01-03-SME-Cafe.jpg";
import portfolio04 from "@/assets/Portfolio/NDS-Portfolio-01-04-Uju-Email.jpg";
import portfolio05 from "@/assets/Portfolio/NDS-Portfolio-01-05--Centre-for-Memories.jpg";
import portfolio06 from "@/assets/Portfolio/NDS-Portfolio-01-06-Zhymma.jpg";
import portfolio07 from "@/assets/Portfolio/NDS-Portfolio-01-07-Crystal-Paints.jpg";
import portfolio08 from "@/assets/Portfolio/NDS-Portfolio-01-08-AHOD.jpg";
import portfolio09 from "@/assets/Portfolio/NDS-Portfolio-01-09-CN-BizMix.jpg";
import portfolio10 from "@/assets/Portfolio/NDS-Portfolio-01-10-A-New-Nigeria.jpg";
import portfolio11 from "@/assets/Portfolio/NDS-Portfolio-01-11-BGL-limited.jpg";
import portfolio12 from "@/assets/Portfolio/NDS-Portfolio-01-12-Oluaka.jpg";
import portfolio13 from "@/assets/Portfolio/NDS-Portfolio-01-13-Zima-Fashion.jpg";
import portfolio14 from "@/assets/Portfolio/NDS-Portfolio-01-14-Uju-Golden-Bday.jpg";
import portfolio15 from "@/assets/Portfolio/NDS-Portfolio-01-15-CN-Taxi-Ads.jpg";
import portfolio16 from "@/assets/Portfolio/NDS-Portfolio-01-16-Writers-Conference.jpg";
import portfolio17 from "@/assets/Portfolio/NDS-Portfolio-01-17-Fabadore.jpg";
import portfolio18 from "@/assets/Portfolio/NDS-Portfolio-01-18-NESG.jpg";
import portfolio19 from "@/assets/Portfolio/NDS-Portfolio-01-19-LekkiBiz.jpg";
import portfolio20 from "@/assets/Portfolio/NDS-Portfolio-01-20-Ntrust-IS.jpg";
import portfolio21 from "@/assets/Portfolio/NDS-Portfolio-01-21-Top-100-2019.jpg";
import portfolio22 from "@/assets/Portfolio/NDS-Portfolio-01-22-Jovadi-copy.jpg";
import portfolio23 from "@/assets/Portfolio/NDS-Portfolio-01-23-RGS-Building.jpg";
import portfolio24 from "@/assets/Portfolio/NDS-Portfolio-01-23-Uju-oBuekwe.jpg";
import portfolio25 from "@/assets/Portfolio/NDS-Portfolio-01-24-DLPGOVP.jpg";
import portfolio26 from "@/assets/Portfolio/NDS-Portfolio-01-25-Trainings.jpg";
import portfolio27 from "@/assets/Portfolio/NDS-Portfolio-01-26-Suntrust.jpg";
import portfolio28 from "@/assets/Portfolio/NDS-Portfolio-01-27-Zicon-Energy.jpg";
import portfolio29 from "@/assets/Portfolio/NDS-Portfolio-01-28-Aiteo.jpg";
import portfolio30 from "@/assets/Portfolio/NDS-Portfolio-01-29-LCCI.jpg";
import portfolio31 from "@/assets/Portfolio/NDS-Portfolio-01-30-Bizfair-2020.jpg";
import portfolio32 from "@/assets/Portfolio/NDS-Portfolio-01-31-Aiteo-Cup.jpg";
import portfolio33 from "@/assets/Portfolio/NDS-Portfolio-01-32-Club-Connect.jpg";
import portfolio34 from "@/assets/Portfolio/NDS-Portfolio-01-33-FGCE-Alumni.jpg";
import portfolio35 from "@/assets/Portfolio/NDS-Portfolio-01-34-TWellls.jpg";
import portfolio36 from "@/assets/Portfolio/NDS-Portfolio-01-35-CN-Marketplace.jpg";
import portfolio37 from "@/assets/Portfolio/NDS-Portfolio-01-36-NDS-Web-Training.jpg";
import portfolio38 from "@/assets/Portfolio/NDS-Portfolio-01-37-CN-Refer.jpg";
import portfolio39 from "@/assets/Portfolio/NDS-Portfolio-01-38-Sahel.jpg";
import portfolio40 from "@/assets/Portfolio/NDS-Portfolio-01-39-Maizube.jpg";
import portfolio41 from "@/assets/Portfolio/NDS-Portfolio-01-40-Autocare.jpg";
import portfolio42 from "@/assets/Portfolio/NDS-Portfolio-01-42-Manifest-Apparel.jpg";
import portfolio43 from "@/assets/Portfolio/NDS-Portfolio-01-43-Sheasentials.jpg";
import portfolio44 from "@/assets/Portfolio/NDS-Portfolio-01-44-Jolakin.jpg";
import portfolio45 from "@/assets/Portfolio/NDS-Portfolio-01-45-Kuruxy.jpg";
import portfolio46 from "@/assets/Portfolio/NDS-Portfolio-01-46-Oges.jpg";
import portfolio47 from "@/assets/Portfolio/NDS-Portfolio-01-47-Cybastion.jpg";
import portfolio48 from "@/assets/Portfolio/NDS-Portfolio-01-48-Kusum.jpg";
import portfolio49 from "@/assets/Portfolio/NDS-Portfolio-01-49-Damaris.jpg";
import portfolio50 from "@/assets/Portfolio/NDS-Portfolio-01-50-GuaranteedDelicious.jpg";
import portfolio51 from "@/assets/Portfolio/NDS-Portfolio-01-51-Logos.jpg";

const portfolioImages = [
  { src: portfolio01, alt: "Bravura Portfolio" },
  { src: portfolio02, alt: "Twinglo Portfolio" },
  { src: portfolio03, alt: "SME Cafe Portfolio" },
  { src: portfolio04, alt: "Uju Email Portfolio" },
  { src: portfolio05, alt: "Centre for Memories Portfolio" },
  { src: portfolio06, alt: "Zhymma Portfolio" },
  { src: portfolio07, alt: "Crystal Paints Portfolio" },
  { src: portfolio08, alt: "AHOD Portfolio" },
  { src: portfolio09, alt: "CN BizMix Portfolio" },
  { src: portfolio10, alt: "A New Nigeria Portfolio" },
  { src: portfolio11, alt: "BGL Limited Portfolio" },
  { src: portfolio12, alt: "Oluaka Portfolio" },
  { src: portfolio13, alt: "Zima Fashion Portfolio" },
  { src: portfolio14, alt: "Uju Golden Birthday Portfolio" },
  { src: portfolio15, alt: "CN Taxi Ads Portfolio" },
  { src: portfolio16, alt: "Writers Conference Portfolio" },
  { src: portfolio17, alt: "Fabadore Portfolio" },
  { src: portfolio18, alt: "NESG Portfolio" },
  { src: portfolio19, alt: "LekkiBiz Portfolio" },
  { src: portfolio20, alt: "Ntrust IS Portfolio" },
  { src: portfolio21, alt: "Top 100 2019 Portfolio" },
  { src: portfolio22, alt: "Jovadi Portfolio" },
  { src: portfolio23, alt: "RGS Building Portfolio" },
  { src: portfolio24, alt: "Uju oBuekwe Portfolio" },
  { src: portfolio25, alt: "DLPGOVP Portfolio" },
  { src: portfolio26, alt: "Trainings Portfolio" },
  { src: portfolio27, alt: "Suntrust Portfolio" },
  { src: portfolio28, alt: "Zicon Energy Portfolio" },
  { src: portfolio29, alt: "Aiteo Portfolio" },
  { src: portfolio30, alt: "LCCI Portfolio" },
  { src: portfolio31, alt: "Bizfair 2020 Portfolio" },
  { src: portfolio32, alt: "Aiteo Cup Portfolio" },
  { src: portfolio33, alt: "Club Connect Portfolio" },
  { src: portfolio34, alt: "FGCE Alumni Portfolio" },
  { src: portfolio35, alt: "TWellls Portfolio" },
  { src: portfolio36, alt: "CN Marketplace Portfolio" },
  { src: portfolio37, alt: "NDS Web Training Portfolio" },
  { src: portfolio38, alt: "CN Refer Portfolio" },
  { src: portfolio39, alt: "Sahel Portfolio" },
  { src: portfolio40, alt: "Maizube Portfolio" },
  { src: portfolio41, alt: "Autocare Portfolio" },
  { src: portfolio42, alt: "Manifest Apparel Portfolio" },
  { src: portfolio43, alt: "Sheasentials Portfolio" },
  { src: portfolio44, alt: "Jolakin Portfolio" },
  { src: portfolio45, alt: "Kuruxy Portfolio" },
  { src: portfolio46, alt: "Oges Portfolio" },
  { src: portfolio47, alt: "Cybastion Portfolio" },
  { src: portfolio48, alt: "Kusum Portfolio" },
  { src: portfolio49, alt: "Damaris Portfolio" },
  { src: portfolio50, alt: "Guaranteed Delicious Portfolio" },
  { src: portfolio51, alt: "Logos Portfolio" },
];

const PortfolioGallery = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of stunning projects
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {portfolioImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="rounded-3xl overflow-hidden border-4 border-foreground shadow-brutal hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-4 border-foreground shadow-brutal hover:bg-yellow-accent" />
          <CarouselNext className="border-4 border-foreground shadow-brutal hover:bg-yellow-accent" />
        </Carousel>
      </div>
    </section>
  );
};

export default PortfolioGallery;
