import React from 'react'
import { FcCustomerSupport, FcAddressBook, FcCallback, FcShipped } from "react-icons/fc";
import { Link } from 'react-router-dom';

function ContactBar() {


    return (
        <div className='flex items-center justify-around  bg-black dark:bg-[#2e2b41] border-b border-black pl-8  dark:border-b dark:border-slate-200 dark:pl-8 '>
            <section className='relative top-2'>
                <FcAddressBook className='text-2xl lg:relative lg:top-1' />
                <p className=' dark:text-white text-white lg:relative lg:bottom-5 lg:left-8 font-advent text-lg '>
                    <Link to='mailto:servicioalcliente@importadorastar.com'>
                        ventas@importadorastar.com
                    </Link>
                </p>
            </section>
            <section className='relative top-2'>
                <FcCustomerSupport className='text-2xl lg:relative lg:top-1' />
                <p className='dark:text-white text-white text-lg font-advent lg:relative lg:bottom-5 lg:left-8'>
                    <Link to='https://wa.link/ha60z4'>
                        3123924999
                    </Link>
                </p>
            </section>
            <section className='relative top-2'>
                <FcCallback className='text-2xl lg:relative lg:top-1' />
                <p className='dark:text-white text-white lg:relative lg:bottom-5 lg:left-8 font-advent text-lg uppercase space-x-2'>
                    pbx:6014927230
                </p>
            </section>
            <section className='relative top-2'>
                <FcShipped className='text-2xl ' />
                <p className='dark:text-white text-white lg:relative lg:bottom-5 lg:left-8 font-advent text-lg  space-x-2'>
                    Envío grátis por pedidos superiores a $150.000
                </p>
            </section>
        </div>
    )
}

export default ContactBar
