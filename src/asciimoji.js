var asciimoji = function(text, options, userDictionary) {

  "use strict";

  var o = options || {
    prefix: '(',
    suffix: ')'
  };

  var dictionary = {
    angel: {
      words: ['angel'],
      ascii: '☜(⌒▽⌒)☞'
    },
    apple: {
      words: ['apple'],
      ascii: ''
    },
    awkward: {
      words: ['awkward'],
      ascii: '•͡˘㇁•͡˘'
    },
    barcode: {
      words: ['barcode'],
      ascii: '█║▌│ █│║▌ ║││█║▌ │║║█║ │║║█║'
    },
    bat: {
      words: ['bat'],
      ascii: '/|\\( ;,;)/|\\'
    },
    bear: {
      words: ['bear', 'koala'],
      ascii: 'ʕ·͡ᴥ·ʔ﻿'
    },
    bubbles: {
      words: ['bubbles'],
      ascii: '( ˘ ³˘)ノ°ﾟº❍｡'
    },
    butterfly: {
      words: ['butterfly'],
      ascii: 'ƸӜƷ'
    },
    cat: {
      words: ['cat'],
      ascii: '(= ФェФ=)'
    },
    cloud: {
      words: ['cloud'],
      ascii: '☁'
    },
    club: {
      words: ['club'],
      ascii: '♣'
    },
    command: {
      words: ['cmd', 'command'],
      ascii: '⌘'
    },
    copyright: {
      words: ['copy','c'],
      ascii: '©'
    },
    creep: {
      words: ['creep'],
      ascii: 'ԅ(≖‿≖ԅ)'
    },
    cross: {
      words: ['cross'],
      ascii: '†'
    },
    cry: {
      words: ['cry'],
      ascii: 'ಥ︵ಥ'
    },
    cute: {
      words: ['cute'],
      ascii: '｡◕ ‿ ◕｡'
    },
    diamond: {
      words: ['diamond'],
      ascii: '♦'
    },
    d1: {
      words: ['d1'],
      ascii: '⚀'
    },
    d2: {
      words: ['d2'],
      ascii: '⚁'
    },
    d3: {
      words: ['d3'],
      ascii: '⚂'
    },
    d4: {
      words: ['d4'],
      ascii: '⚃'
    },
    d5: {
      words: ['d5'],
      ascii: '⚄'
    },
    d6: {
      words: ['d6'],
      ascii: '⚅'
    },
    dollar: {
      words: ['dollar'],
      ascii: '$'
    },
    dollar100: {
      words: ['dollar100'],
      ascii: '[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]'
    },
    dong: {
      words: ['dong'],
      ascii: '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄',
    },
    donger: {
      words: ['donger'],
      ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
    },
    dontcare: {
      words: ['dontcare'],
      ascii: '╭∩╮（︶︿︶）╭∩╮'
    },
    donotwant: {
      words: ['do not want', 'dontwant'],
      ascii: 'ヽ(｀Д´)ﾉ'
    },
    doubletableflip: {
      words: ['doubletableflip'],
      ascii: '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻'
    },
    down: {
      words: ['down'],
      ascii: '↓'
    },
    dunnolol: {
      words: ['dunno'],
      ascii: '¯\\(°_o)/¯'
    },
    euro: {
      words: ['euro'],
      ascii: '€'
    },
    evil: {
      words: ['evil'],
      ascii: 'ψ(｀∇´)ψ'
    },
    facepalm: {
      words: ['facepalm'],
      ascii: '(>ლ)'
    },
    fart: {
      words: ['fart'],
      ascii: '(ˆ⺫ˆ๑)<3'
    },
    finn: {
      words: ['finn'],
      ascii: '| (• ◡•)|'
    },
    flower: {
      words: ['flower', 'flor'],
      ascii: '(✿◠‿◠)'
    },
    flower2: {
      words: ['f'],
      ascii: '✿'
    },
    frown: {
      words: ['frown'],
      ascii: '(ღ˘⌣˘ღ)'
    },
    fuckyou: {
      words: ['fuckyou', 'fu'],
      ascii: '┌П┐(⊙_⊙)'
    },
    gentleman: {
      words: ['gentleman', 'sir', 'monocle'],
      ascii: 'ಠ_ರೃ'
    },
    gimme: {
      words: ['gimme'],
      ascii: '༼ つ ◕_◕ ༽つ'
    },
    glitterbomb: {
      words: ['glitter'],
      ascii: '(*・_・)ノ⌒*`*`*'
    },
    goatse: {
      words: ['goatse'],
      ascii: '(з๏ε)'
    },
    gun: {
      words: ['gun', 'mg'],
      ascii: '︻╦╤─'
    },
    haha: {
      words: ['haha'],
      ascii: '٩(^‿^)۶'
    },
    happy: {
      words: ['happy'],
      ascii: 'ʘ‿ʘ'
    },
    heart: {
      words: ['h', 'heart'],
      ascii: '♥'
    },
    hello: {
      words: ['hello', 'ohai', 'wave', 'bye'],
      ascii: '|ʘ‿ʘ)╯'
    },
    hipster: {
      words: ['hipster'],
      ascii: '(ʘ෴̴͜ʘ)'
    },
    hugs: {
      words: ['hug', 'hugs'],
      ascii: '(づ｡◕‿‿◕｡)づ'
    },
    inlove: {
      words: ['inlove'],
      ascii: '(っ´ω`c)♡'
    },
    jake: {
      words: ['jake'],
      ascii: '(❍ᴥ❍ʋ)'
    },
    kiss: {
      words: ['kiss'],
      ascii: '(づ ￣ ³￣)づ'
    },
    left: {
      words: ['left'],
      ascii: '←'
    },
    lenny: {
      words: ['lenny'],
      ascii: '( ͡° ͜ʖ ͡°)'
    },
    loading: {
      words: ['loading'],
      ascii: '███▒▒▒▒▒▒▒'
    },
    love: {
      words: ['love'],
      ascii: '♥‿♥'
    },
    lumpy: {
      words: ['lumpy'],
      ascii: '꒰ ꒡⌓꒡꒱'
    },
    meh: {
      words: ['meh'],
      ascii: 'ಠ_ಠ'
    },
    monster: {
      words: ['monster'],
      ascii: '༼ ༎ຶ ෴ ༎ຶ༽'
    },
    noclue: {
      words: ['noclue'],
      ascii: '／人◕ __ ◕人＼'
    },
    nom: {
      words: ['nom', 'yummy'],
      ascii: '(っˆڡˆς)'
    },
    note: {
      words: ['note', 'sing'],
      ascii: '♫'
    },
    nyeh: {
      words: ['nyeh'],
      ascii: '@^@'
    },
    omg: {
      words: ['omg'],
      ascii: '◕_◕'
    },
    option: {
      words: ['opt', 'option'],
      ascii: '⌥'
    },
    ohreally: {
      words: ['orly'],
      ascii: '(눈_눈)'
    },
    peace: {
      words: ['peace'],
      ascii: '✌(-‿-)✌'
    },
    pooh: {
      words: ['pooh'],
      ascii: 'ʕ •́؈•̀)'
    },
    porcupine: {
      words: ['porcupine'],
      ascii: '(•ᴥ• )́`́\'́`́\'́⻍'
    },
    pound: {
      words: ['pound'],
      ascii: '£'
    },
    praise: {
      words: ['praise'],
      ascii: '(☝ ՞ਊ ՞)☝'
    },
    punch: {
      words: ['punch'],
      ascii: 'O=(\'-\'Q)'
    },
    rage: {
      words: ['rage', 'mad', 'angry'],
      ascii: 't(ಠ益ಠt)'
    },
    right: {
      words: ['right'],
      ascii: '→'
    },
    riot: {
      words: ['riot'],
      ascii: '୧༼ಠ益ಠ༽୨'
    },
    rolleyes: {
      words: ['rolleyes'],
      ascii: '(◔_◔)'
    },
    sad: {
      words: ['sad'],
      ascii: 'ε(´סּ︵סּ`)з'
    },
    shrug: {
      words: ['shrug'],
      ascii: '¯\\_(ツ)_/¯'
    },
    sob: {
      words: ['sob'],
      ascii: '(;´༎ຶД༎ຶ`)'
    },
    spade: {
      words: ['spade'],
      ascii: '♠'
    },
    squid: {
      words: ['squid'],
      ascii: '<コ:彡'
    },
    star: {
      words: ['star'],
      ascii: '★'
    },
    stoned: {
      words: ['stoned'],
      ascii: '(◞ิᴗ◟ิ*)'
    },
    strong: {
      words: ['strong'],
      ascii: 'ᕙ(⇀‸↼‶)ᕗ'
    },
    sun: {
      words: ['sun'],
      ascii: '☀'
    },
    tableflip: {
      words: ['tableflip'],
      ascii: '(ノ ゜Д゜)ノ ︵ ┻━┻'
    },
    trademark: {
      words: ['tm'],
      ascii: '™'
    },
    triangle: {
      words: ['triangle', 't'],
      ascii: '▲',
    },
    up: {
      words: ['up'],
      ascii: '↑'
    },
    whaa: {
      words: ['whaa'],
      ascii: 'Ö'
    },
    what: {
      words: ['what'],
      ascii: '(•̪●)'
    },
    whoa: {
      words: ['whoa'],
      ascii: '(°o•)'
    },
    why: {
      words: ['why'],
      ascii: 'ლ(`◉◞౪◟◉‵ლ)'
    },
    wink: {
      words: ['wink'],
      ascii: '( •ॢ◡-ॢ)-*'
    },
    wtf: {
      words: ['wtf'],
      ascii: '(⊙＿⊙\')'
    },
    yay: {
      words: ['yay'],
      ascii: '\\( ﾟヮﾟ)/'
    },
    yen: {
      words: ['yen'],
      ascii: '¥'
    },
    yolo: {
      words: ['yolo'],
      ascii: 'Yᵒᵘ Oᶰˡʸ Lᶤᵛᵉ Oᶰᶜᵉ'
    },
    yuno: {
      words: ['y u no', 'yuno'],
      ascii: '(屮ﾟДﾟ)屮 Y U NO'
    },
    zoidberg: {
      words: ['zoidberg'],
      ascii: '(V) (°,,,,°) (V)'
    },
    zombie: {
      words: ['zombie'],
      ascii: '[¬º-°]¬'
    }
  },
  symmetricalDictionary = {};

  for(var hash in userDictionary) dictionary[hash] = userDictionary[hash];

  for(var term in dictionary) {
    for(var i = 0; i < dictionary[term].words.length; ++i) symmetricalDictionary[dictionary[term].words[i]] = dictionary[term].ascii;
  }

  function replace( text ) {
    text = text.replace(new RegExp("[\\"+o.prefix+"]([a-z0-9 ]*)[\\"+o.suffix+"]", "gim"), function(a, b) {
      return symmetricalDictionary[b.toLowerCase()] || a;
    });
    return text;
  }

  if( text === undefined ) return dictionary;
  else return replace(text);
};