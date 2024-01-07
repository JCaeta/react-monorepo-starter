import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    
    const myFunction = () => {
        router.replace('/another-path')
    }

    return (<>

    </>)
}
