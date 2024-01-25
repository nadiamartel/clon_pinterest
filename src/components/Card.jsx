
const Card = ({ item }) => {
    return (
        <div key={item.id} className='item'>
            <div className='imagen'>
                <img src={item.urls.small} alt={item.description} />
            </div>
            <p>{item.description}</p>
            <div>
                <img className='usuario' src={item.user.profile_image.small} alt="" />
                <span>{item.user.name}</span>
            </div>
        </div>
    )
}

export default Card;