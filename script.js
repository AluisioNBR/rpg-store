var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// * Classe item padrão
var Item = /** @class */ (function () {
    function Item(name, id, description, price, img) {
        if (img === void 0) { img = ''; }
        this.name = name;
        this.id = id;
        this.description = description;
        this.price = price;
        this.img = img;
    }
    Item.prototype.buy = function (money) {
        money = money - this.getPrice();
        if (money >= 0) {
            return money;
        }
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getDescription = function () {
        return this.description;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getImg = function () {
        return this.img;
    };
    return Item;
}());
// * Classe item arma
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, id, description, price, img, damage, durability) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, description, price, img) || this;
        _this.damage = damage;
        _this.durability = durability;
        return _this;
    }
    Weapon.prototype.getDamage = function () {
        return this.damage;
    };
    Weapon.prototype.setDurability = function (newDurability) {
        this.durability = newDurability;
    };
    Weapon.prototype.getDurability = function () {
        return this.durability;
    };
    return Weapon;
}(Item));
// * Classe item armadura
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(name, id, description, price, img, protection, durability) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, description, price, img) || this;
        _this.protection = protection;
        _this.durability = durability;
        return _this;
    }
    Armor.prototype.getProtection = function () {
        return this.protection;
    };
    Armor.prototype.setDurability = function (newDurability) {
        this.durability = newDurability;
    };
    Armor.prototype.getDurability = function () {
        return this.durability;
    };
    return Armor;
}(Item));
// * Classe item poção
var Potion = /** @class */ (function (_super) {
    __extends(Potion, _super);
    function Potion(name, id, description, price, img, type, power) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, description, price, img) || this;
        _this.type = type;
        _this.power = power;
        return _this;
    }
    Potion.prototype.use = function () {
        if (this.getType() == 'heal')
            console.log("A po\u00E7\u00E3o " + this.getName() + " recupera " + this.power + " pontos de vida!");
        else if (this.getType() == 'mana/stamina')
            console.log("A po\u00E7\u00E3o " + this.getName() + " recupera " + this.power + " pontos de mana/vigor!");
        else if (this.getType() == 'strength')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta a for\u00E7a em " + this.power + " pontos!");
        else if (this.getType() == 'protection')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta a prote\u00E7\u00E3o em " + this.power + " pontos!");
        else if (this.getType() == 'xp')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta o xp em " + this.power + " pontos!");
    };
    Potion.prototype.getType = function () {
        return this.type;
    };
    Potion.prototype.getPower = function () {
        return this.power;
    };
    return Potion;
}(Item));
// * Classe item card
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(name, id, description, price, img, efect) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, description, price, img) || this;
        _this.efect = efect;
        return _this;
    }
    Card.prototype.use = function () {
        var rtrn = this.efect();
        if (rtrn != undefined)
            return rtrn;
    };
    return Card;
}(Item));
// * Catálogo dos itens
var Catalog = {
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
        testCard: new Card('Olá!', 9, 'Apenas um card de teste', 10, '', function () { return console.log('Olá'); }),
        testCard2: new Card('Dev', 9, 'Apenas um card de teste', 10, '', function () { return console.log('Desenvolvida por mim, Aluísio!'); })
    }
};
var PopUp = {
    weapons: {
        conteiner: $('#weapons-sale'),
        button: $('#weapons-view-button'),
        open: function () {
            if (PopUp.weapons.conteiner.hasClass('not-active')) {
                PopUp.weapons.conteiner.removeClass('not-active');
                PopUp.weapons.conteiner.addClass('active');
                PopUp.armors.close();
                PopUp.potions.close();
                PopUp.cards.close();
            }
        },
        close: function () {
            if (PopUp.weapons.conteiner.hasClass('active')) {
                PopUp.weapons.conteiner.removeClass('active');
                PopUp.weapons.conteiner.addClass('not-active');
            }
        }
    },
    armors: {
        conteiner: $('#armor-sale'),
        button: $('#armors-view-button'),
        open: function () {
            if (PopUp.armors.conteiner.hasClass('not-active')) {
                PopUp.armors.conteiner.removeClass('not-active');
                PopUp.armors.conteiner.addClass('active');
                PopUp.weapons.close();
                PopUp.potions.close();
                PopUp.cards.close();
            }
        },
        close: function () {
            if (PopUp.armors.conteiner.hasClass('active')) {
                PopUp.armors.conteiner.removeClass('active');
                PopUp.armors.conteiner.addClass('not-active');
            }
        }
    },
    potions: {
        conteiner: $('#potions-sale'),
        button: $('#potions-view-button'),
        open: function () {
            if (PopUp.potions.conteiner.hasClass('not-active')) {
                PopUp.potions.conteiner.removeClass('not-active');
                PopUp.potions.conteiner.addClass('active');
                PopUp.armors.close();
                PopUp.weapons.close();
                PopUp.cards.close();
            }
        },
        close: function () {
            if (PopUp.potions.conteiner.hasClass('active')) {
                PopUp.potions.conteiner.removeClass('active');
                PopUp.potions.conteiner.addClass('not-active');
            }
        }
    },
    cards: {
        conteiner: $('#cards-sale'),
        button: $('#cards-view-button'),
        open: function () {
            if (PopUp.cards.conteiner.hasClass('not-active')) {
                PopUp.cards.conteiner.removeClass('not-active');
                PopUp.cards.conteiner.addClass('active');
                PopUp.armors.close();
                PopUp.potions.close();
                PopUp.weapons.close();
            }
        },
        close: function () {
            if (PopUp.cards.conteiner.hasClass('active')) {
                PopUp.cards.conteiner.removeClass('active');
                PopUp.cards.conteiner.addClass('not-active');
            }
        }
    },
    itensDetails: {
        conteiner: $('#itensDetails'),
        button: $('#close-itensDetails'),
        open: function (itemId) {
            if (PopUp.itensDetails.conteiner.hasClass('not-active')) {
                PopUp.itensDetails.conteiner.removeClass('not-active');
                PopUp.itensDetails.conteiner.addClass('active');
                var id = Number(itemId.split('-')[1]);
                PopUp.itensDetails.addItemDetais(id);
            }
        },
        close: function () {
            if (PopUp.itensDetails.conteiner.hasClass('active')) {
                PopUp.itensDetails.conteiner.removeClass('active');
                PopUp.itensDetails.conteiner.addClass('not-active');
            }
        },
        addItemDetais: function (id) {
            var selectedProduct;
            {
                var iArray = [
                    Catalog.Weapons,
                    Catalog.Armors,
                    Catalog.Potions,
                    Catalog.Cards
                ];
                for (var i = 0; i < iArray.length; i++) {
                    for (var product in iArray[i]) {
                        if (iArray[i]["" + product].getId() == id) {
                            selectedProduct = iArray[i]["" + product];
                            break;
                        }
                    }
                    if (selectedProduct != undefined)
                        break;
                }
            }
            $('#itensDetails > div > h3').text(selectedProduct.getName());
            $('#itensDetails > div > img').attr('src', "" + selectedProduct.getImg()).attr('alt', "" + selectedProduct.getName());
            $('#coastDetails').val(selectedProduct.getPrice() + " coins");
            $('#itensDetails > div > p').text(selectedProduct.getDescription());
        }
    }
};
// * Eventos de click
{
    PopUp.weapons.button.on('click', PopUp.weapons.open);
    PopUp.armors.button.on('click', PopUp.armors.open);
    PopUp.potions.button.on('click', PopUp.potions.open);
    PopUp.cards.button.on('click', PopUp.cards.open);
    PopUp.itensDetails.button.on('click', PopUp.itensDetails.close);
}
// * Renderização dos produtos
{
    var iArray = [
        Catalog.Weapons,
        Catalog.Armors,
        Catalog.Potions,
        Catalog.Cards
    ];
    var conteiners = [
        PopUp.weapons.conteiner,
        PopUp.armors.conteiner,
        PopUp.potions.conteiner,
        PopUp.cards.conteiner
    ];
    for (var i = 0; i < iArray.length; i++) {
        var newColumn = void 0;
        var item = void 0;
        for (var product in iArray[i]) {
            if (conteiners[i].is(':empty') || item == 2) {
                newColumn = $('<div />').addClass('column');
                conteiners[i].append(newColumn);
                item = 0;
            }
            var imgDetails = $('<figure />');
            imgDetails.append($('<img />').attr('src', "" + iArray[i]["" + product].getImg()).attr('alt', "" + iArray[i]["" + product].getName()));
            imgDetails.append($('<figcaption />').html(iArray[i]["" + product].getName() + "<br>" + iArray[i]["" + product].getPrice() + " coins"));
            var newProduct = $('<div />').addClass('product').addClass('button').attr('onclick', "PopUp.itensDetails.open(\"item-" + iArray[i]["" + product].getId() + "\")").append(imgDetails);
            newColumn.append(newProduct);
            item++;
        }
    }
}
