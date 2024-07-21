import React from 'react'
import { useRouteError } from 'react-router-dom'
import ErrorPict from "../../pictures/error.jpeg"
const ErrorPage = () => {
  const error = useRouteError();
  return (
      <div className='flex flex-col justify-center items-center h-screen sm:h-[95vh] lg:h-[90vh]'>
            <img src={ErrorPict} alt="error" />
            <h1 className='poppins-bold text-4xl tracking-wide md:text-5xl'>Oops!</h1>
            <p className='poppins-medium text-lg mt-3 md:text-4xl md:mt-4'>Error {error.status} Page {error.statusText}</p>
      </div>
  )
}

export default ErrorPage