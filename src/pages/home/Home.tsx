
function Home() {
    return (
        <>
            <div className="bg-purple-500 flex justify-center">
            <div className="container grid grid-cols-2 text-white">
            <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
                            FÁRMACIA VIVA SAÚDE

                        </h2>
                        <p className='text-xl'>
                            Aqui você poderá cadastrar nossos produtos de forma rápida e prática
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://img.freepik.com/vetores-premium/autocolante-de-icone-de-desenho-animado-desenhado-a-mao-de-saude-para-colorir_400474-548.jpg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home