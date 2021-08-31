import './style.css'

const Product = () =>{
    return(
        <div className="product col-3">
            <img src="https://a-static.mlcdn.com.br/618x463/racao-para-cachorro-qualidy-caes-orig-carne-e-frango-15kg/comprafacilpet/100476/49db7f7d57b55bc5788d3423ec6e3412.jpg" className="img-fluid align-center"/>
            <button className="btn btn-primary rounded-circle">+</button>
            <h4>
                <label className="badge bg-primary">R$ 30,00</label>
            </h4>
            <small>
                <b>Ração para cachorro qualidy caes orig carne e frango 15kg</b>
            </small>
        </div>
    )
}

export default Product;