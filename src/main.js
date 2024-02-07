export default class Validator {
  constructor(name) {
    this.name = name;
  }
  validateUsername(){
    let checkedString = this.name.match(/[0-9a-zA-Z_-]+/)
    if(checkedString[0].length == this.name.length){
      if (!/\d{4,}/.test(this.name)) {
        if (!/^[0-9_-]+/.test(this.name)) {
          if (!/[0-9_-]$/.test(this.name)) {
            return true;
          } else {throw new Error('Окончание имени не соответствует формату')}
        } else {throw new Error('Начало имени не соответствует формату')}
      } else {throw new Error('Более трех цифр подряд в имени')}
    }  else {throw new Error('Зарпещенные символы в имени')}
  }
}