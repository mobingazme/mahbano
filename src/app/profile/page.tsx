'use client'
import ProfilePage from "@/template/profilePage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const token = Cookies.get('authToken')
function Page() {
    const router = useRouter()
    useEffect(() => {
        if (!token) {
            router.replace('/signup'); 
        }
    }, []);
    return <ProfilePage/>
}

export default Page;


