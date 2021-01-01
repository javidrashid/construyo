// import { useAuth } from 'hooks/useAuth';
import { useRequireAuth } from 'hooks/useRequireAuth';
const DashBoardPage = () => { 
   
//  const auth = useAuth();
const auth = useRequireAuth();
 if (!auth.user) return null;
 return (
  <div className="min-h-screen flex bg-gray-200">
   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="text-center mt-24">
     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
         Hello
      {`Welcome ${auth.user.name}!`}
     </h2>
     <p className="mt-2 text-center text-md text-gray-600">
      {`You are logged in with ${auth.user.email}`}
     </p>
    </div>
   </div>
  </div>
 );
};
export default DashBoardPage;