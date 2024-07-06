import { assets } from "../../assets/assets"

const Footer = () => {
    return (

        <div className="footer" id="footer">
            <div lassName="footer-content-left">
               <img src={assets.logo}/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cupiditate exercitationem inventore expedita blanditiis necessitatibus, cum ipsum asperiores molestiae nobis illum, labore quam suscipit aliquid quis officia eligendi sint dolor maxime!</p>


            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <li>
                    <ul>Home</ul>
                    <ul>About us</ul>
                    <ul></ul>
                    <ul></ul>

                </li>

            </div>
            <div className="footer-content-right">

            </div>

        </div>
    )
}




{/* <div className="footer-content">
<div className="footer-content-left">
<img src={assets.logo}/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem inventore expedita blanditiis necessitatibus, cum ipsum asperiores molestiae nobis illum, labore quam suscipit aliquid quis officia eligendi sint dolor maxime!</p>


<div className="footer-content-center">

</div>
</div>

<div className="footer-content-right">

</div>

</div> */}