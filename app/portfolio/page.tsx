'use client';
import { title } from "@/components/primitives";
import Portfolio from "@/components/portfolio";

const experiences = [
  {
    title: 'AI Development Intern',
    date: 'Jun 2024 - Nov 2024',
    location: 'Hyunjin International / Gyeongi, South Korea',
    tasks: [
      'Developed a secure and tamper-proof digital twin infrastructure based on Hyperledger Fabric',
      'Created a generative AI model for generating carbon reports in alignment with standards',
      'Developed AI for Scope 1, 2, and 3 analysis and trend prediction based on digital twin inventory data',
    ],
  },
  {
    title: 'Developer & Marketing Manager',
    date: 'Oct 2022 – Nov 2022',
    location: 'Metagonz / Seoul, South Korea',
    tasks: [
      'Participated in development of DAPP (Decentralized App on the Ethereum blockchain for NFT trading and staking)',
      'Directed marketing initiatives, leveraging social media campaigns and community engagement on platforms like Discord to build awareness and drive project momentum',
    ],
  },
  {
    title: 'IT Specialist',
    date: 'Apr 2021– Oct 2022',
    location: 'Korean Augmentation to the US Army / Daegu, South Korea',
    tasks: [
      'Served as an IT Specialist (25B) and military interpreter in the 517th Movement Control Team (MCT), 25th Transportation Battalion, MSC-K, 8th Army, ensuring seamless communication between Korean and US military personnel and maintaining IT infrastructure for operational readiness',
    ],
  },
];

export default function Home() {
  return (
    <div className="items-center justify-center pb-8">
      <div>
      <h1 className={title()}>Portfolio</h1>
      </div>
     <div><Portfolio experiences={experiences} />
      </div> 
    </div>
  );
}
