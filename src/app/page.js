import HomeLoader from '@/components/globallyUseComponents/HomeLoader'
import FooterTopBanner from '@/components/home/FooterTopBanner'
import ContactShutterBanner from '@/components/home/ContactShutterBanner'
import React from 'react'
import ContactForm from '@/components/home/ContactForm'
import ClientsBanner from '@/components/home/ClientsBanner'
import ScrollExperience from '@/components/scroll/ScrollExperience'
import Navbar from '@/components/navigation/Navbar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ScrollExperience/>
      <HomeLoader/>
      <ClientsBanner/>
      <ContactForm/>
      <ContactShutterBanner/>
      <FooterTopBanner/>
    </div>
  )
}

export default page
