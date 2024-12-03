"use client";
import type { CardProps } from "@nextui-org/card";
import { Card, CardHeader, CardBody } from "@nextui-org/card";


export default function AboutRoh(props: CardProps) {
    return (
        <Card  {...props}>
            <CardHeader> About</CardHeader>
            <CardBody className="flex flex-row flex-wrap p-0 ">
                <div className="px-4 py-5 flex flex-col gap-3 pt-2 text-base text-default-400">
                    <p>
                        I am a passionate Candidate for a Bachelor's degree in Data Science from Sungkyunkwan University. I am particularly enthusiastic about leveraging machine learning to address societal challenges and contribute to the greater good, such as developing accessible medical solutions and enabling real-time data analysis for managing war situations.
                    </p>
                    <p>
                        I am a passionate Candidate for a Bachelor's degree in Data Science from Sungkyunkwan University. I am particularly enthusiastic about leveraging machine learning to address societal challenges and contribute to the greater good, such as developing accessible medical solutions and enabling real-time data analysis for managing war situations.
                    </p>
                    <p>
                        While attending university in Korea, I sought opportunities to broaden my perspective and gain international experience by studying abroad at the University of Leicester and the University of California, Santa Cruz.
                    </p>
                    <p>
                        My name on document is Gyungmin, pronounced Gi-eong-min, but I am known as Andy to everyone around me.
                    </p>
                </div>
            </CardBody>
        </Card>



    );
}