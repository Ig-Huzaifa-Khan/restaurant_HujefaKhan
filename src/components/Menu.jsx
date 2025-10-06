const Menu = () => {
    return (
        <section>
            <h2>Our Menu</h2>
            <p>Our menu is updated regularly to ensure that we are always offering the freshest and most delicious food possible. We have a variety of dishes to choose from, including vegetarian and vegan options.</p>
            
            <div className="menu-grid">
                <div className="menu-category">
                    <h3>Appetizers</h3>
                    <ul className="menu-items">
                        <li>
                            <span className="item-name">Chicken Wings</span>
                            <span className="item-price">$8.99</span>
                        </li>
                        <li>
                            <span className="item-name">Mozzarella Sticks</span>
                            <span className="item-price">$6.99</span>
                        </li>
                        <li>
                            <span className="item-name">Garlic Bread</span>
                            <span className="item-price">$4.99</span>
                        </li>
                    </ul>
                </div>
                
                <div className="menu-category">
                    <h3>Main Dishes</h3>
                    <ul className="menu-items">
                        <li>
                            <span className="item-name">Grilled Chicken</span>
                            <span className="item-price">$15.99</span>
                        </li>
                        <li>
                            <span className="item-name">Beef Steak</span>
                            <span className="item-price">$22.99</span>
                        </li>
                        <li>
                            <span className="item-name">Vegetarian Pasta</span>
                            <span className="item-price">$12.99</span>
                        </li>
                    </ul>
                </div>
                
                <div className="menu-category">
                    <h3>Beverages</h3>
                    <ul className="menu-items">
                        <li>
                            <span className="item-name">Fresh Coffee</span>
                            <span className="item-price">$3.99</span>
                        </li>
                        <li>
                            <span className="item-name">Fresh Juice</span>
                            <span className="item-price">$4.99</span>
                        </li>
                        <li>
                            <span className="item-name">Soft Drinks</span>
                            <span className="item-price">$2.99</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Menu;