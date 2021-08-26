import Header from '../../components/header'
import Product from '../../components/product/list'
import './style.css'

const Checkout = () =>{
    return(
        <div className="h-100">
            <Header/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <span className="select-title">Dados de Entrega</span>
                        <div className="row mb-3">
                            <div className="col-12">
                                <input type="text" placeholder="Cep" className="form-control form-contorl-lg"></input>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-9">
                                <input type="text" placeholder="Cidade" className="form-control form-contorl-lg"></input>
                            </div>
                            <div className="col-3 pl-0">
                                <input type="text" placeholder="UF" className="form-control form-contorl-lg"></input>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-9">
                                <input type="text" placeholder="Lougradoro" className="form-control form-contorl-lg"></input>
                            </div>
                            <div className="col-3 pl-0">
                                <input type="text" placeholder="Numero" className="form-control form-contorl-lg"></input>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6 pl-0">
                                <input type="text" placeholder="Bairro" className="form-control form-contorl-lg"></input>
                            </div>
                            <div className="col-6 pl-0">
                                <input type="text" placeholder="Complemento" className="form-control form-contorl-lg"></input>
                            </div>
                        </div>
                    
                        <span className="select-title">Dados de Pagamento</span>
                        <div className="row mb-3">
                            <div className="col-12">
                                <input type="text" placeholder="Numero do cartão" className="form-control form control-lg"></input>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input type="text" placeholder="Validade" className="form-control form control-lg"></input>
                            </div>
                            <div className="col-6">
                                <input type="text" placeholder="CVV" className="form-control form control-lg"></input>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input type="text" placeholder="Nome do titular" className="form-control form control-lg"></input>
                            </div>
                            <div className="col-6">
                                <input type="text" placeholder="CPF /CNPJ do titular" className="form-control form control-lg"></input>
                            </div>
                        </div>
                    
                    <div className="row mt-4">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <b>Total:</b>
                            <h4>R$30,00</h4>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary btn-lg col-12">Finalizar compra</button>
                        </div>
                    </div>
                    
                    </div>
                    <div className="col-6">
                        <div className="box col mb-4 box-sidebar">
                            <h4>Minha sacola (5)</h4>
                            <div className="row product">
                                {[1,2,3,4,5,6,7,8,9].map((p)=>(<Product/>))} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;