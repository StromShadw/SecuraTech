import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceOne from '@/components/ServiceOne/ServiceOne';
import HeaderCloned from '@/components/Header/HeaderCloned';


export const metadata = {
    title: "Service Page || Tolak || NextJS Template For It Solution & Business",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout>
            <Header />
            <HeaderCloned />
            <PageHeader title="Service Page" subTitle="Services" />
            <ServiceOne titleTwo="two" />
            <MailTwo />
            <Footer />
        </Layout>
    );
};

export default page;