import "../App.css";
function Header (){
    return (
        <>
        <div className="herowrapper">
            <div className="headding">
                <h1>Family Wellness</h1>
                <p>MASSAGE THERAPY</p>

            </div>
            <div>
                <ul  className="navbar">
                    <li id="firstanchor"><a href="" >HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">FLAG</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
            
        </div>
        </>
    )
}
export default Header;