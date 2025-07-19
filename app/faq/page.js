'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
    const [isAccordion, setIsAccordion] = useState(0)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="FAQ’S">
                <section className="Faqs-section pt-space pb-space">
                    <div className="container">
                        <div className="faqs-title text-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
                            <Link href="/blog-details" className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                FAQ’S
                            </Link>
                            <h2 className="stitle">
                                Frequently asked <span className="fw-400">questions</span>
                            </h2>
                        </div>
                        <div className="row g-xxl-7 g-lg-6 g-0 justify-content-center">
                            <div className="col-lg-6">
                                <div className="faq">
                                    <div className="accordion-section">
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 1 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(1)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    What services do you offer?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        We specialize in web design, web development, mobile app development, UI/UX design, branding, and digital strategy. Whether you're a startup or a large enterprise, we offer tailored solutions to fit your business goals.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 2 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(2)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    How long does it take to complete a project?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Project timelines vary depending on the complexity and scope. A typical website takes 3–6 weeks, while custom apps or platforms can take 2–3 months. We’ll give you a clear timeline after understanding your requirements.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 3 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(3)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Do you only work with businesses in specific industries?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Not at all. We’ve worked with clients across various industries, including tech, eCommerce, healthcare, education, finance, and more. We love exploring new domains and building creative, functional solutions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 4 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(4)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Will my website be mobile-friendly and responsive?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Absolutely. Every website and app we design is fully responsive, ensuring a seamless experience across all screen sizes and devices — from desktops to smartphones.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq">
                                    <div className="accordion-section">
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 5 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(5)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Can I update my website content after it's launched?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Yes. We either integrate a user-friendly CMS (like WordPress or a custom dashboard) or train you on how to update content easily without needing to code.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 6 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(6)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    Do you offer ongoing support and maintenance?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Yes, we offer various maintenance packages to keep your website or app up-to-date, secure, and performing at its best. Support can include bug fixes, updates, backups, and feature improvements.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 7 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(7)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    How much do your services cost?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 7 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Our pricing is based on project requirements, complexity, and timelines. Once we understand your goals, we’ll provide a custom quote that aligns with your budget and expectations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 8 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(8)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    How do we get started?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 8 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Simply fill out our contact form or schedule a free consultation. We’ll discuss your project, understand your vision, and guide you through the next steps toward turning your idea into reality.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}