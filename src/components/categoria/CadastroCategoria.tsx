function CadastroCategoria() {
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                Cadastrar Categoria
            </h1>

            <form className="w-1/2 flex flex-col gap-4" >
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Tipo de categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva qual categoria"
                        name='tipo'
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-purple-300 
                               hover:bg-purple-300 w-1/2 py-2 mx-auto block"
                    type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default CadastroCategoria;