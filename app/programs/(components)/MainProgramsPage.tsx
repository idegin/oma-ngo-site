"use client";
import React from "react";
import EachProgramsLG from "./EachProgramsLG";
import Pagination from "@/components/Pagination";
import EmptyProgramsState from "@/components/EmptyProgramsState";
import { ProgramDocument } from "@/prismicio-types";

interface MainProgramsPageProps {
    programs: ProgramDocument[];
    currentPage: number;
    totalPages: number;
}
const MainProgramsPage = ({
    programs,
    currentPage,
    totalPages,
}: MainProgramsPageProps) => {
    const handlePageChange = (newPage: number) => {
        // This will be handled by Next.js routing
        const url = new URL(window.location.href);
        url.searchParams.set("page", newPage.toString());
        window.location.href = url.toString();
    };
    return (
        <div className='donations-list'>
            <div className='container'>
                <div className='donations-list__inner'>
                    {programs?.length ? (
                        programs.map((program) => (
                            <EachProgramsLG
                                key={program.uid}
                                program={program}
                            />
                        ))
                    ) : (
                        <EmptyProgramsState />
                    )}
                </div>

                {/* Pagination Component */}
                {programs?.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        showFirstLast={true}
                        maxVisiblePages={5}
                    />
                )}
            </div>
        </div>
    );
};

export default MainProgramsPage;
