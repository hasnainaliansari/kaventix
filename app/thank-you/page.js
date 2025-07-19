"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function ThankYou(){
  return (
    <Layout>
      <section className="page-banner" style={{ marginTop: "8rem", textAlign: "center" }}>
        <div className="container">
          <h1 className="text-white">Thank You</h1>
          <p className="text-light">Your message has been successfully sent. We’ll get back to you soon!</p>
        </div>
      </section>

      <section className="contact-content bg1-clr py-20">
        <div className="container text-center">
          <div className="mb-8">
            <h2 className="white">We Appreciate Your Contact</h2>
            <p className="text-light">One of our team members will reach out to you shortly.</p>
          </div>
          <Link href="/" className="submit-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
