
import Footer from '@/components/Footer/Footer';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
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
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Technology Service" subTitle="Service Details" />
            <ServiceDetails />
            <MailTwo />
            <Footer />
        </Layout>
    );
};

export default page;