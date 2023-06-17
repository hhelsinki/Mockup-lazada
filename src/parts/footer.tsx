const Footer = () => {
    return (
        <footer className="home__footer">
            <section className="mobile bg-second">
                <div className='dp-grid home__footer-crt'>
                    <div className="text-2xl"><p className="mb-0">♥️</p><p className="text-base mt-0">Home</p></div>
                    <div className="text-2xl"><p className="mb-0">&equiv;</p><p className="text-base mt-0">Categories</p></div>
                    <div className="text-2xl"><p className="mb-0">🛒️</p><p className="text-base mt-0">Cart</p></div>
                    <div className="text-2xl"><p className="mb-0">👦️</p><p className="text-base mt-0">Account</p></div>
                </div>
            </section>
            <section className="pc">
                <div className="dp-grid home__footer-pc">
                    <div>
                        <ul className="list-none">Customer Care
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Shipping & Delivery</li>
                            <li>International Product Policy</li>
                            <li>How to Return</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none">Lazada
                            <li>All Categories</li>
                            <li>About Lazada</li>
                            <li>Affiliate Program</li>
                            <li>Careers</li>
                            <li>Term & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Press & Media</li>
                            <li>Securiy</li>
                            <li>Popular Products</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>🔖️ Go Where Your Heart Beats</b></p>
                        <p>Download App</p>
                    </div>
                    <div>
                        <img src='./foot2.png' className='img' alt=""/>
                    </div>
                </div>
            </section>


        </footer>
    );
}

export default Footer;