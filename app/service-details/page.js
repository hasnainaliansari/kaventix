'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 0,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.cmn-prev',
    prevEl: '.cmn-next',
  },
  breakpoints: {
    1199: { slidesPerView: 1 },
    991: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
};

export default function ServiceDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [service, setService] = useState(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    async function fetchService() {
      const res = await fetch('/data/services.json');
      const data = await res.json();
      const matched = data.find((s) => String(s.id) === String(id));
      setService(matched);
    }
    if (id) fetchService();
  }, [id]);

  if (!service) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Services Details">
      <section className="Service-details pt-space pb-space">
        <div className="container">
          <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
            <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
              <img src={service.coverImage} alt="img" className="w-100" />
            </div>
            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
              {service.title}
            </h3>
            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
              {service.tags?.map((tag, idx) => (
                <Link key={idx} href="#" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
            <h4 className="mb-xxl-7 mb-4 white-clr">Service Overview</h4>
            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
              {service.overview.map((para, i) => (
                <p key={i} className="pra-clr challenge-pra1">{para}</p>
              ))}
            </div>
            <div className="finul-result">
              <h4 className="mb-xxl-3 mb-2 white-clr">Benefits With Our Service</h4>
              <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                <div className="fiial-result-list mb-md-0 mb-4">
                  <ul>
                    {service.benefits.slice(0, 3).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <ul>
                    {service.benefits.slice(3).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="result-progress-wrap">
                  {Object.entries(service.skills).map(([label, percent], i) => (
                    <div className="progres-item mb-xxl-6 mb-xl-5 mb-4" key={i}>
                      <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                        <span className="conssub">{label}</span>
                        <span className="cons">{percent}</span>
                      </div>
                      <div className="progress-solving">
                        <div className="progress-bar" style={{ width: percent }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {service.slides.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="study-thumb-slide w-100">
                    <img src={img} alt="img" className="w-100" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
              <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                <i className="fas fa-chevron-left" />
              </button>
              <span className="fw-bold white-clr previus-text text-capitalize">previous</span>
            </div>
            <h3 className="project-storke">Services</h3>
            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
              <span className="fw-bold white-clr previus-text text-capitalize">Next</span>
              <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
