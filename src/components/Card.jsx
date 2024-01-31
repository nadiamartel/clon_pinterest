import upload from "../assets/uploadicon.png";
import options from "../assets/dotsicon.png";

const Card = ({ item }) => {
    return (
        <div key={item.id} className='item'>
            <div className='imagen'>
                <img src={item.urls.small} alt={item.description} />
                <a className="btn-save" href="">Guardar</a>
                <a className="icon-upload" href="">
                    <img src={upload} alt="upload" />
                </a>
                <a className="icon-dots" href="">
                    <img src={options} alt="options" />
                </a>
            </div>
            <p>{item.description}</p>
            <div>
                <img className='usuario' src={item.user.profile_image.small} alt={item.user.name} />
                <span>{item.user.name}</span>
            </div>
        </div>
    )
}

export default Card;