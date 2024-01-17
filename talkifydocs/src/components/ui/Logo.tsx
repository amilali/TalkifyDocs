import React from 'react'

type Props = {
  link: string;
  name: string;
}

const logo = ({link, name}: Props) => {
  return (
    <img src={link} alt={name} className='w-96 mx-10	'/>
  )
}

export default logo;