import EachProgramCard from "@/components/EachProgramCard";

export default function ProgramsSection() {
    return <>
        <section className="causes-one pt-40">
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Empowerment Programs</span>
                    <h2 className="section-title__title">Find the popular cause <br/> and donate them</h2>
                </div>
                <div className="row">

                    <EachProgramCard />
                    <EachProgramCard />
                    <EachProgramCard />

                </div>
            </div>
        </section>
    </>
}

