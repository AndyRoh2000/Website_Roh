"use client";
import type {CardProps} from "@nextui-org/card";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import port from "../image/Rohimage1.jpeg";

export default function PokeRoh(props: CardProps) {
    return (
        <Card className="w-full max-w-[460px]"  {...props}>
        <CardHeader> Who am I?</CardHeader>
        <CardBody className="flex flex-row flex-wrap p-0 ">
          <Image

            alt="GyungMin Roh"
            className="h-auto w-full flex object-cover object-top"
            src={port}
            />
          <div className="px-4 py-5">
            <h3 className="text-large font-medium">Victory Developer</h3>
            <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
              <p>
                This developer brings victory. It is said that colleagues of Roh always win, regardless of the field or area!
              </p>
            </div>
          </div>
        </CardBody>
      </Card>



    );
  }