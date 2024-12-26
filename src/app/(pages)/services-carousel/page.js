
import Footer from '@/components/Footer/Footer';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceOneCarousel from '@/components/ServiceOneCarousel/ServiceOneCarousel';
import React from 'react';

export const metadata = {
    title: "Service Carousel || Tolak || NextJS Template For It Solution & Business",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Service Carousel" subTitle="Services" />
            <ServiceOneCarousel />
            <MailTwo />
            <Footer />

        </Layout>
    );
};

export default page;