
import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../util/request';
import './style.css'

type Props = {
    saleId: number;
}

function handlerClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS enviado com sucesso")
        });
}


function NotificationButton({ saleId }: Props) {

    return (
        <div className="dsmeta-red-btn" onClick={() => handlerClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>

    )
}

export default NotificationButton