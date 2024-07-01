
import promo1 from '../../assets/imagenes/promo1.png';
import promo2 from '../../assets/imagenes/promo2.png';
import promo3 from '../../assets/imagenes/promo3.png';



export default function Carrusel() {
  return (
    <div className="container">
    <div className="custom-carousel my-5">
        <h1 style={{ textAlign: 'center', fontSize:"35px" }}>Nuestras Promociones</h1>
        <div id="carouselExampleIndicators" className="carousel slide" style={{ maxWidth: '100rem', margin: 'auto' }}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={promo1} className="d-block w-100" alt="..." style={{ maxHeight: '40rem', objectFit: 'cover'}} />
                </div>
                <div className="carousel-item">
                    <img src={promo2} className="d-block w-100" alt="..." style={{ maxHeight: '40rem', objectFit: 'cover' }} />
                </div>
                <div className="carousel-item">
                    <img src={promo3} className="d-block w-100" alt="..." style={{ maxHeight: '40rem', objectFit: 'cover' }} />
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</div>
  )
}
