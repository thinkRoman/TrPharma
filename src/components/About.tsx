import Image from 'next/image'

import { Container } from '@/components/Container'

import AboutImg from '~/images/about-img.jpg'

export function About() {
  return (
    <Container id='about' className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-center mb-6">ABOUT US</h3>
        <p className="text-center text-gray-600 mb-8">Your Health and Wellness Partner</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-600">
            At TrPharma, we stand at the unique crossroads of clinical expertise and pharmaceutical innovation. Our
            leadership team brings together extensive experience from both the world of clinical care and the
            pharmaceutical industry, a combination that sets us apart in our mission to transform healthcare. With a
            deep understanding of patient needs gained from years of direct clinical experience, and a sharp focus
            on the cutting-edge advancements in pharmaceuticals, we are uniquely positioned to bridge the gap
            between traditional healthcare and modern medical solutions. Our dual foundation empowers us to develop,
            produce, and provide healthcare products and services that are not only effective but truly tailored to
            the communities we serve. At TrPharma, we are dedicated to advancing health and wellness by integrating
            the best of clinical insights with the latest in pharmaceutical achievements.
          </p>
          <Image
            src={AboutImg}
            alt="About Us"
            className="w-full h-auto object-cover rounded-md"
            width="400"
            height="300"
          />
        </div>
      </div>
    </Container>
  )
}