import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/bg04.jpg'), position: 'center' },
    { url: require('../assets/images/bg05.jpg'), position: 'center' },
    { url: require('../assets/images/bg06.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <EmailForm />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
