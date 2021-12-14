type active = () => void | string | number | object

class Item {
    private name: string
    private id: number
    private price: number
    private img: string

    constructor(name: string, id: number, price: number, img: string = '') {
        this.name = name
        this.id = id
        this.price = price
        this.img = img
    }

    buy(money: number){
        money = money - this.getPrice()
        
        if(money >= 0){
            return money
        }
    }

    getName(){
        return this.name
    }
    
    getId(){
        return this.id
    }
    
    getPrice(){
        return this.price
    }

    getImg(){
        return this.img
    }
}

class Weapon extends Item {
    private damage: number
    private durability: number

    constructor(name: string, id: number, price: number, img: string = '', damage: number, durability: number){
        super(name, id, price, img)
        this.damage = damage
        this.durability = durability
    }

    getDamage(){
        return this.damage
    }

    setDurability(newDurability: number){
        this.durability = newDurability
    }
    
    getDurability(){
        return this.durability
    }
}

class Armor extends Item {
    private protection: number
    private durability: number

    constructor(name: string, id: number, price: number, img: string = '', protection: number, durability: number){
        super(name, id, price, img)
        this.protection = protection
        this.durability = durability
    }

    getProtection(){
        return this.protection
    }

    setDurability(newDurability: number){
        this.durability = newDurability
    }
    
    getDurability(){
        return this.durability
    }
}

class Potion extends Item {
    private type: string
    private power: number

    constructor(name: string, id: number, price: number, img: string = '', type: 'heal' | 'mana/stamina' | 'strength' | 'protection' | 'xp', power: number){
        super(name, id, price, img)
        this.type = type
        this.power = power
    }

    use(){
        if(this.getType() == 'heal') console.log(`A poção ${this.getName()} recupera ${this.power} pontos de vida!`)

        else if(this.getType() == 'mana/stamina') console.log(`A poção ${this.getName()} recupera ${this.power} pontos de mana/vigor!`)

        else if(this.getType() == 'strength') console.log(`A poção ${this.getName()} aumenta a força em ${this.power} pontos!`)

        else if(this.getType() == 'protection') console.log(`A poção ${this.getName()} aumenta a proteção em ${this.power} pontos!`)

        else if(this.getType() == 'xp') console.log(`A poção ${this.getName()} aumenta o xp em ${this.power} pontos!`)
    }

    getType(){
        return this.type 
    }

    getPower(){
        return this.power
    }
}

class Card extends Item {
    private efect: active

    constructor(name: string, id: number, price: number, img: string = '', efect: active){
        super(name, id, price, img)
        this.efect = efect
    }

    use(){
        const rtrn = this.efect()

        if(rtrn != undefined) return rtrn
    }
}

const Catalog = {
    Weapons: {
        testeSword: new Weapon('Espada Teste', 1, 100, '', 50, 75),
        testeSword2: new Weapon('Espada Teste', 2, 100, '', 50, 75),
        testeSword3: new Weapon('Espada Teste', 3, 100, '', 50, 75)
    },

    Armors: {
        testArmor: new Armor('Armadura Teste', 4, 100, '', 50, 75),
        testArmor2: new Armor('Armadura Teste', 5, 100, '', 50, 75),
        testArmor3: new Armor('Armadura Teste', 6, 100, '', 50, 75),
        testArmor4: new Armor('Armadura Teste', 7, 100, '', 50, 75)
    },

    Potions: {
        testPotion: new Potion('Pequena Cura', 8, 100, '', 'heal', 25)
    },

    Cards: {
        testCard: new Card('Olá!', 9, 10, '', () => console.log('Olá')),
        testCard2: new Card('Desenvolvedor', 9, 10, '', () => console.log('Desenvolvida por mim, Aluísio!'))
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

// * Inicialização dos produtos
{
    {
        let newColumn: JQuery<HTMLElement>
        let item: number
        for(let weapon in Catalog.Weapons){
            if(PopUp.weapons.conteiner.is(':empty') || item == 2){
                newColumn = $('<div />').addClass('column')
                PopUp.weapons.conteiner.append(newColumn)
                item = 0
            }

            let imgDetails = $('<figure />')
            imgDetails.append($('<img />').attr('src', `${Catalog.Weapons[`${weapon}`].getImg()}`).attr('alt', `${Catalog.Weapons[`${weapon}`].getName()}`))
            imgDetails.append($('<figcaption />').text(`${Catalog.Weapons[`${weapon}`].getName()}\n${Catalog.Weapons[`${weapon}`].getPrice()} coins`))

            let newWeapon = $('<div />').addClass('product').addClass('button').append(imgDetails)
            newColumn.append(newWeapon)

            item++
        }
    }

    {
        let newColumn: JQuery<HTMLElement>
        let item: number
        for(let armor in Catalog.Armors){
            if(PopUp.armors.conteiner.is(':empty') || item == 2){
                newColumn = $('<div />').addClass('column')
                PopUp.armors.conteiner.append(newColumn)
                item = 0
            }

            let imgDetails = $('<figure />')
            imgDetails.append($('<img />').attr('src', `${Catalog.Armors[`${armor}`].getImg()}`).attr('alt', `${Catalog.Armors[`${armor}`].getName()}`))
            imgDetails.append($('<figcaption />').text(`${Catalog.Armors[`${armor}`].getName()}\n${Catalog.Armors[`${armor}`].getPrice()} coins`))

            let newArmor = $('<div />').addClass('product').addClass('button').append(imgDetails)
            newColumn.append(newArmor)

            item++
        }
    }

    {
        let newColumn: JQuery<HTMLElement>
        let item: number
        for(let potion in Catalog.Potions){
            if(PopUp.potions.conteiner.is(':empty') || item == 2){
                newColumn = $('<div />').addClass('column')
                PopUp.potions.conteiner.append(newColumn)
                item = 0
            }

            let imgDetails = $('<figure />')
            imgDetails.append($('<img />').attr('src', `${Catalog.Potions[`${potion}`].getImg()}`).attr('alt', `${Catalog.Potions[`${potion}`].getName()}`))
            imgDetails.append($('<figcaption />').text(`${Catalog.Potions[`${potion}`].getName()}\n${Catalog.Potions[`${potion}`].getPrice()} coins`))

            let newPotion = $('<div />').addClass('product').addClass('button').append(imgDetails)
            newColumn.append(newPotion)

            item++
        }
    }

    {
        let newColumn: JQuery<HTMLElement>
        let item: number
        for(let card in Catalog.Cards){
            if(PopUp.cards.conteiner.is(':empty') || item == 2){
                newColumn = $('<div />').addClass('column')
                PopUp.cards.conteiner.append(newColumn)
                item = 0
            }

            let imgDetails = $('<figure />')
            imgDetails.append($('<img />').attr('src', `${Catalog.Cards[`${card}`].getImg()}`).attr('alt', `${Catalog.Cards[`${card}`].getName()}`))
            imgDetails.append($('<figcaption />').text(`${Catalog.Cards[`${card}`].getName()}\n${Catalog.Cards[`${card}`].getPrice()} coins`))

            let newCard = $('<div />').addClass('product').addClass('button').append(imgDetails)
            newColumn.append(newCard)

            item++
        }
    }
}