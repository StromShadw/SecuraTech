
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeaderCloned from '@/components/Header/HeaderCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails';
import React from 'react';

export const metadata = {
    title: "Technology Services || Secura Tech"
};

const page = () => {
    return (
        <Layout>
            <Header />
            <HeaderCloned />
            <PageHeader title="Web Development" subTitle="Service Details" />
            <ServiceDetails />
            <MailTwo />
            <Footer />
        </Layout>
    );
};

export default page;