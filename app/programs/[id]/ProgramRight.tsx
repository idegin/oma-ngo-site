import React from 'react'

type Props = {}

export default function ProgramRight({ }: Props) {
    return (
        <>
            <div className="sidebar__post">
                <div className="sidebar-shape-1"
                    style={{ backgroundImage: "url(assets/images/shapes/sidebar-shape-1.png)" }}
                ></div>
                <h3 className="sidebar__title">Latest posts</h3>
                <ul className="sidebar__post-list list-unstyled">
                    <EachProgramSM />
                    <EachProgramSM />
                    <EachProgramSM />
                </ul>
            </div>
            <div className="donation-details__sidebar-shaare-cause">
                <div className="sidebar-shape-1"
                    style={{ backgroundImage: "url(assets/images/shapes/sidebar-shape-1.png)" }}
                ></div>
                <h3 className="donation-details__sidebar-shaare-cause-title">Share</h3>
                <div className="donation-details__sidebar-shaare-cause-social">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </>
    )
}


const EachProgramSM = () => {
    return <li>
        <div className="sidebar__post-image">
            <img src="https://dummyimage.com/720x700" alt="" />
        </div>
        <div className="sidebar__post-content">
            <h3>
                <span className="sidebar__post-content-meta"><i
                    className="fas fa-user-circle"></i> By admin</span>
                <a href="news-details.html">Promoting the rights
                    of children</a>
            </h3>
        </div>
    </li>
}