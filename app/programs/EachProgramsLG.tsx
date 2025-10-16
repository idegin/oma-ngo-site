import React from 'react'

type Props = {}

export default function EachProgramsLG({ }: Props) {
    return (
        <>
            <div className="donations-list__single">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="donations-list__img md:h-[460px] h-[15rem] overflow-hidden md:rounded-bl-3xl">
                            <img src="https://images.unsplash.com/photo-1760592150404-adacb88548e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="donations-list__right">
                            <div className="donations-list__content">
                                <div className="donations-list__category">
                                    <p>Education</p>
                                </div>
                                <h3 className="donations-list__title"><a href="/programs/3">Let’s
                                    education for children get good life</a></h3>
                                <p className="donations-list__text">There are many of lorem, but majori have
                                    suffered alteration in some form. Et ligula ullamcorper malesuada proin
                                    libero nunc. Quis vel eros donec ac odio tempor. Cursus in hac habitasse
                                    platea.</p>
                                <div className="donations-list__progress">
                                    <div className="donations-list__progress-shape"
                                        style={{ backgroundImage: "url(assets/images/shapes/donations-list-progress-shape-1.png)" }}
                                    >
                                    </div>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="47%">
                                            <div className="count-text">47%</div>
                                        </div>
                                    </div>
                                    <div className="causes-one__goals">
                                        <p><span>570</span> Enrolled</p>
                                        <p><span>30,000</span> Goal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}