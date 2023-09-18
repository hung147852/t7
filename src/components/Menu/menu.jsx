import ETCImage from "../../images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dishes from "../../menu.json";
function Menu() {
    return (
        <div>
            <div className="nav-menu-container">
                <img
                id="logo-menu"
                src={ETCImage}
                title="ETC logo"
                alt="ETC Logo"
                />
                <h2>Vui lòng truy cập để đăng ký suất ăn</h2>
                <a href="/login" className="btn btn-primary">Đăng nhập</a>
            </div>
            <div className="latest-container">
                <hr className="line" />
                <h1 className="latest-designs">Thực đơn hôm nay</h1>
                <hr className="line" />
                <br />
                <br />
                <div className="menu-container image-glallery"> 
                    {Object.keys(Dishes).map((keyName) => {
                        const dish = Dishes[keyName];
                        return (
                        <div className="menu-products" key={keyName}>
                        <img
                            className="products-dish-image"
                            alt={dish.name}
                            src={dish.img}
                        />
                        <h3 className="dish-name">{dish.name}</h3>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Menu