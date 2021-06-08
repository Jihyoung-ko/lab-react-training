const Greeting = (props) => {
  const { lang, children } = props;
  const languages = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  }

  return (
    <div className="container">
      <p>{languages[lang]} {children}</p>
    </div>
  )
}

export default Greeting;