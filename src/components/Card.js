import './Card.css';
import Male from './img/male.png';
import Female from './img/female.png';

function Card(params)
{
    return(
        <div className="card">
                <img src={params.human.photo} />
                <div className="name">
                    {params.human.name}
                    {params.human.surname}
                </div>
                <div className="age">
                    {params.numan.age}
                </div>
                <div className="pol">
                    <img src={human.pol === "male" ? Male : Female} />
                </div>
        </div>
    );
}
export default Card;