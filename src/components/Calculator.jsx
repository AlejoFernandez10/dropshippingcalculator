'use client'


import React, {useState} from 'react'

const Calculator = () => {

  const [costoInicial, setCostoInicial] = useState()

  const promedioEnvio = 120;
  const costoAdministrativo = 20


  const cpa = Math.round(costoInicial + promedioEnvio + costoAdministrativo + (18/8))

  const costoTotal = costoInicial + promedioEnvio + costoAdministrativo + cpa

  return (
    <section className='flex flex-col gap-2'>


      <label htmlFor="cost">Costo de producto</label>
      <input name='cost' type="number" onChange={(e)=> setCostoInicial(e.target.value)} className='border border-gray-500 bg-transparent py-1 rounded-lg text-gray-100' />

      {costoInicial ? 
      <p> {resultado} </p>
      :
      <p>Ingresa el precio de costo</p>  
    }

    </section>
  )
}

export default Calculator