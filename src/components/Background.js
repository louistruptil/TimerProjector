import './Background.css'

function Background() {
    return (
        <div className="Background">
            <video loop autoPlay muted>
                <source src={require('../contents/anime_rain.mp4')} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Background;