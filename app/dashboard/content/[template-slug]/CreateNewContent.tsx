"use client";

import React, {useContext, useState} from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import chatSession from "@/utils/AIModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import UpdateCreditUsageContext from "@/app/(context)/UpdateCreditUsageContext";

interface Props {
  templateSlug: string;
}

const CreateNewContent = ({ templateSlug }: Props) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  );

  const [loading, setLoading] = useState(false);

  const [aiOutput, setAiOutput] = useState<string>("");

  const {user} = useUser();

  const router = useRouter();

  const totalUsageContext = useContext(TotalUsageContext);
  const totalUsage = totalUsageContext?.totalUsage || 0;
  const setTotalUsage = totalUsageContext?.setTotalUsage || (() => {});

  const updateCreditUsageContext = useContext(UpdateCreditUsageContext);
  const updateCreditUsage = updateCreditUsageContext?.updateCreditUsage || 0;
  const setUpdateCreditUsage = updateCreditUsageContext?.setUpdateCreditUsage || (() => {});

  const generateAIContent = async (formData: any) => {
    if(totalUsage >= 10000) {
      router.push('/dashboard/billing');
      return ;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const formatInstructions = "Please return the content in HTML format suitable for a rich text editor. Use proper HTML tags like <ul><li> for bullet points, <ol><li> for numbered lists, <p> for paragraphs, <h1>, <h2>, etc. for headings, <strong> for bold text, and <em> for italic text. Do not include any markdown formatting or additional notes.";

    const FinalAIPrompt = JSON.stringify(formData) + ', ' + selectedPrompt + ', ' + formatInstructions;

    const result = await chatSession(FinalAIPrompt);
    setAiOutput(result);
    await SaveInDb(formData, selectedTemplate?.slug, result);
    setLoading(false);

    setUpdateCreditUsage(Date.now())
  };

  const SaveInDb = async (formData:any, slug:any, aiResp:string) => {
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResp,
            createdBy: user?.primaryEmailAddress?.emailAddress || '',
            createdAt: moment().format('DD/MM/YYYY')
        })
        console.log(result)
    }

  return (
    <div className="p-10">
      <Link href="/dashboard" >
        <Button className="cursor-pointer">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/*Form Section*/}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAIContent(v)}
          loading={loading}
        />

        {/*Output Section*/}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
