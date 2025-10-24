
export default function EachProgramCard() {
    return <>
        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            <div className="causes-one__single">
                <div className="causes-one__img">
                    <img src="/assets/images/resources/causes-1-2.jpg" alt=""/>
                    <div className="causes-one__cat">
                        <p>Medical</p>
                    </div>
                </div>
                <div className="causes-one__content">
                    <h3 className="causes-one__title">
                        <a href="/programs/123">It is a long
                        established
                        fact that a reader</a>
                    </h3>
                    <p className="causes-one__text">There are many of lorem, but majori have
                        suffered alteration in some form.</p>
                    <div className="causes-one__progress">
                        <div className="causes-one__progress-shape"
                             style={{ backgroundImage: "url(/assets/images/shapes/causes-one-progress-shape-1.png)"}}>
                        </div>
                        <div className="bar">
                            <div className="bar-inner count-bar" data-percent="36%">
                                <div className="count-text">36%</div>
                            </div>
                        </div>
                        <div className="causes-one__goals">
                            <p><span>$25,270</span> Raised</p>
                            <p><span>$30,000</span> Goal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
