
import { Link } from 'react-router-dom'

function CardProduto() {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className='w-full bg-purple-300 text-white flex justify-center py-4'>

                    <img src='' className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase'>Produto</h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>Nome produto:</h4>
                    <p>Descrição</p>
                    <p>Categoria: </p>
                    <p>Valor: </p>
                </div>
                <Link to={`/editarCategoria/`} className='w-full text-white bg-purple-300
                    hover:bg-purple-300 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/`} className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProduto