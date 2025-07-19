"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Service1() {
  const [isAccordion, setIsAccordion] = useState(1);
  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <section className="service-section pt-space pb-space">
        <div className="container position-relative">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
            <div className="pricing-title">
              <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                WHAT WE OFFER
              </div>
              <h2 className="stitle">
                Most <span className="fw-400">experienced</span> services
              </h2>
            </div>
            <Link
              href="/service"
              className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2"
            >
              View All Service
              <span className="rot60 d-inline-block">
                <i className="fas fa-arrow-up theme-clr" />
              </span>
            </Link>
          </div>
          {/*Service Tabing section*/}
          <div className="row g-xxl-6 g-4">
            <div className="service-tabing-wrap Faqs-section">
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${
                  isAccordion === 1 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(1)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        01
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/service-details?id=1"
                          className="white-clr whitehover"
                        >
                          Frontend Development
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        We create pixel-perfect, responsive interfaces using
                        modern frameworks that deliver seamless user experiences
                        across devices.
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> React, Next.js,
                          Vue.js
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Tailwind CSS,
                          SCSS, MUI
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Responsive
                          UI/UX
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Cross-browser
                          compatibility
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="/assets/img/service/tab1.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${
                  isAccordion === 2 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(2)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        02
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/service-details?id=2"
                          className="white-clr whitehover"
                        >
                          Backend Development
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        Robust and scalable server-side solutions — built to
                        handle performance, security, and real-time data at
                        scale.
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Node.js, PHP,
                          Laravel, Django
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> REST & GraphQL
                          APIs
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Database
                          Architecture (MySQL, MongoDB)
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Authentication
                          & Role Management
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="/assets/img/service/tab2.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${
                  isAccordion === 3 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(3)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        03
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/service-details?id=3"
                          className="white-clr whitehover"
                        >
                          Mobile App Development
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        We design and develop high-performance mobile apps that
                        feel native — and work seamlessly across platforms with
                        modern tech stacks.
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Flutter, React
                          Native, Swift
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> iOS & Android
                          Development
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Firebase &
                          Firestore Integration
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> App Store &
                          Play Store Deployment
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="/assets/img/service/tab3.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 4 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(4)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        04
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/service-details?id=4"
                          className="white-clr whitehover"
                        >
                          QA & Testing
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        Our QA process ensures your product is rock solid —
                        across every screen, flow, and edge case.
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Manual &
                          Automated Testing
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Bug Reporting &
                          Regression Testing
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Performance
                          Audits
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" />{" "}
                          Cross-browser/device QA
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="/assets/img/service/tab4.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 5 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(5)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        05
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/service-details?id=5"
                          className="white-clr whitehover"
                        >
                          Graphic & Video Content
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        We craft scroll-stopping visuals and edits that tell
                        your story and fuel engagement across all channels.
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Brand Identity
                          & Social Creatives
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Reels, YouTube
                          & Ad Videos
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Explainers &
                          Animations
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Post-production
                          & Editing
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="/assets/img/service/tab5.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 6 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(6)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        06
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/service-details?id=6"
                          className="white-clr whitehover"
                        >
                          Social Media Management
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        We manage and grow your social presence with consistent,
                        creative, and strategy-driven content.
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Content
                          Planning & Posting
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Brand Voice
                          Development
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Community
                          Engagement
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Multi-Platform
                          Strategy
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="/assets/img/service/tab6.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 7 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(7)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        07
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/service-details?id=7"
                          className="white-clr whitehover"
                        >
                          Marketing & SEO
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        We drive results through high-converting campaigns and
                        organic growth strategies tailored to your goals.
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Google & Meta
                          Ads
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> SEO Audit &
                          On-Page Optimization
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Keyword &
                          Content Strategy
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Analytics &
                          Conversion Tracking
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="/assets/img/service/tab7.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 8 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(8)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        08
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/service-details?id=8"
                          className="white-clr whitehover"
                        >
                          Business Consulting
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        We help startups and enterprises shape strategies,
                        optimize workflows, and turn digital challenges into
                        business growth.
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Startup & Tech
                          Consulting
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Digital
                          Transformation
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Product
                          Strategy & Roadmapping
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Workflow
                          Automation & Scaling
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="/assets/img/service/tab8.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Service Tabing section*/}
        </div>
      </section>
    </>
  );
}
