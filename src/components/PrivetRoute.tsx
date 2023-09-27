import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import { useAppSelector } from '../redux/hook';

const PrivetRout = ({children}:{ children: ReactNode }) => {
    const email = useAppSelector((state) => state.user.user.email);
    const location= useLocation();

    if(email){
        return children;
    }
    return  <Navigate to='/signin' state={{ from: location }} replace></Navigate> 
};

export default PrivetRout;