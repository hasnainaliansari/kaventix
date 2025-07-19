
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}

export default function Testimonial1() {
    return (
        <>

            <section className="testimonial-version01-section pt-20 pb-space position-relative">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-11">
                            <div className="swiper testimonial-version01 position-relative">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version01.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    We worked with Kavantix to develop our mobile app and honestly, the results blew us away. Clean code, smooth UI, and delivered ahead of schedule. We’ve already recommended them to others.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Jason Miller
                                                    </h6>
                                                    <span className="theme-clr">
                                                        Co-Founder, MoveIt App (California)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version02.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    The monthly development support from Kavantix is worth every dollar. Anytime we need updates, bug fixes, or a new feature, they’re right there — quick and reliable. It feels like we have a full tech team on call.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Emily Davis
                                                    </h6>
                                                    <span className="theme-clr">
                                                        Product Manager, FreshCart Inc. (Texas)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version01.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    We hired Kavantix for full website design and branding, and the results were stunning. Our online sales doubled within the first two months of launch. They know exactly what they’re doing.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Michael Thompson
                                                    </h6>
                                                    <span className="theme-clr">
                                                        CEO, PureGlow Cosmetics (New York)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version02.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    Excellent experience! From our mobile app to backend systems and admin panel — everything was delivered on time and exceeded expectations. Kavantix kept us updated every step of the way.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Rachel Lee
                                                    </h6>
                                                    <span className="theme-clr">
                                                        COO, TutorEase (Chicago)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version01.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    Kavantix’s QA and testing services helped us catch major issues before our SaaS product went live. Thanks to them, our product launch was smooth and bug-free.
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        David Anderson
                                                    </h6>
                                                    <span className="theme-clr">
                                                        CTO, TaskPilot (Seattle)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                            <div className="thumb">
                                                <img src="/assets/img/testimonial/t-version02.png" alt="img" />
                                            </div>
                                            <div className="vector d-md-block d-none">
                                                <img src="/assets/img/testimonial/vector01.png" alt="img" />
                                            </div>
                                            <div className="content ps-md-10">
                                                <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                    <i className="fas fa-quote-right theme-clr" />
                                                </div>
                                                <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                    We needed a complete digital presence — website, branding, and marketing assets. Kavantix handled everything with creativity and professionalism. Highly recommend!
                                                </p>
                                                <div className="desig">
                                                    <h6 className="white-clr mb-2">
                                                        Amanda Walker
                                                    </h6>
                                                    <span className="theme-clr">
                                                        Founder, Studio Nest (Florida)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-button gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                    <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                        <i className="fas fa-chevron-up" />
                    </button>
                    <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                        <i className="fas fa-chevron-down" />
                    </button>
                </div>
            </section>
        </>
    )
}
