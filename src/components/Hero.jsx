import "../App.css";
import Photo from "./../assets/Image.avif"
function Hero(){
    return (
        <>
        <div className="Herowrapper">
          <div className="imagediv">
            <img src={Photo} alt=""  style={{width:"90%" , margin:"35px"}}/>
            </div> 


            <div className="seconddiv">
                <h1>Thik Health . Think Massage. </h1>
                <p>WE are open 9am to 6pm ; Monday through Sunday .If you would like to schedule an appointment with us , plase call us at 987-654-3210 today !</p>
                <div><button>LEARN MORE ABOUT US</button>
                <button>CONTACT US TODAY</button>
                </div>
            </div>


            <div className="infodiv">
                <p className="firstpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe non ea id, minima reiciendis incidunt in magni dolorem et.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod incidunt ipsum voluptate rerum corporis nulla illo eaque distinctio voluptas possimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus necessitatibus sit repellat accusantium ullam nostrum eum earum molestias quod ab?</p>

            </div>
        </div>
        </>
    )
}
export default Hero;