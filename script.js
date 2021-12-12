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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Item_name, _Item_id, _Item_price, _Item_img, _Weapon_damage, _Weapon_durability, _Armor_protection, _Armor_durability, _Potion_type, _Potion_power, _Card_efect;
var Item = /** @class */ (function () {
    function Item(name, id, price, img) {
        if (img === void 0) { img = ''; }
        _Item_name.set(this, void 0);
        _Item_id.set(this, void 0);
        _Item_price.set(this, void 0);
        _Item_img.set(this, void 0);
        __classPrivateFieldSet(this, _Item_name, name, "f");
        __classPrivateFieldSet(this, _Item_id, id, "f");
        __classPrivateFieldSet(this, _Item_price, price, "f");
        __classPrivateFieldSet(this, _Item_img, img, "f");
    }
    Item.prototype.buy = function (money) {
        money = money - this.getPrice();
        if (money >= 0) {
            return money;
        }
    };
    Item.prototype.getName = function () {
        return __classPrivateFieldGet(this, _Item_name, "f");
    };
    Item.prototype.getId = function () {
        return __classPrivateFieldGet(this, _Item_id, "f");
    };
    Item.prototype.getPrice = function () {
        return __classPrivateFieldGet(this, _Item_price, "f");
    };
    Item.prototype.getImg = function () {
        return __classPrivateFieldGet(this, _Item_img, "f");
    };
    return Item;
}());
_Item_name = new WeakMap(), _Item_id = new WeakMap(), _Item_price = new WeakMap(), _Item_img = new WeakMap();
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, id, price, img, damage, durability) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, price, img) || this;
        _Weapon_damage.set(_this, void 0);
        _Weapon_durability.set(_this, void 0);
        __classPrivateFieldSet(_this, _Weapon_damage, damage, "f");
        __classPrivateFieldSet(_this, _Weapon_durability, durability, "f");
        return _this;
    }
    Weapon.prototype.getDamage = function () {
        return __classPrivateFieldGet(this, _Weapon_damage, "f");
    };
    Weapon.prototype.setDurability = function (newDurability) {
        __classPrivateFieldSet(this, _Weapon_durability, newDurability, "f");
    };
    Weapon.prototype.getDurability = function () {
        return __classPrivateFieldGet(this, _Weapon_durability, "f");
    };
    return Weapon;
}(Item));
_Weapon_damage = new WeakMap(), _Weapon_durability = new WeakMap();
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(name, id, price, img, protection, durability) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, price, img) || this;
        _Armor_protection.set(_this, void 0);
        _Armor_durability.set(_this, void 0);
        __classPrivateFieldSet(_this, _Armor_protection, protection, "f");
        __classPrivateFieldSet(_this, _Armor_durability, durability, "f");
        return _this;
    }
    Armor.prototype.getProtection = function () {
        return __classPrivateFieldGet(this, _Armor_protection, "f");
    };
    Armor.prototype.setDurability = function (newDurability) {
        __classPrivateFieldSet(this, _Armor_durability, newDurability, "f");
    };
    Armor.prototype.getDurability = function () {
        return __classPrivateFieldGet(this, _Armor_durability, "f");
    };
    return Armor;
}(Item));
_Armor_protection = new WeakMap(), _Armor_durability = new WeakMap();
var Potion = /** @class */ (function (_super) {
    __extends(Potion, _super);
    function Potion(name, id, price, img, type, power) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, price, img) || this;
        _Potion_type.set(_this, void 0);
        _Potion_power.set(_this, void 0);
        __classPrivateFieldSet(_this, _Potion_type, type, "f");
        __classPrivateFieldSet(_this, _Potion_power, power, "f");
        return _this;
    }
    Potion.prototype.use = function () {
        if (this.getType() == 'heal')
            console.log("A po\u00E7\u00E3o " + this.getName() + " recupera " + __classPrivateFieldGet(this, _Potion_power, "f") + " pontos de vida!");
        else if (this.getType() == 'mana/stamina')
            console.log("A po\u00E7\u00E3o " + this.getName() + " recupera " + __classPrivateFieldGet(this, _Potion_power, "f") + " pontos de mana/vigor!");
        else if (this.getType() == 'strength')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta a for\u00E7a em " + __classPrivateFieldGet(this, _Potion_power, "f") + " pontos!");
        else if (this.getType() == 'protection')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta a prote\u00E7\u00E3o em " + __classPrivateFieldGet(this, _Potion_power, "f") + " pontos!");
        else if (this.getType() == 'xp')
            console.log("A po\u00E7\u00E3o " + this.getName() + " aumenta o xp em " + __classPrivateFieldGet(this, _Potion_power, "f") + " pontos!");
    };
    Potion.prototype.getType = function () {
        return __classPrivateFieldGet(this, _Potion_type, "f");
    };
    Potion.prototype.getPower = function () {
        return __classPrivateFieldGet(this, _Potion_power, "f");
    };
    return Potion;
}(Item));
_Potion_type = new WeakMap(), _Potion_power = new WeakMap();
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(name, id, price, img, efect) {
        if (img === void 0) { img = ''; }
        var _this = _super.call(this, name, id, price, img) || this;
        _Card_efect.set(_this, void 0);
        __classPrivateFieldSet(_this, _Card_efect, efect, "f");
        return _this;
    }
    Card.prototype.use = function () {
        var rtrn = __classPrivateFieldGet(this, _Card_efect, "f").call(this);
        if (rtrn != undefined)
            return rtrn;
    };
    return Card;
}(Item));
_Card_efect = new WeakMap();
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
    }
};
{
    PopUp.weapons.button.on('click', PopUp.weapons.open);
    PopUp.armors.button.on('click', PopUp.armors.open);
    PopUp.potions.button.on('click', PopUp.potions.open);
    PopUp.cards.button.on('click', PopUp.cards.open);
}
