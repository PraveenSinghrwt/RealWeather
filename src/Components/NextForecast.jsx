export default function NextForecast(props) {

    return (
        <>
            <div className=' text-white text-lg font-semibold ml-5 mt-[0.3rem]'>6 days Weather forecast</div>
            <div className='grid grid-cols-2 m-2 md:grid-cols-3 2xl:grid-cols-6 mt-[0.1rem]'>
                <style>{`.overflow-x-scroll::-webkit-scrollbar {display: none; /* Hide the scrollbar */}`}</style>

                {props.data.map(data => {
                    return (
                        <div key={data.date} className=' flex flex-col justify-between items-center bg-slate-700 text-white rounded-2xl shadow-md shadow-slate-800 m-1 px-4 py-2 text-center '>
                            <div className=' font-semibold text-sm md:text-base'>{data.date}</div>
                            <img className=' w-12 md:w-16 ' src={data.day.condition.icon} alt="" />
                            <p className=' text-sm md:text-base'>{data.day.condition.text}</p>
                            <div className=' mt-3 '>
                                <div className=' font-semibold text-sm md:text-base'>{data.day.mintemp_c}° / {data.day.maxtemp_c}°</div>
                                <div className=' text-sm md:text-base'>Wind : {data.day.maxwind_mph} mph</div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
