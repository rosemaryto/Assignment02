langCode = prompt('Pick a language code: es, de, en, fr').toLowerCase()
switch (langCode) {
    case 'fr':
        document.write(`Hello World translated in French is: Bonjour le monde`)
        break
    case 'en':
        document.write(`Hello World translated in English is: Hello World`)
        break
    case 'de':
        document.write(`Hello World translated in German is: Hallo Welt`)
        break
    case 'es':
        document.write(`Hello World translated in Spanish is: Hola Mundo`)
        break
    default:
        document.write(`Hello World translated in English is: Hello World`)
        break
}