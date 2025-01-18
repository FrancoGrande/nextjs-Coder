


const catalogoList = ({products =[]}) => {
    return (
        <div>
            <h1>catalogo</h1>
            {products.map(product=>{
                return(<div 
                key={product.id}>{product.name}
                </div>)
            })
                
}
            </div>

    )
}

export default catalogoList