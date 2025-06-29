const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-white'>
      <div className='w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default LoadingSpinner
  