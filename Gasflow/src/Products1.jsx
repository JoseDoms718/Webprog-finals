import { useState } from 'react';
import './Products1.css';

function Products1() {
    const [quantity, setQuantity] = useState(1);
    const unitPrice = 2500;
    const totalPrice = quantity * unitPrice;

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const orderData = {
            name: form.name.value,
            email: form.email.value,
            contact: form.contact.value,
            address: form.address.value,
            item: '1.4Kg - Auto shut off Cylinder',
            quantity,
            price: quantity * unitPrice
        };

        try {
            const response = await fetch('http://localhost:5000/orders', {  // Make sure to update the URL if needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                alert('Order submitted successfully!');
                form.reset();
                setQuantity(1);  // Reset quantity after successful submission
            } else {
                const errorData = await response.json();
                alert(`Failed to submit order: ${errorData.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <section>
            <div className="Product-container">
                <div className="Productinfo-container">
                    <img src="src/assets/products1.png" alt="Product" />
                    <h1>1.4Kg - Auto shut off Cylinder</h1>
                    <h2>₱2,500</h2>
                    <p>HEHE PUKPOK KO SAYO TO</p>
                </div>

                <div className="Productform-container">
                    <form onSubmit={handleSubmit}>
                        <h3>Order Form</h3>

                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="contact">Contact Number:</label>
                        <input type="tel" id="contact" name="contact" required pattern="[0-9]{10,11}" />

                        <label>Quantity:</label>
                        <div className="quantity-total-wrapper">
                            <div className="quantity-controls">
                                <button type="button" onClick={handleDecrease}>−</button>
                                <span>{quantity}</span>
                                <button type="button" onClick={handleIncrease}>+</button>
                            </div>
                            <p className="total-price">₱{totalPrice.toLocaleString()}</p>
                        </div>

                        <label htmlFor="address">Delivery Address:</label>
                        <textarea id="address" name="address" rows="4" required></textarea>

                        <button type="submit">Submit Order</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Products1;
