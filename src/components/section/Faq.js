import React from "react";
import CustomContainer from "../custom/CustomContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/app/data";

const Faq = () => {
  return (
    <div className="font-lora text-text mb-10 sm:mb-[15vh] mx-4 sm:mx-6 lg:mx-12">
      <CustomContainer customWidth="max-w-[1600px] bg-[#e8eae0] rounded-2xl px-6 sm:px-12 lg:px-[100px] py-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl pt-6 sm:pt-8 font-medium leading-tight">
            Frequently asked questions
          </h1>
          <h3 className="text-base sm:text-lg lg:text-xl my-5 sm:my-7">
          Ada pertanyaan lain? Silakan email kami di{" "}
            <a
              href="mailto:support@ecofy.id"
            >
              support@ecofy.id
            </a>
          </h3>
        </div>
        <div className="text-base sm:text-lg lg:text-xl pb-6 sm:pb-8">
          {faq.map((data) => (
            <Accordion
              key={data.id}
              className="font-lora"
              type="single"
              collapsible
            >
              <AccordionItem value={`item-${data.id}`}>
                <AccordionTrigger>
                  <div className="text-base sm:text-lg lg:text-xl text-secondary">
                    {data.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-base sm:text-lg lg:text-xl">
                    {data.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </CustomContainer>
    </div>
  );
};

export default Faq;