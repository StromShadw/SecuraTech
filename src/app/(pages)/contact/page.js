import ContactTwo from '@/components/ContactTwo/ContactTwo';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeaderCloned from '@/components/Header/HeaderCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';


export const metadata = {
    title: "Contact || SecuraTech",
};

const page = () => {
    return (
        <Layout>
            <Header/>
            <HeaderCloned/>
            <PageHeader title="Contact Page" subTitle="Contact" />
            <ContactTwo contact="page" />
            <MailTwo />
            <Footer />
        </Layout>
    );
};

export default page;