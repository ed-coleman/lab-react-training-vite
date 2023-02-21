import React from 'react'

export default function Greetings(props) {

const checkLanguage = (lang) => {
if (lang === 'de') {
return 'Hallo'
} else if (lang === 'fr') {
    return 'Bonjour' 
} else if (lang === 'en') {
    return 'Hello'
} else if (lang === 'es') {
    return 'Hola'
} else {
    return 'Hi'
}
}


    
  return (

    <div>
    <h3>{checkLanguage(props.lang)} {props.children}</h3>
    </div>
  )
}
