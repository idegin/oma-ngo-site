import { ProgramDocument } from "@/prismicio-types";
import React from "react";

interface Props {
    program: ProgramDocument;
    latestPrograms: ProgramDocument[];
}

export default function ProgramRight({ latestPrograms, program }: Props) {
    return (
        <>
            <div className='sidebar__post'>
                <div
                    className='sidebar-shape-1'
                    style={{
                        backgroundImage:
                            "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                ></div>
                <h3 className='sidebar__title'>Latest posts</h3>
                <ul className='sidebar__post-list list-unstyled'>
                    {latestPrograms.map((latestProgram) => (
                        <EachProgramSM
                            key={latestProgram.id}
                            program={latestProgram as ProgramDocument}
                        />
                    ))}
                </ul>
            </div>
            <div className='donation-details__sidebar-shaare-cause'>
                <div
                    className='sidebar-shape-1'
                    style={{
                        backgroundImage:
                            "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                ></div>
                <h3 className='donation-details__sidebar-shaare-cause-title'>
                    Share
                </h3>
                <div className='donation-details__sidebar-shaare-cause-social'>
                    <a href='#'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#'>
                        <i className='fab fa-facebook'></i>
                    </a>
                    <a href='#'>
                        <i className='fab fa-pinterest-p'></i>
                    </a>
                    <a href='#'>
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
            </div>
        </>
    );
}

const EachProgramSM = ({ program }: { program: ProgramDocument }) => {
    return (
        <li>
            <div className='sidebar__post-image'>
                <img
                    src={program?.data?.featured_image?.url || ""}
                    alt={program?.data?.title || ""}
                />
            </div>
            <div className='sidebar__post-content'>
                <h3 className='sidebar__post-content-title'>
                    <a href={`/programs/${program?.uid}`}>
                        {program?.data?.title}
                    </a>
                </h3>
            </div>
        </li>
    );
};
