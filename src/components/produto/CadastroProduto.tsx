function CadastroProduto() {
    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Produto</h1>

            <form className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Produto</label>
                    <input
                        type="text"
                        placeholder="Produto"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Descrição do produto</label>
                    <input
                        type="text"
                        placeholder="Texto"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Valor do produto</label>
                    <input
                        type="number"
                        placeholder="number"
                        name="valor"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p> Categoria do produto</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' >
                        <option value="" selected disabled>Selecione uma categoria</option>
                        
                        <>
                            <option>Remédio</option>
                            <option>Cosmético</option>

                        </>

                    </select>
                </div>
                <button 
                    type='submit' 
                        className='rounded disabled:bg-slate-200 bg-purple-300 
                            hover:bg-purple-300 text-white font-bold w-1/2 mx-auto block py-2'
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default CadastroProduto;