import Footer from "@/components/Footer/Footer";
import HeaderCloned from "@/components/Header/HeaderCloned";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectTwo from "@/components/ProjectsTwo/ProjectsTwo";
import ProjectThree from "@/components/ProjectThree/ProjectThree";
import ProjectOne from "@/components/ProjectOne/ProjectOne.jsx";
import React from "react";

export const metadata = {
  title: "Our Protfolio || SecuraTech",
};

const projectPage = () => {
  return (
    <Layout >
      <Header />
      <HeaderCloned />
      <PageHeader title='Our Protfolio' subTitle='Project' />
      <ProjectTwo />
      <MailTwo />
      <Footer />
    </Layout>
  );
};

export default projectPage;
