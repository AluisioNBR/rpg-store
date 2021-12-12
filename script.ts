class Item {
    #name: string
    #id: number
    #price: number
    #img: string

    constructor(name: string, id: number, price: number, img: string = '') {
        this.#name = name
        this.#id = id
        this.#price = price
        this.#img = img
    }

    buy(money: number){
        money = money - this.getPrice()
        
        if(money >= 0){
            return money
        }
    }

    getName(){
        return this.#name
    }
    
    getId(){
        return this.#id
    }
    
    getPrice(){
        return this.#price
    }

    getImg(){
        return this.#img
    }
}

class Weapon extends Item {
    #damage: number
    #durability: number

    constructor(name: string, id: number, price: number, img: string = '', damage: number, durability: number){
        super(name, id, price, img)
        this.#damage = damage
        this.#durability = durability
    }

    getDamage(){
        return this.#damage
    }

    setDurability(newDurability: number){
        this.#durability = newDurability
    }
    
    getDurability(){
        return this.#durability
    }
}

class Armor extends Item {
    #protection: number
    #durability: number

    constructor(name: string, id: number, price: number, img: string = '', protection: number, durability: number){
        super(name, id, price, img)
        this.#protection = protection
        this.#durability = durability
    }

    getProtection(){
        return this.#protection
    }

    setDurability(newDurability: number){
        this.#durability = newDurability
    }
    
    getDurability(){
        return this.#durability
    }
}

class Potion extends Item {
    #type: string
    #power: number

    constructor(name: string, id: number, price: number, img: string = '', type: 'heal' | 'mana/stamina' | 'strength' | 'protection' | 'xp', power: number){
        super(name, id, price, img)
        this.#type = type
        this.#power = power
    }

    use(){
        if(this.getType() == 'heal') console.log(`A poção ${this.getName()} recupera ${this.#power} pontos de vida!`)

        else if(this.getType() == 'mana/stamina') console.log(`A poção ${this.getName()} recupera ${this.#power} pontos de mana/vigor!`)

        else if(this.getType() == 'strength') console.log(`A poção ${this.getName()} aumenta a força em ${this.#power} pontos!`)

        else if(this.getType() == 'protection') console.log(`A poção ${this.getName()} aumenta a proteção em ${this.#power} pontos!`)

        else if(this.getType() == 'xp') console.log(`A poção ${this.getName()} aumenta o xp em ${this.#power} pontos!`)
    }

    getType(){
        return this.#type 
    }

    getPower(){
        return this.#power
    }
}

class Card extends Item {
    #efect

    constructor(name: string, id: number, price: number, img: string = '', efect){
        super(name, id, price, img)
        this.#efect = efect
    }

    use(){
        const rtrn = this.#efect()

        if(rtrn != undefined) return rtrn
    }
}

const PopUp = {
    weapons: {
        conteiner: $('#weapons-sale'),
        button: $('#weapons-view-button'),

        open(){
            if(PopUp.weapons.conteiner.hasClass('not-active')){
                PopUp.weapons.conteiner.removeClass('not-active')
                PopUp.weapons.conteiner.addClass('active')

                PopUp.armors.close()
                PopUp.potions.close()
                PopUp.cards.close()
            }
        },

        close(){
            if(PopUp.weapons.conteiner.hasClass('active')){
                PopUp.weapons.conteiner.removeClass('active')
                PopUp.weapons.conteiner.addClass('not-active')
            }
        }
    },

    armors: {
        conteiner: $('#armor-sale'),
        button: $('#armors-view-button'),

        open(){
            if(PopUp.armors.conteiner.hasClass('not-active')){
                PopUp.armors.conteiner.removeClass('not-active')
                PopUp.armors.conteiner.addClass('active')

                PopUp.weapons.close()
                PopUp.potions.close()
                PopUp.cards.close()
            }
        },

        close(){
            if(PopUp.armors.conteiner.hasClass('active')){
                PopUp.armors.conteiner.removeClass('active')
                PopUp.armors.conteiner.addClass('not-active')
            }
        }
    },

    potions: {
        conteiner: $('#potions-sale'),
        button: $('#potions-view-button'),

        open(){
            if(PopUp.potions.conteiner.hasClass('not-active')){
                PopUp.potions.conteiner.removeClass('not-active')
                PopUp.potions.conteiner.addClass('active')

                PopUp.armors.close()
                PopUp.weapons.close()
                PopUp.cards.close()
            }
        },

        close(){
            if(PopUp.potions.conteiner.hasClass('active')){
                PopUp.potions.conteiner.removeClass('active')
                PopUp.potions.conteiner.addClass('not-active')
            }
        }
    },

    cards: {
        conteiner: $('#cards-sale'),
        button: $('#cards-view-button'),

        open(){
            if(PopUp.cards.conteiner.hasClass('not-active')){
                PopUp.cards.conteiner.removeClass('not-active')
                PopUp.cards.conteiner.addClass('active')

                PopUp.armors.close()
                PopUp.potions.close()
                PopUp.weapons.close()
            }
        },

        close(){
            if(PopUp.cards.conteiner.hasClass('active')){
                PopUp.cards.conteiner.removeClass('active')
                PopUp.cards.conteiner.addClass('not-active')
            }
        }
    }
}

{
    PopUp.weapons.button.on('click', PopUp.weapons.open)
    PopUp.armors.button.on('click', PopUp.armors.open)
    PopUp.potions.button.on('click', PopUp.potions.open)
    PopUp.cards.button.on('click', PopUp.cards.open)
}