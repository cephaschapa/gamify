import React from 'react';
import { newsletterSectionClasses } from './newsLetterClassNames';

const NewsLater = () => {
  return (
    <section className={newsletterSectionClasses.container}>
        <h2 className={newsletterSectionClasses.heading}>Stay in the Loop</h2>
        <p className={newsletterSectionClasses.subHeading}>Subscribe to our news later for exclusive Game Updates, Offers, and Tips</p>
        <div className={newsletterSectionClasses.cardContainer}>
            <div className={newsletterSectionClasses.cardLeft}>
                <h3>Sign Up for Our news letter</h3>
                <p className={newsletterSectionClasses.cardSubHeading}>
                  Get the latest news and updates.
                </p>
            </div>
            <form className={newsletterSectionClasses.formContainer}>
              <input 
                type="email"
                placeholder="Enter your email"
                className={newsletterSectionClasses.inputField}
              />
              <button
                className={newsletterSectionClasses.button}
              >
                Subscribe
              </button>
            </form>
        </div>
    </section>
  )
}

export default NewsLater