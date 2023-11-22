
import { Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
           <div className='w-full bg-purple-900 text-white flex justify-center py-4'>

            
                <div className="container flex justify-between text-lg">
                <Link to='/Home' className='hover:underline'>Home</Link>

                    <div className='flex gap-4'>

                    <Link to='/Categoria' className='hover:underline'>Categoria</Link>
                    <Link to='/CadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    <Link to='/Produto' className='hover:underline'>Produtos</Link>
                    <Link to='/CadastroProduto' className='hover:underline'>Cadastrar Produto</Link>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar