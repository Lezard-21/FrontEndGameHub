import thisIsFine from '../assets/this-is-fine.gif'

const NotFound = () => {
  return (
    <>
      <h1 >Pagina no encontrada</h1>
      <img src={thisIsFine} alt='this is fine' className='w-full max-w-md mx-auto mt-10' />
    </>
  )
}

export default NotFound
