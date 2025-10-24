import React from "react";

type Props = {
    title: string;
    backgroundImage?: string;
    breadcrumb: {
        label: string;
        href: string;
    }[];
};

export default function PageHeroSection({
    title,
    backgroundImage,
    breadcrumb,
}: Props) {
    return (
        <>
            <section className='page-header'>
                <div
                    className='page-header-bg'
                    style={{
                        backgroundImage: `url(${backgroundImage || "/assets/images/backgrounds/page-header-bg.jpg"})`,
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        // backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className='container'>
                    <div className='page-header__inner'>
                        <ul className='thm-breadcrumb list-unstyled'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            {/* <li>
                                <span>/</span>
                            </li> */}
                            {breadcrumb?.map((item, index) => (
                                <React.Fragment key={item.href}>
                                    {breadcrumb.length > 1 && (
                                        <li>
                                            <span>/</span>
                                        </li>
                                    )}
                                    <li key={index}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                        <h2 className='capitalize'>{title}</h2>
                    </div>
                </div>
            </section>
        </>
    );
}
