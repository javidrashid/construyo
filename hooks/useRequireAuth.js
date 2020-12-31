
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'hooks/useAuth';
export const useRequireAuth = () => {
 const auth = useAuth();
 const router = useRouter();
useEffect(() => {
  alert('Checking Auth Status', auth.user);
  if (auth.user === false) {
   router.push('/login');
  }
 }, [auth, router]);
 
 return auth;
};