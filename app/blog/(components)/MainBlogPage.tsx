import EachBlogPost from "@/components/EachBlogPost";
import EmptyBlogState from "@/components/EmptyBlogState";
import React from "react";
import { BlogDocument } from "@/prismicio-types";
import Pagination from "@/components/Pagination";

interface Props {
    blog: BlogDocument[];
    totalPages: number;
    currentPage: number;
}
const MainBlogPage = ({ blog, totalPages, currentPage }: Props) => {
    const handlePageChange = (newPage: number) => {
        // This will be handled by Next.js routing
        const url = new URL(window.location.href);
        url.searchParams.set("page", newPage.toString());
        window.location.href = url.toString();
    };
    return (
        <section className='news-page'>
            <div className='container'>
                <div className='row'>
                    {blog?.length ? (
                        blog.map((blog) => (
                            <EachBlogPost key={blog.id} blog={blog} />
                        ))
                    ) : (
                        <EmptyBlogState />
                    )}
                </div>
                {blog?.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        showFirstLast={true}
                        maxVisiblePages={5}
                    />
                )}
            </div>
        </section>
    );
};

export default MainBlogPage;
