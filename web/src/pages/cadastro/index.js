import Illustration from '../../assets/illustration.png';
import Header from '../../components/header'

const Cadastro = () =>{
    return (
        <div className="container-fluid h-100 bg-primary">
            <Header whiteVersion hideCard/>
            <div className='row'>
            <div className="col-6 text-rigth my-auto">
                <img src={Illustration} className='img-fluid'/>
            </div>
            <div className='col-6'>
                <div className='box col-8'>
                    <h2 className='text-center'>Falta pouco pro seu pet ser feliz</h2>
                    <br/>
                    <br/>
                    <input type='text' className='form-control form-control-lg mb-3' placeholder='Nome completo'></input>
                    <input type='email' className='form-control form-control-lg mb-3' placeholder='E-mail'></input>
                    <input type='text' className='form-control form-control-lg mb-3' placeholder='Teleforne'></input>
                    <input type='password' className='form-control form-control-lg mb-3' placeholder='CPF'></input>
                    <input type='date' className='form-control form-control-lg mb-3' placeholder='Data de nascimento'></input>
                    <button className='btn btn-secondary btn-lg col-12'>Finalizar pedido</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cadastro;