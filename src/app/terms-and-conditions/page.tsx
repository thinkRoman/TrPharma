import Link from 'next/link';
import React from 'react';

const Terms = () => {
  return (
    <div className='relative mt-4 overflow-hidden py-20'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='max-w-96 relative mx-auto pb-20 text-center'>
          <h1 className='mb-2 text-2xl font-bold text-gray-800 sm:text-4xl'>
            TERMS OF USE
          </h1>
          <p className='mb-4 text-sm text-gray-600 sm:text-base'>
            Effective Date: August 15, 2023
          </p>
        </div>
      </div>
      <div className='relative px-4 sm:px-16 lg:px-64'>
        <div className='prose'>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            1. ACCEPTANCE OF TERMS
          </h2>
          <p className='mb-4 text-gray-800'>
            Welcome to [Your Company Name] ("we", "us", or "our"). These Terms
            of Use ("Terms") govern your access to and use of our website,
            services, applications, and content (collectively referred to as the
            "Services"). By accessing or using our Services, you agree to be
            bound by these Terms and our Privacy Policy. If you do not agree to
            these Terms, please refrain from using our Services.
          </p>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            2. CHANGES TO TERMS
          </h2>
          <p className='mb-4 text-gray-800'>
            We reserve the right to modify or replace these Terms at any time.
            Your continued use of the Services after changes constitute your
            acceptance of such changes. It is your responsibility to review
            these Terms periodically.
          </p>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            3. ACCESS TO SERVICES
          </h2>
          <p className='mb-4 text-gray-800'>
            To access certain features of the Services, you may need to register
            for an account. You agree to provide accurate, current, and complete
            information during registration and to update such information to
            keep it accurate, current, and complete.
          </p>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            4. INTELLECTUAL PROPERTY RIGHTS
          </h2>
          <p className='mb-4 text-gray-800'>
            The content, features, and functionality of the Services are owned
            by us and protected by applicable intellectual property laws. You
            may not reproduce, distribute, modify, create derivative works,
            publicly display, publicly perform, republish, download, store, or
            transmit any of the material on our Services.
          </p>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            5. LIMITATION OF LIABILITY
          </h2>
          <p className='mb-4 text-gray-800'>
            Your use of the Services is at your own risk. We will not be liable
            for any damages resulting from your use of the Services, including,
            but not limited to, direct, indirect, incidental, punitive, and
            consequential damages.
          </p>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            6. INDEMNIFICATION
          </h2>
          <p className='mb-4 text-gray-800'>
            You agree to indemnify and hold us harmless from and against any
            claims, actions, demands, liabilities, costs, or damages arising out
            of or related to your use of the Services.
          </p>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            7. PROHIBITED ACTIVITIES
          </h2>
          <p className='mb-4 text-gray-800'>
            As a user of the Services, you agree not to engage in prohibited
            activities including:
          </p>
          <ul className='mb-4 list-decimal'>
            <li className='mb-2 ml-8 text-gray-800'>
              Systematically retrieving data without written permission.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Tricking, defrauding, or misleading us or other users.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Circumventing security features of the Services.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Disparaging, tarnishing, or harming us or the Services.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Harassing, abusing, or harming others with Services' information.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Misusing support services or submitting false reports.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Violating applicable laws or regulations with Services' use.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Engaging in unauthorized framing or linking.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Uploading viruses, spam, or disruptive content.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Impersonating others or interfering with the Services.
            </li>
          </ul>

          <h2 className='mb-2 text-xl font-bold text-gray-900 '>
            8. OUR POLICY ON DATA GENERATED BY YOU AS A USER
          </h2>
          <p className='mb-4 list-none text-gray-800'>
            When creating and submitting content ("Contributions") through the
            Services, you hereby affirm and warrant that:
          </p>
          <ul className='mb-4 list-decimal'>
            <li className='mb-2 ml-8 text-gray-800'>
              Your Contributions do not infringe upon the rights of third
              parties.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              You possess all requisite licenses, permissions, and
              authorizations.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              You have obtained the necessary consents and approvals to utilize
              identifiable individuals' names or likenesses within your
              Contributions.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Your Contributions are factually accurate and devoid of any
              intentional misrepresentations.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Your Contributions are not unsolicited promotional material or
              objectionable content.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Your Contributions refrain from engaging in the derision, mockery,
              or abuse of any individuals or entities.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Your Contributions abstain from endorsing, inciting, or
              propagating any form of violence or violations of the law.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Your Contributions do not transgress the privacy or publicity
              rights of any third party.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Your Contributions are in full compliance with prevailing laws and
              regulations concerning the safeguarding of minors and their
              well-being.
            </li>
            <li className='mb-2 ml-8 text-gray-800'>
              Your Contributions do not include any remarks, context, or content
              that could be reasonably deemed offensive, defamatory, or in
              violation of our standards.
            </li>
          </ul>

          <p className='mb-4 text-gray-800'>
            Engaging in any action contrary to the above may result in the
            forfeiture of your rights to utilize the Services.
          </p>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            9. GOVERNING LAW AND JURISDICTION
          </h2>
          <p className='mb-4 text-gray-800'>
            These Terms and your use of the Services are governed by the laws of
            India. Any dispute arising from or related to these Terms or your
            use of the Services will be subject to the exclusive jurisdiction of
            the courts located within India.
          </p>
          <h2 className='mb-2 text-xl font-bold text-gray-900'>
            10. CONTACT INFORMATION
          </h2>
          <p className='mb-2 text-gray-800'>
            For any questions or concerns about these Terms, please contact us
            at:
          </p>
          <div className='mb-1 text-gray-800'>
            Email:{' '}
            <Link
              href='mailto:contact@thinkroman.com'
              className='text-blue-500 hover:text-blue-700'
            >
              contact@thinkroman.com
            </Link>
          </div>
          <p className='mb-1 text-gray-800'>
            Phone:{' '}
            <span className='text-blue-500 hover:text-blue-700'>
              +91 8169197853
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
