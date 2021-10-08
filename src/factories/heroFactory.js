const HeroRepository = require("../repositories/HeroRepository")
const HeroService = require("../services/HeroService")

const  {join} = require('path')
const filename = join(__dirname, '../../database', 'data.json')
const generateInstance = ()=>{
  const heroRepository = new HeroRepository({
    file: filename
  })

  const heroService = new HeroService({
    heroRepository
  })

  return heroService
}

module.exports = {generateInstance}

//generateInstance().find().then(console.log).catch(error => console.log('error', error))