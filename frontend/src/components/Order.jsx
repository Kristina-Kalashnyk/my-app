import React, { useRef } from 'react';
import Banner from '../img/cart/Banner.png';
import useForm from '../hooks/useForm';

const Order = () => {

const {values, handleChange} = useForm({
   email: '',
   message: '',
   name: '',
   telephone: '',
});
   
const handleSubmit = (event) => {
   event.preventDefault();  
}
  
   return (
       <section className="order">
        <div className='order'>       
           <div className="order__bg">
             <img src={Banner} alt="background..." />
          </div>   
          <div className="order__area"></div> 
            <form onSubmit={handleSubmit} className='fieldarea'>
              <label htmlFor="name" className='fieldarea__input'> Full Name*
					<input className='fieldarea__input'
						placeholder="  Your Full Name"
                  id="name"
                  type="text"
						name="name"
						value={values.name}
                  onChange={handleChange}
					/>
				</label>
            <label htmlFor="email" className='fieldarea__input'> Your Email*
					<input className='fieldarea__input'
						placeholder="  Your Email Address"
                  id="email"
						type="email"
						name="email"
						value={values.email}
                  onChange={handleChange}
                  pattern="(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})" 
					/>
				</label>
            <label htmlFor="address" className='fieldarea__input'> Address*
					<input className='fieldarea__input'
                  placeholder="  Your Company  Address"
                  id="address"
						type="text"
						name="address"		
						value={values.address}
                  onChange={handleChange}
					/>
				</label>
            <label htmlFor="telephone" className='fieldarea__input'> Pnohe number*
					<input className='fieldarea__input'
                  placeholder=" Enter Your Phone"
                  id="telephone"
						type="text"
						name="telephone"
						value={values.telephone}
                  onChange={handleChange}
					/>
				</label>
            <div className='fieldarea__input-add'>       
            <label htmlFor="message" className='fieldarea__input'> Message
					<input   className='fieldarea__input-mess' 
                  placeholder=" Some Extra Information"
                  id="message"
						name="message"
						value={values.message}
						onChange={handleChange}
					/>					
				</label>           
            <button className='btn-confirm'> <a href="/cart"> Confirm </a></button>
            </div>
          </form>
          </div>      
      </section>
    );
};

export default Order;