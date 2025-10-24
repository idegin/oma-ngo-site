import React from "react";
import { CategoriesDocument, ProgramDocument } from "@/prismicio-types";

type Props = {
    program: ProgramDocument;
};

export default function EachProgramsLG({ program }: Props) {
    const category = program?.data?.category as unknown as CategoriesDocument;
    return (
        <>
            <div className='donations-list__single'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6'>
                        <div className='donations-list__img md:h-[460px] h-[15rem] overflow-hidden md:rounded-bl-3xl'>
                            <img
                                src={
                                    program?.data?.featured_image?.url ||
                                    "https://images.unsplash.com/photo-1760592150404-adacb88548e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
                                }
                                alt={program?.data?.title || "Program image"}
                            />
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6'>
                        <div className='donations-list__right'>
                            <div className='donations-list__content'>
                                <div className='donations-list__category'>
                                    <p>{category?.data?.title || "General"}</p>
                                </div>
                                <h3 className='donations-list__title'>
                                    <a href={`/programs/${program?.uid}`}>
                                        {program?.data?.title ||
                                            "Program Title"}
                                    </a>
                                </h3>
                                <p className='donations-list__text'>
                                    {program?.data?.excerpt ||
                                        "Program description not available."}
                                </p>
                                <div className='donations-list__progress'>
                                    <div
                                        className='donations-list__progress-shape'
                                        style={{
                                            backgroundImage:
                                                "url(assets/images/shapes/donations-list-progress-shape-1.png)",
                                        }}
                                    ></div>
                                    <div className='bar'>
                                        <div
                                            className='bar-inner count-bar'
                                            data-percent={`${Math.round(((program?.data?.total_enrolled || 0) / (program?.data?.goal || 1)) * 100)}%`}
                                        >
                                            <div className='count-text'>
                                                {Math.round(
                                                    ((program?.data
                                                        ?.total_enrolled || 0) /
                                                        (program?.data?.goal ||
                                                            1)) *
                                                        100
                                                )}
                                                %
                                            </div>
                                        </div>
                                    </div>
                                    <div className='causes-one__goals'>
                                        <p>
                                            <span>
                                                {program?.data
                                                    ?.total_enrolled || 0}
                                            </span>{" "}
                                            Enrolled
                                        </p>
                                        <p>
                                            <span>
                                                {program?.data?.goal || 0}
                                            </span>{" "}
                                            Goal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
