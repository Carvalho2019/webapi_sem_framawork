
class Hero {
  constructor({id, name, age, power}){
    this.id  = Math.floor(Math.random() * 100) + Date.now()
    this.name = name
    this.age = age
    this.power = power
  }

  isValid(){
    const propertyNames = Object.getOwnPropertyNames(this)    
    const amountInvalid = propertyNames
      .map(property => (!!this[property]) ? null : `${property} is missing!`)
      .filter(item => !!item)

    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid
    }
    //console.log('amountInvalid', amountInvalid)
  }
}

module.exports = Hero

/*
const hero =new Hero({name:"John",age:"100",power:"SuperForce"})
console.log('valid', hero.isValid())
*/