import React from 'react'

type Props = {}

export default function PostCTA({ }: Props) {
    return (
        <div className="donation-details__donate">
            <div className="donation-details__donate-shape"
                style={{ backgroundImage: "url(assets/images/shapes/donation-details-donate-shape.png)" }}
            >
            </div>
            <div className="donation-details__donate-left">
                <ul className="list-unstyled donation-details__donate-list">
                    <li>
                        <div className="icon">
                            <span className="icon-solidarity"></span>
                        </div>
                        <div className="text">
                            <span>Raised</span>
                            <p>$25,270</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <span className="icon-target-1"></span>
                        </div>
                        <div className="text">
                            <span>Goal</span>
                            <p>$30,000</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="donation-details__donate-btn">
                <a href="donate-now.html" className="thm-btn">Donate now</a>
            </div>
        </div>
    )
}