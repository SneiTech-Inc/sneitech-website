'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'
import { servicesData } from '@/app/types/services'

const Services = () => {
    // fetch about data
    const [about, setAbout] = useState<servicesData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setAbout(data.Servicedata)
            } catch (error) {
                console.error('Error fetching services:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <section id='Services' className=' bg-cover bg-center overflow-hidden'>
            <div className='container mx-auto max-w-7xl px-4 relative z-1'>
                <div className='p-12 bg-grey rounded-3xl'>
                    <Image
                        src='/images/aboutus/dots.svg'
                        width={100}
                        height={100}
                        alt='dots-image'
                        className='absolute bottom-1 -left-20'
                    />
                    <p className='text-center text-gray-700 text-lg tracking-widest uppercase mt-10'>
                        our services
                    </p>
                    <h2 className='text-center pb-12'>
                        How We Can <span className="text-blue-600   ">Help</span> You
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
                        {loading
                            ? Array.from({ length: 3 }).map((_, index) => (
                                <AboutSkeleton key={index} />
                            ))
                            : about.map((item, i) => (
                                <div
                                    key={i}
                                    className='hover:bg-blue-700 bg-white rounded-3xl p-8 shadow-xl group'>
                                    <Image
                                        src={item.imgSrc}
                                        alt={item.imgSrc}
                                        width={50}
                                        height={50}
                                        className='mb-5 group-hover:bg-white'
                                    />
                                    <h5 className='group-hover:text-white mb-5'>
                                        {item.heading}
                                    </h5>
                                    <div className="space-y-3 sm:space-y-4">
                                        {item.description.map((desc, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <div className="w-2 h-2 rounded-full group-hover:bg-white bg-primary flex-shrink-0"></div>
                                                <span className='group-hover:text-white text-darkmode'>{desc.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
