import PostCTA from "@/components/PostCTA";
import {
    CategoriesDocument,
    CategoriesDocumentData,
    ProgramDocument,
} from "@/prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

interface Props {
    program: ProgramDocument;
}

export default function ProgramDetailsLeft({ program }: Props) {
    const category = program?.data
        ?.category as unknown as CategoriesDocumentData;
    return (
        <>
            <div className='donation-details__left'>
                <div className='donation-details__top'>
                    <div className='donation-details__img'>
                        <img
                            src={program?.data?.featured_image?.url || ""}
                            alt={program?.data?.title || ""}
                        />
                        <div className='donation-details__date'>
                            <p>{category?.title}</p>
                        </div>
                    </div>
                    <div className='donation-details__content'>
                        <h3 className='donation-details__title'>
                            {program?.data?.title}
                        </h3>
                        <div className='donation-details__text'>
                            <PrismicRichText field={program?.data?.content} />
                        </div>
                    </div>
                </div>
                <PostCTA />
            </div>
        </>
    );
}
