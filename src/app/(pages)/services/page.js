import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceOne from '@/components/ServiceOne/ServiceOne';
import HeaderCloned from '@/components/Header/HeaderCloned';


export const metadata = {
    title: "Services || Secura Tech ",
};

const page = () => {
    return (
        <Layout>
            <Header />
            <HeaderCloned />
            <PageHeader title="Services" subTitle="Services" />
            <ServiceOne titleTwo="two" />
            <MailTwo />
            <Footer />
        </Layout>
    );
};

export default page;