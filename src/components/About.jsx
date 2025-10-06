import './About.css'

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2>About Us</h2>
                <p>Welcome to <strong>The Food Place</strong>, a family-owned restaurant dedicated to serving delicious, authentic cuisine in a warm and welcoming atmosphere.</p>
                
                <div className="highlight-box">
                    <p className="highlight-text">
                        "We believe that great food brings people together, and every meal should be a memorable experience."
                    </p>
                </div>
                
                <p>Our menu features a variety of carefully crafted dishes, including vegetarian and vegan options, all made with the freshest ingredients. We take pride in updating our menu regularly to ensure we're always offering the most delicious and seasonal food possible.</p>
                
                <p>Whether you're joining us for a casual lunch, romantic dinner, or special celebration, our team is committed to making your dining experience exceptional. We also offer a great selection of beverages, including cocktails, beer, and wine to perfectly complement your meal.</p>
            </div>
        </section>
    )
}

export default About;