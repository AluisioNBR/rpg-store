// * Tipo de funções de cards
type active = () => void | string | number | object

// * Classe item padrão
class Item {
    private name: string
    private id: number
    private description: string
    private price: number
    private img: string

    constructor(name: string, id: number, description: string, price: number, img: string = '') {
        this.name = name
        this.id = id
        this.description = description
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

    getDescription(){
        return this.description
    }
    
    getPrice(){
        return this.price
    }

    getImg(){
        return this.img
    }
}

// * Classe item arma
class Weapon extends Item {
    private damage: number
    private durability: number

    constructor(name: string, id: number, description: string, price: number, img: string = '', damage: number, durability: number){
        super(name, id, description, price, img)
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

// * Classe item armadura
class Armor extends Item {
    private protection: number
    private durability: number

    constructor(name: string, id: number, description: string, price: number, img: string = '', protection: number, durability: number){
        super(name, id, description, price, img)
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

// * Classe item poção
class Potion extends Item {
    private type: string
    private power: number

    constructor(name: string, id: number, description: string, price: number, img: string = '', type: 'heal' | 'mana/stamina' | 'strength' | 'protection' | 'xp', power: number){
        super(name, id, description, price, img)
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

// * Classe item card
class Card extends Item {
    private efect: active

    constructor(name: string, id: number, description: string, price: number, img: string = '', efect: active){
        super(name, id, description, price, img)
        this.efect = efect
    }

    use(){
        const rtrn = this.efect()

        if(rtrn != undefined) return rtrn
    }
}

// * Catálogo dos itens
const Catalog = {
    Weapons: {
        testeSword: new Weapon('Espada Teste', 1, 'Apenas uma espada de teste', 100, '', 50, 75),
        testeSword2: new Weapon('Espada Teste', 2, 'Apenas uma espada de teste', 100, '', 50, 75),
        testeSword3: new Weapon('Espada Teste', 3, 'Apenas uma espada de teste', 100, '', 50, 75)
    },

    Armors: {
        testArmor: new Armor('Armadura Teste', 4, 'Apenas uma armadura de teste', 100, '', 50, 75),
        testArmor2: new Armor('Armadura Teste', 5, 'Apenas uma armadura de teste', 100, '', 50, 75),
        testArmor3: new Armor('Armadura Teste', 6, 'Apenas uma armadura de teste', 100, '', 50, 75),
        testArmor4: new Armor('Armadura Teste', 7, 'Apenas uma armadura de teste', 100, '', 50, 75)
    },

    Potions: {
        testPotion: new Potion('Pequena Cura', 8, 'Apenas uma poção de teste', 100, '', 'heal', 25)
    },

    Cards: {
        testCard: new Card('Olá!', 9, 'Apenas um card de teste', 10, '', () => console.log('Olá')),
        testCard2: new Card('Dev', 9, 'Apenas um card de teste', 10, '', () => console.log('Desenvolvida por mim, Aluísio!'))
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
    },

    itensDetails: {
        conteiner: $('#itensDetails'),
        button: $('#close-itensDetails'),

        open(itemId: string){
            if(PopUp.itensDetails.conteiner.hasClass('not-active')){
                PopUp.itensDetails.conteiner.removeClass('not-active')
                PopUp.itensDetails.conteiner.addClass('active')

                let id = Number(itemId.split('-')[1])
                PopUp.itensDetails.addItemDetais(id)
            }
        },

        close(){
            if(PopUp.itensDetails.conteiner.hasClass('active')){
                PopUp.itensDetails.conteiner.removeClass('active')
                PopUp.itensDetails.conteiner.addClass('not-active')
            }
        },

        addItemDetais(id: number){
            let selectedProduct: Item
            {
                let iArray = [
                    Catalog.Weapons,
                    Catalog.Armors,
                    Catalog.Potions,
                    Catalog.Cards
                ]

                for(let i = 0; i < iArray.length; i++){
                    for(let product in iArray[i]){
                        if(iArray[i][`${product}`].getId() == id) {
                            selectedProduct = iArray[i][`${product}`]
                            break
                        }
                    }

                    if(selectedProduct != undefined) break
                }
            }

            PopUp.buyMsg.selectedProduct = selectedProduct

            $('#itensDetails > div > h2').text(selectedProduct.getName())
            $('#itensDetails > div > img').attr('src', `${selectedProduct.getImg()}`).attr('alt', `${selectedProduct.getName()}`)
            $('#coastDetails').val(`${selectedProduct.getPrice()} coins`)
            $('#itensDetails > div > p').text(selectedProduct.getDescription())
        }
    },

    buyMsg: {
        conteiner: $('#buyMsg'),
        openButton: $('#buyItem'),
        closeButton: $('#close-buyMsg'),
        selectedProduct: new Item('undefined', 0, '', 0),

        open(){
            PopUp.itensDetails.close()

            let buy = PopUp.buyMsg.selectedProduct.buy(50)

            if(buy == undefined) $('#buyMsg > div > h2').text("Não foi possível realizar a compra!")

            else $('#buyMsg > div > h2').text("Compra realizada com sucesso!")

            PopUp.buyMsg.conteiner.removeClass('not-active')
            PopUp.buyMsg.conteiner.addClass('active')
        },

        close(){
            PopUp.buyMsg.conteiner.removeClass('active')
            PopUp.buyMsg.conteiner.addClass('not-active')
        }
    }
}

// * Eventos de click
{
    PopUp.weapons.button.on('click', PopUp.weapons.open)
    PopUp.armors.button.on('click', PopUp.armors.open)
    PopUp.potions.button.on('click', PopUp.potions.open)
    PopUp.cards.button.on('click', PopUp.cards.open)
    PopUp.itensDetails.button.on('click', PopUp.itensDetails.close)
    PopUp.buyMsg.openButton.on('click', PopUp.buyMsg.open)
    PopUp.buyMsg.closeButton.on('click', PopUp.buyMsg.close)
}

// * Renderização dos produtos
{
    let iArray = [
        Catalog.Weapons,
        Catalog.Armors,
        Catalog.Potions,
        Catalog.Cards
    ]

    let conteiners = [
        PopUp.weapons.conteiner,
        PopUp.armors.conteiner,
        PopUp.potions.conteiner,
        PopUp.cards.conteiner
    ]

    for(let i = 0; i < iArray.length; i++){
        let newColumn: JQuery<HTMLElement>
        let item: number
        
        for(let product in iArray[i]){
            if(conteiners[i].is(':empty') || item == 2){
                newColumn = $('<div />').addClass('column')
                conteiners[i].append(newColumn)
                item = 0
            }

            let imgDetails = $('<figure />')
            imgDetails.append($('<img />').attr('src', `${iArray[i][`${product}`].getImg()}`).attr('alt', `${iArray[i][`${product}`].getName()}`))
            imgDetails.append($('<figcaption />').html(`${iArray[i][`${product}`].getName()}<br>${iArray[i][`${product}`].getPrice()} coins`))

            let newProduct = $('<div />').addClass('product').addClass('button').attr('onclick', `PopUp.itensDetails.open("item-${iArray[i][`${product}`].getId()}")`).append(imgDetails)
            newColumn.append(newProduct)

            item++
        }
    }
}