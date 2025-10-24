import EachProgramCard from "@/components/EachProgramCard";
import EmptyProgramsState from "@/components/EmptyProgramsState";
import { ProgramDocument } from "@/prismicio-types";

interface ProgramsSectionProps {
    programsData: ProgramDocument[];
}
export default function ProgramsSection({
    programsData,
}: ProgramsSectionProps) {
    return (
        <>
            <section className='causes-one pt-40'>
                <div className='container'>
                    <div className='section-title text-center'>
                        <span className='section-title__tagline'>
                            Empowerment Programs
                        </span>
                        <h2 className='section-title__title'>
                            Find the popular cause <br /> and donate them
                        </h2>
                    </div>
                    <div className='row'>
                        {programsData?.length ? (
                            programsData.map((program) => (
                                <EachProgramCard
                                    key={program?.uid as string}
                                    program={program}
                                />
                            ))
                        ) : (
                            <EmptyProgramsState />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
