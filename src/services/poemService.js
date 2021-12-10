const poems = {
    "1" : {
        "id": 1,
        "ownerId": 1,
        "title": "Молитва",
        "author": "Иван Вазов",
        "excerpt": "Дядо господи, прости ме,\nмоля ти се от душа,\nс ум и разум надари ме,\nда не мога да греша!",
        "content": "Дядо господи, прости ме,\nмоля ти се от душа,\nс ум и разум надари ме,\nда не мога да греша!\n\nЗапази ми ти сърцето\n от зли мисли и неща,\nвсичко видиш от небето:\nзло до мен недей праща!\n\nДай на мама, дай на тате\nздравье, сила и живот,\nмир, любов на всички братя\nи добро на наш народ!",
        "liked": 0,
        "disliked": 0
    },
    "2" : {
        "id": 2,
        "ownerId": 1,
        "title": "Есен",
        "author": "Иван Вазов",
        "excerpt": "Закапаха листата,\nпосърна ми тревица,\nповяхнаха цветята:\nя гледайте земята\nтъжи като вдовица!",
        "content": "Закапаха листата,\nпосърна ми тревица,\nповяхнаха цветята:\nя гледайте земята\nтъжи като вдовица!\n\nПрестаха всички птички\nда пеят като луди,\nусърнал'те горички\nвеч никой глас не губи,\nи малки лястовички\nстудът далеч прокуди.\n\n Не бойте се, градини,\nцветя, гори листнати!\nЗимата ще да мине\nи пролет пак ще прати\nпремени вам богати!",
        "liked": 0,
        "disliked": 0
    },
    "3" : {
        "id": 3,
        "ownerId": 2,
        "title": "Две хубави очи",
        "author": "Пейо Яворов",
        "excerpt": "Две хубави очи. Душата на дете\nв две хубави очи; - музика - лъчи.\nНе искат и не обещават те...",
        "content": "Две хубави очи. Душата на дете\nв две хубави очи; - музика - лъчи.\nНе искат и не обещават те...\nДушата ми се моли,\nдете,\nдушата ми се моли!\n\nСтрасти и неволи\nще хвърлят утре върху тях\nбулото на срам и грях.\nБулото на срам и грях -\nне ще го хвърлят върху тях\nстрасти и неволи.\n\nДушата ми се моли,\nдете,\nдушата ми се моли...\nНе искат и не обещават те! -\nДве хубави очи. Музика, лъчи\nв две хубави очи. Душата на дете.\n",
        "liked": 0,
        "disliked": 0
    }
};

export function getAll() {
    return Object.keys(poems);
}

export function get(id) {
    return poems[id];
}