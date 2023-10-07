import React, { useEffect } from 'react'

export default function NextForecast(props) {

    return (
        <>
            <div className=' text-white text-lg font-semibold ml-5 mt-[0.1rem]'>5 days Weather forecast</div>
            <div className='grid grid-flow-col mt-[0.1rem]'>
                <style>{`.overflow-x-scroll::-webkit-scrollbar {display: none; /* Hide the scrollbar */}`}</style>

                {props.data.map(data => {
                    return (
                        <div key={data.date} className='ml-4 flex flex-col justify-between items-center bg-slate-700 text-white rounded-2xl shadow-md shadow-slate-800 m-2 px-4 py-2 text-center '>
                            <div className=' font-semibold'>{data.date}</div>
                            <img className='w-16' src={data.day.condition.icon} alt="" />
                            <p className=' '>{data.day.condition.text}</p>
                            <div className='text-start mt-1'>
                                <div className=' font-semibold'>{data.day.mintemp_c}° / {data.day.maxtemp_c}°</div>
                                <div>Wind : {data.day.maxwind_mph} mph</div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
