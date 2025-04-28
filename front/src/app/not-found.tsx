import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <Image src="404.svg" width={500} height={500} alt='Page not found image'/>
        <Link href={"/"} className='text-2xl font-bold text-slate-500'>
            <Button>Return Home</Button>
        </Link>
    </div>
  )
}