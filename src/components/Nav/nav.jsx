import ETCImage from "../../images/logo.png"
function Nav(){
    return (
        <div>
            <div className="nav-container">
                <nav>
                    <h2>
                        <img
                            className="logo"
                            src={ETCImage}
                            title="ETC logo"
                            alt="ETC LOGO"
                        />
                    </h2>
                </nav>
            </div>
        </div>
    )
}
export default Nav