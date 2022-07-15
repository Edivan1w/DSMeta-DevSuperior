
import NotificationButton from '../NotificationButton'
import './style.css'

function SalesCard() {
    return (
      
    
                <div className="dsmeta-card">
                    <h2 className="dsmeta-sales-title">Vendas</h2>
                    <div>
                        <div className="dsmeta-form-control-container">
                            <input className="dsmeta-form-control" type="text" />
                        </div>
                        <div className="dsmeta-form-control-container">
                            <input className="dsmeta-form-control" type="text" />
                        </div>
                    </div>

                    <div>
                        <table className="dsmeta-sales-table">
                            <thead>
                                <tr>
                                    <th className="show992">ID</th>
                                    <th className="show576">Data</th>
                                    <th>Vendedor</th>
                                    <th className="show992">Visitas</th>
                                    <th className="show992">Vendas</th>
                                    <th>Total</th>
                                    <th>Modificar</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="show992">1</td>
                                    <td className="show576">02/05/2022</td>
                                    <td>Anaki</td>
                                    <td className="show992">10</td>
                                    <td className="show992">20</td>
                                    <td>$ 5000.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">2</td>
                                    <td className="show576">02/05/2022</td>
                                    <td>Vanda</td>
                                    <td className="show992">15</td>
                                    <td className="show992">25</td>
                                    <td>$ 10000.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
  
    )
  }
  
  export default SalesCard