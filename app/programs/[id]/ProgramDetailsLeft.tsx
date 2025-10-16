import PostCTA from '@/components/PostCTA'
import React from 'react'

type Props = {}

export default function ProgramDetailsLeft({ }: Props) {
    return (
        <>
            <div className='donation-details__left'>
                <div className='donation-details__top'>
                    <div className="donation-details__img">
                        <img src="https://dummyimage.com/720x400" alt="" />
                        <div className="donation-details__date">
                            <p>Medical</p>
                        </div>
                    </div>
                    <div className="donation-details__content">
                        <h3 className="donation-details__title">Let’s education for children get good life</h3>
                        <p className="donation-details__text">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. There are many variations of passages of Lorem Ipsum available,
                            but the majority have alteration in some injected or words which don't look even
                            slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                            to be sure there isn't anything embarrang hidden in the middle of text. All the
                            Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                            necessary, making this the first true generator on the Internet. It uses a
                            dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks reasonable. </p>
                    </div>
                </div>
                <PostCTA />
            </div>

        </>
    )
}