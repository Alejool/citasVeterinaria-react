

function Error({mensaje}) {
  return (
    <>
      <div className='p-2 bg-rojo mb-2 uppercase rounded'>
          <p className=' text-white  font-bold font-sans'> {mensaje} </p> 
      </div>
    </>
  )
}

export default Error
