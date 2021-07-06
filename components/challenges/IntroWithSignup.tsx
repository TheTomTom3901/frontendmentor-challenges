import { useState } from 'react'
import Attribute from '../Attribute'
import Props from './types'
import addAssetPrefix from '../../utils/addAssetPrefix'

import styles from './IntroWithSignup.module.css'

const Input = ({ challengeId, id, value, onChange, error, errorMessage }) => (
  <div className="relative">
    <input
      id={id}
      className={`rounded w-full pl-4 pr-12 py-3 text-iws-dark-blue font-semibold text-sm xl:pl-8 xl:pr-14 xl:py-4 ${error ? 'border-2 border-iws-red text-iws-red mb-1 xl:mb-2 focus:outline-none' : 'border border-gray-300 focus:outline-none focus:border-iws-dark-blue'}`}
      type="text"
      value={value}
      onChange={onChange}
    />
    {error && (
      <>
        <div className="absolute top-0 right-0 mt-3 mr-4 xl:mt-4 xl:mr-6">
          <img src={addAssetPrefix(`${challengeId}/icon-error.svg`)} alt="error-icon" />
        </div>
        <p className="text-iws-red text-xs font-medium text-right italic">{errorMessage}</p>
      </>
    )}
  </div>
)

const IntroWithSignup = ({ id, link }: Props) => {
  const [values, setValues] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: 'Email Address',
    password: 'Password'
  })
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  })

  const onChange = (event) => {
    setValues(prevState => ({ ...prevState, [event.target.id]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    Object.entries(values).forEach(([key, value]) => {
      let error = !value
      if (key === 'emailAddress' && !value.match('^[^@]+@[^@]+\\.[^@]+$')) error = true
      setErrors(prevState => ({ ...prevState, [key]: error }))
    })
  }

  return (
    <div className={`flex flex-col items-center px-7 pt-24 pb-14 bg-iws-red ${styles.background} xl:px-0 xl:pt-32 xl:pb-28`}>
      <div className="font-poppins xl:grid xl:grid-cols-2 xl:gap-8 xl:w-3/4">
        <div className="text-white text-center mb-16 xl:flex xl:flex-col xl:justify-center xl:text-left xl:mt-20">
          <h1 className="text-2xl font-bold mb-7 xl:text-5xl xl:mb-8">Learn to code by watching others</h1>
          <p className="font-medium">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div>
          <div className="bg-iws-blue text-white py-4 px-14 rounded-lg text-center mb-6">
            <p className="text-sm xl:text-base"><span className="font-semibold">Try it free 7 days </span>then $20/mo. thereafter</p>
          </div>
          <form onSubmit={onSubmit} className="bg-white rounded-lg p-6 pb-7 text-center space-y-4 xl:p-10 xl:pb-11 xl:space-y-5">
            <Input
              challengeId={id}
              id="firstName"
              value={values.firstName}
              onChange={onChange}
              error={errors.firstName}
              errorMessage="First Name cannot be empty"
            />
            <Input
              challengeId={id}
              id="lastName"
              value={values.lastName}
              onChange={onChange}
              error={errors.lastName}
              errorMessage="Last Name cannot be empty"
            />
            <Input
              challengeId={id}
              id="emailAddress"
              value={values.emailAddress}
              onChange={onChange}
              error={errors.emailAddress}
              errorMessage="Looks like this is not an email"
            />
            <Input
              challengeId={id}
              id="password"
              value={values.password}
              onChange={onChange}
              error={errors.password}
              errorMessage="Password cannot be empty"
            />
            <button type="submit" className="text-white bg-iws-green py-4 w-full rounded-md uppercase font-medium focus:bg-opacity-70 focus:outline-none">Claim your free trial</button>
            <p className="text-xs text-iws-grayish-blue">By clicking the button, you are agreeing to our <span className="text-iws-red font-bold">Terms and Services</span></p>
          </form>
        </div>
      </div>
      <Attribute className="mt-8 text-white" link={link} />
    </div>
  )
}

export default IntroWithSignup