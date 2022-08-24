import React from 'react';
import './form.css';

const Form = () => {
    return (
        <form className='form-background' action="https://formsubmit.co/reliable7andaffordablecleaning@yahoo.com" method="POST">
            <div className='form--container'>
                <h1>Tell Us About Your Project</h1>
                <input type="hidden" name="_subject" value="Nuevo Correo!"></input>
                <div>
                    <label htmlFor="name">What is your Name?*</label>
                    <input className='input' type='text' placeholder='Name' name='name' required/>
                </div>
                <div>
                    <label htmlFor="email">Email*</label>
                    <input className='input' type='email' placeholder='Email' name='email' required/>
                </div>
                <div className='form-double-input'>
                    <div className='form-double-input-phone'>
                        <label htmlFor="phone">Phone number*</label>
                        <input className='input' type='tel' placeholder='Phone' name='phone' required/>
                    </div>
                    <div>
                        <label htmlFor="date">Date of service</label>
                        <input className='input' type='date' placeholder='Date' name='date'/>
                    </div>
                </div>
                <div className='form-select-input'>
                    <div className='form-four-input'>
                        <label htmlFor="property">Property type*</label>
                        <select className='select' type='tel' placeholder='Property' name='property'>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                        </select>
                    </div>
                    <div className='input-select'>
                        <label htmlFor="size">Sq Footage</label>
                        <input className='input' type='number' placeholder='0' name='size'/>
                    </div>
                </div>
                <div className='form-four-input'>
                    <div>
                        <label htmlFor="bedrooms">Bedrooms</label>
                        <input className='fouth-input' type='number' placeholder='0' name='bedrooms'/>
                    </div>
                    <div>
                        <label htmlFor="bathrooms">Bathrooms</label>
                        <input className='fouth-input' type='number' placeholder='0' name='bathrooms'/>
                    </div>
                    <div>
                        <label htmlFor="people">People</label>
                        <input className='fouth-input' type='number' placeholder='0' name='people'/>
                    </div>
                    <div>
                        <label htmlFor="pets">Pets</label>
                        <input className=' fouth-input' type='number' placeholder='0' name='pets'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="name">What type of cleaning would you like?*</label>
                    <div className='form-radio-type'>
                        <div>
                            <input type="radio" name="cleaning-frequency" value="one-time"/>
                            <label htmlFor="onetime">One-Time</label>
                        </div>
                        <div>
                            <input type="radio" name="cleaning-frequency" value="weekly"/>
                            <label htmlFor="weekly">Weekly</label>
                        </div>
                        <div>
                            <input type="radio" name="cleaning-frequency" value="biweekly"/>
                            <label htmlFor="biweekly">Biweekly</label>
                        </div>
                        <div>
                            <input type="radio" name="cleaning-frequency" value="monthly"/>
                            <label htmlFor="monthly">Monthly</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="text">Tell us about your project</label>
                    <textarea className='input' type='text' placeholder='Text' name='text'></textarea>
                </div>
                <button  className='input-button' type='submit' required>Submit</button>
            </div>
        </form>
    )
}

export default Form;
