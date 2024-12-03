import Carousel from "@/components/carousel";
import { title } from "@/components/primitives";

export default function BIOPage() {
  return (
    <div>
      <div className="flex items-center justify-center pb-8">
        <h1 className={title()}>BIO</h1>
      </div>
      <div>
        <div className="pl-2 pr-2 pb-2">

          <p>
            Gyungmin is a final-year student at Sungkyunkwan University, completing a Bachelor's degree in Data Science.
          </p><br/>
          <p>
            His effort on academic advancement revolves around deep learning, full stack app development and closing the gap between economic issues and technology.
          </p><br/>
          <p>
            Gyungmin’s experiences include large-scale web scraping, full-stack app development, AI development for a secure digital twin infrastructure on Hyperledger Fabric, and building AI solutions for racing vehicle collision detection.
          </p>
          <p><br/>
            While pursuing his degree in Korea, Andy broadened his perspective through international study programs at University of Leicester and University of California, Santa Cruz.
          </p><br/><br/>
        </div>

      </div>
      <div className="flex items-center justify-center pb-8">
        
        <br/>
      </div>

      <div className="flex flex-wrap justify-center items-center">

        <Carousel />
      </div>
    </div>
  );
}
