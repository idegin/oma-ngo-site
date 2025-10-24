import React from "react";
import ProgramDetailsLeft from "./ProgramDetailsLeft";
import PageHeroSection from "@/components/PageHeroSection";
import ProgramRight from "./ProgramRight";
import { createClient } from "@/prismicio";
import { getProgramsBySlug } from "@/lib/queries/programs.query";
import { notFound } from "next/navigation";
import { ProgramDocument } from "@/prismicio-types";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export const dynamic = "force-dynamic";
export default async function page({ params }: Props) {
    const { id } = await params;
    const client = createClient();
    const program = await getProgramsBySlug(client, id);

    if (!program?.program) {
        notFound();
    }

    return (
        <>
            <PageHeroSection
                title='Program Details'
                breadcrumb={[
                    { label: "Programs", href: "/programs" },
                    {
                        label: program?.program?.data?.title || "",
                        href: `/programs/${id}`,
                    },
                ]}
            />
            <div className='donation-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-7'>
                            <ProgramDetailsLeft
                                program={program?.program as ProgramDocument}
                            />
                        </div>
                        <div className='col-xl-4 col-lg-5'>
                            <ProgramRight
                                latestPrograms={
                                    program?.latestPrograms as ProgramDocument[]
                                }
                                program={program?.program as ProgramDocument}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
