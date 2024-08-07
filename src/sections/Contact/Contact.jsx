import React from 'react'
import styles from "./ContactStyles.module.css"

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact Me</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>Name</label>
                <input type="text" id='name' placeholder='Name' name='name' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>Email</label>
                <input type="email" id='email' placeholder='Email' name='email' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>Message</label>
                <textarea name="message" id="message" required placeholder='Message'></textarea>
            </div>
            <input type="submit" value="SUBMIT" className='hover btn'/>
        </form>
    </section>
  )
}

export default Contact