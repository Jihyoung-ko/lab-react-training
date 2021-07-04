const Greeting = (props) => {
  const { lang, children } = props;
  const languages = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  }

  return (
   
      <p>{languages[lang]} {children}</p>
    
  )
}

export default Greeting;