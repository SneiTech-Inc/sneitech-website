import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='text-3xl font-semibold'>
      <Image
        src='https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561515/sneitech-logo_qqfmfr.png'
        width={100}
        height={100}
        alt='sneitech-logo'
        className='object-contain w-46'
      />
    </Link>
  )
}

export default Logo
