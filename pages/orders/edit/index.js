import {useRequireAuth} from '../../../hooks/useRequireAuth';

import {useRouter}  from "next/router";
import { useEffect } from 'react';


const EditOrderTestPage = () => {
    const auth = useRequireAuth();
    const router = useRouter();
    
   useEffect(() => {
    if (!auth.user) {
        console.log('Not Authorised...');
        //router.push('/login')
    }
   })

    return <h1>Hello Test Page , You are {JSON.stringify(auth.user)}</h1>
}

export default EditOrderTestPage;