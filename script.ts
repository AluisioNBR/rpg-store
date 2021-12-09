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
        conteiner: $('#potion-sale'),
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

PopUp.weapons.button.on('click', PopUp.weapons.open)
PopUp.armors.button.on('click', PopUp.armors.open)
PopUp.potions.button.on('click', PopUp.potions.open)
PopUp.cards.button.on('click', PopUp.cards.open)