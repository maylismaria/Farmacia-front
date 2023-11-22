
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
            <div className='w-full bg-purple-900 text-white flex justify-center py-4'>

                    <p className='text-xl font-bold'>
                            FARMACIA VIVA SAÚDE | Copyright: {data}
                        </p>
                    
                </div>
            </div>
        </>
    )
}

export default Footer