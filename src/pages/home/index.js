import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Karim Moataz portfolio Website</title>
          <meta name="description" content={meta.description} />
          <meta name="google-site-verification" content="e113PkTDovvsK5rpebGzsevaYibyWDId9yR_O-lcjJI" />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats shadow">
        <div className="stats-container">
          <div className="stat">
            <div className="stat-title">Experience</div>
            <div className="stat-value">2 Years</div>
            <div className="stat-desc">Since nov 2022</div>
          </div>
          <div className="stat">
            <div className="stat-title">Skills</div>
            <div className="stat-value">30</div>
            <div className="stat-desc">50% more than last Year</div>
          </div>
          <div className="stat">
            <div className="stat-title">projects finished</div>
            <div className="stat-value">10</div>
            <div className="stat-desc">70% more than last Year</div>
          </div>
        </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
