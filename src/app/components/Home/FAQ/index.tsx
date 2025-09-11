'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-lg font-normal text-white text-center mb-6'>FAQ</p>
          <h2 className='text-white text-center max-w-3xl mx-auto'>
            Frequently asked questions.
          </h2>
          <div className='w-full px-4 pt-16'>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                        What services does Sneitech Inc. provide?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''
                          }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border'>
                      <div className='lg:max-w-70%'>
                        We offer end-to-end technology solutions, including custom software development,
                        system integration, mobile and web applications, UI/UX design,
                        IT consulting, and ongoing maintenance
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Which industries do you work with?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''
                          }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                        Our solutions are industry-agnostic. We build digital products for businesses of all sizes,
                        from startups to enterprises, across sports, education, finance, retail, and beyond.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>What technologies do you use?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''
                          }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                        We leverage modern technologies such as C#, .NET, Pythno, React, Next.js, Node.js, cloud platforms, 
                        and API integrations to build scalable, future-ready solutions.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Do you provide long-term support?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''
                          }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                        Yes. We offer dedicated maintenance and customer support services to ensure your systems remain secure,
                        optimized, and up to date.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Where are you located?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''
                          }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                        Sneitech Inc. is based in Ghana, with the capability to serve clients worldwide through remote collaboration.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
