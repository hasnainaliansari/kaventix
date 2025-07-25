export default function Product1() {
  return (
    <>
      <section className="about-product pt-space">
        <div className="container">
          <div className="row g-xxl-7 g-5">
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div
                className="about-product-thumb w-100"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="/assets/img/about/about-v1thumb.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-product-content ps-xxl-10">
                <div className="pricing-title">
                  <div
                    className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="fade-up-right"
                    data-aos-duration={1500}
                  >
                    WE PROUD THAT
                  </div>
                  <h2
                    className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4"
                    data-aos="fade-up"
                    data-aos-duration={1600}
                  >
                    Discover{" "}
                    <span className="fw-400 theme-clr">Our Awards</span>
                  </h2>
                  <p
                    className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6"
                    data-aos="fade-up"
                    data-aos-duration={1900}
                  >
                    From building beautiful apps to launching viral campaigns —
                    our work speaks louder than words. These awards are a nod to
                    the passion, precision, and creativity behind everything we
                    deliver.
                  </p>
                  <div
                    className="discover-dating"
                    data-aos="fade-up"
                    data-aos-duration={2200}
                  >
                    <div className="allyear d-flex align-items-center justify-content-between mb-xxl-4 mb-xl-3">
                      <h5 className="fw-medium theme-clr">2022</h5>
                      <h5 className="fw-medium theme-clr">2023</h5>
                      <h5 className="fw-medium theme-clr">2024</h5>
                    </div>
                    <div className="allyear-content d-flex justify-content-between">
                      <div className="allyear-item">
                        <h5 className="white-clr mb-xxl-3 mb-2">First App Launch</h5>
                        <span className="spantext-clr">App of the Month</span>
                      </div>
                      <div className="allyear-item">
                        <h5 className="white-clr mb-xxl-3 mb-2">Responsive Site</h5>
                        <span className="spantext-clr">
                          Responsive Masters
                        </span>
                      </div>
                      <div className="allyear-item">
                        <h5 className="white-clr mb-xxl-3 mb-2">Organic Experts</h5>
                        <span className="spantext-clr">7M+ Views for Client</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
