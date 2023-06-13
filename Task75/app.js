class Person {
    constructor(ad , yas){
        this.ad = ad
        this.yas = yas
        this.showInfo = ()=>{
            console.log(`Mən <${this.ad}> adlı şəxsəm və mənim yaşım <${this.yas}>-im var.`)
        }
    }
}


class Employee extends Person{
    constructor(ad , yas , vezife){
        super(ad , yas)
        this.vezife =vezife
        this.showStatus = () => {
            console.log(`Mən bir <${this.vezife}> -əm`)
        } 
    }


}

const nicat = new Employee("Nicat",19,"Mobile Dev")
nicat.showStatus()