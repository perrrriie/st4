
import { contact } from '../../main'

import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email us
        </span>
        
      </a>

      <span className='btn'>
     
      Phone: 999999999
          </span>
    </section>
  )
}

export default Contact
