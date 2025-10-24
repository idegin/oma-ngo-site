import { CategoriesDocument, ProgramDocument } from "@/prismicio-types";

interface EachProgramCardProps {
    program: ProgramDocument;
}
export default function EachProgramCard({ program }: EachProgramCardProps) {
    const category: CategoriesDocument = program?.data
        ?.category as unknown as CategoriesDocument;
    return (
        <>
            <div
                className='col-xl-4 col-lg-4 wow fadeInUp'
                data-wow-delay='200ms'
            >
                <div className='causes-one__single'>
                    <div className='causes-one__img'>
                        <img
                            src={program?.data?.featured_image.url as string}
                            alt={program?.data?.title as string}
                        />
                        <div className='causes-one__cat'>
                            <p>{category?.data?.title as string}</p>
                        </div>
                    </div>
                    <div className='causes-one__content'>
                        <h3 className='causes-one__title'>
                            <a href={`/programs/${program?.uid}`}>
                                {program?.data?.title as string}
                            </a>
                        </h3>
                        <p className='causes-one__text '>
                            {program?.data?.excerpt as string}
                        </p>
                        <div className='causes-one__progress'>
                            <div
                                className='causes-one__progress-shape'
                                style={{
                                    backgroundImage:
                                        "url(/assets/images/shapes/causes-one-progress-shape-1.png)",
                                }}
                            ></div>
                            <div className='bar'>
                                <div
                                    className='bar-inner count-bar'
                                    data-percent={`${Math.round(((program?.data?.total_enrolled || 0) / (program?.data?.goal || 1)) * 100)}%`}
                                >
                                    <div className='count-text'>
                                        {Math.round(
                                            ((program?.data?.total_enrolled ||
                                                0) /
                                                (program?.data?.goal || 1)) *
                                                100
                                        )}
                                        %
                                    </div>
                                </div>
                            </div>
                            <div className='causes-one__goals'>
                                <p>
                                    <span>
                                        ${program?.data?.total_enrolled || 0}
                                    </span>{" "}
                                    Raised
                                </p>
                                <p>
                                    <span>${program?.data?.goal || 0}</span>{" "}
                                    Goal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
