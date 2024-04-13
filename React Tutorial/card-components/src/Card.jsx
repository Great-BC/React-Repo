import ProfilePicture from './assets/ProfilePicture.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={ProfilePicture} alt="Profile Picture"></img>
            <h2 className='card-title'>Great</h2>
            <p className='card-text'>Computer Programming Student at Georgian</p>
        </div>
    )
}

export default Card