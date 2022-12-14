import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

type Props = {}

const Recaptcha = (props: Props) => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
    console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
      onChange={onChange}
      theme={"dark"}
  />  
  )
}

export default Recaptcha