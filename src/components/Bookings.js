import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import Bookinglist from './Bookinglist'
import Head from './Head'

const Bookings = () => {
  /* TODO: id und Datenbankanbindung */
  const { data: products } = useFetch('http://localhost:8000/products/')
  const { data: appointments, error, isPending } = useFetch(
    'http://localhost:8000/appointments'
  )

  return (
    <>
      <Head title="Termine" />
      <div class="Bookings">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {appointments && products && (
          <Bookinglist appointments={appointments} products={products} />
        )}
      </div>
    </>
  )
}

export default Bookings
