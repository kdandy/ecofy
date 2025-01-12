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
    <div className="font-lora text-text mb-[15vh] mx-3">
      <CustomContainer customWidth="max-w-[1600px] bg-[#e8eae0] rounded-2xl sm:px-[100px]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl pt-8 font-medium">
            Frequently asked questions
          </h1>
          <h3 className="text-lg sm:text-xl my-7">
            Have another question? please email us at support@ecofy.id
          </h3>
        </div>
        <div className="text-xl pb-8">
          {faq.map((data) => (
            <Accordion
              key={data.id}
              className="font-lora text-xl"
              type="single"
              collapsible
            >
              <AccordionItem value={`item-${data.id}`}>
                <AccordionTrigger>
                  <div className="text-xl text-secondary">{data.question}</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-xl">{data.answer}</div>
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
