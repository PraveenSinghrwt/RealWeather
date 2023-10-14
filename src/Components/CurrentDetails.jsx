export default function CurrentDetails({ humidity, windSpeed, airPressure, uv, visible, cloud }) {
    return (
        <>
            <h1 className='text-gray-200 text-base ml-6'>Weather details</h1>
            <div className=' text-white grid grid-cols-2 sm:grid-cols-3 m-3 mt-0 xl:hidden'>
                <div className=' m-2 py-3 pl-2 bg-slate-700 rounded-md flex items-center'>
                    <img className=' w-8 h-8' src='https://cdn-icons-png.flaticon.com/128/6566/6566344.png' alt="" />
                    <div className=' pl-3'>
                        <p className=" text-gray-300 text-sm">Humidity</p>
                        <p className=' text-xl'> {humidity} <span className='text-sm'>%</span></p>
                    </div>
                </div>
                <div className=' m-2 py-3 pl-2 bg-slate-700 rounded-md flex items-center'>
                    <img className=' w-8 h-8' src='https://cdn-icons-png.flaticon.com/128/4006/4006069.png' alt="" />
                    <div className=' pl-3'>
                        <p className=" text-gray-300 text-sm">Wind Speed</p>
                        <p className=' text-xl'> {windSpeed} <span className='text-sm'>km/h</span></p>
                    </div>
                </div>
                <div className=' m-2 py-3 pl-2 bg-slate-700 rounded-md flex items-center'>
                    <img className=' w-8 h-8' src='https://cdn-icons-png.flaticon.com/128/11129/11129055.png' alt="" />
                    <div className=' pl-3'>
                        <p className=" text-gray-300 text-sm">Air Pressure</p>
                        <p className=' text-xl'> {airPressure} <span className='text-sm'>hPa</span></p>
                    </div>
                </div>
                <div className=' m-2 py-3 pl-2 bg-slate-700 rounded-md flex items-center'>
                    <img className=' w-8 h-8' src='https://cdn-icons-png.flaticon.com/128/439/439842.png' alt="" />
                    <div className=' pl-3'>
                        <p className=" text-gray-300 text-sm">UV</p>
                        <p className=' text-xl'> {uv} </p>
                    </div>
                </div>
                <div className=' m-2 py-3 pl-2 bg-slate-700 rounded-md flex items-center'>
                    <img className=' w-8 h-8' src='https://cdn-icons-png.flaticon.com/128/607/607554.png' alt="" />
                    <div className=' pl-3'>
                        <p className=" text-gray-300 text-sm">Visibility</p>
                        <p className=' text-xl'> {visible} <span className='text-sm'>km</span></p>
                    </div>
                </div>
                <div className=' m-2 py-3 pl-2 bg-slate-700 rounded-md flex items-center '>
                    <img className=' w-8 h-8' src='https://cdn-icons-png.flaticon.com/128/1146/1146869.png' alt="" />
                    <div className=' pl-3'>
                        <p className=" text-gray-300 text-sm">Cloud</p>
                        <p className=' text-xl'> {cloud} </p>
                    </div>
                </div>
            </div>
        </>

    )
}
