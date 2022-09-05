

// THIS FILE IS GENERATED AUTOMATICALLY
// Don't edit this file by hand. 
// Edit the build located in the faucet-wasm folder.

let scrypt, mine;
let scryptPromise;

module.exports = {
  getScrypt: function() { return scrypt; },
  getScryptMine: function() { return mine; },
  getScryptReadyPromise: function() { return scryptPromise; }
};


var base32768 = (function (exports) {
  'use strict';

  /**
    Base32768 is a binary-to-text encoding optimised for UTF-16-encoded text.
    (e.g. Windows, Java, JavaScript)
  */

  // Z is a number, usually a uint15 but sometimes a uint7

  const BITS_PER_CHAR = 15; // Base32768 is a 15-bit encoding
  const BITS_PER_BYTE = 8;

  // Base32768 uses blocks of 32 characters.
  const blockSize = 1 << 5;
  const repertoires = [
    'ҠԀڀڠݠހ߀ကႠᄀᄠᅀᆀᇠሀሠበዠጠᎠᏀᐠᑀᑠᒀᒠᓀᓠᔀᔠᕀᕠᖀᖠᗀᗠᘀᘠᙀᚠᛀកᠠᡀᣀᦀ᧠ᨠᯀᰀᴀ⇠⋀⍀⍠⎀⎠⏀␀─┠╀╠▀■◀◠☀☠♀♠⚀⚠⛀⛠✀✠❀➀➠⠀⠠⡀⡠⢀⢠⣀⣠⤀⤠⥀⥠⦠⨠⩀⪀⪠⫠⬀⬠⭀ⰀⲀⲠⳀⴀⵀ⺠⻀㇀㐀㐠㑀㑠㒀㒠㓀㓠㔀㔠㕀㕠㖀㖠㗀㗠㘀㘠㙀㙠㚀㚠㛀㛠㜀㜠㝀㝠㞀㞠㟀㟠㠀㠠㡀㡠㢀㢠㣀㣠㤀㤠㥀㥠㦀㦠㧀㧠㨀㨠㩀㩠㪀㪠㫀㫠㬀㬠㭀㭠㮀㮠㯀㯠㰀㰠㱀㱠㲀㲠㳀㳠㴀㴠㵀㵠㶀㶠㷀㷠㸀㸠㹀㹠㺀㺠㻀㻠㼀㼠㽀㽠㾀㾠㿀㿠䀀䀠䁀䁠䂀䂠䃀䃠䄀䄠䅀䅠䆀䆠䇀䇠䈀䈠䉀䉠䊀䊠䋀䋠䌀䌠䍀䍠䎀䎠䏀䏠䐀䐠䑀䑠䒀䒠䓀䓠䔀䔠䕀䕠䖀䖠䗀䗠䘀䘠䙀䙠䚀䚠䛀䛠䜀䜠䝀䝠䞀䞠䟀䟠䠀䠠䡀䡠䢀䢠䣀䣠䤀䤠䥀䥠䦀䦠䧀䧠䨀䨠䩀䩠䪀䪠䫀䫠䬀䬠䭀䭠䮀䮠䯀䯠䰀䰠䱀䱠䲀䲠䳀䳠䴀䴠䵀䵠䶀䷀䷠一丠乀习亀亠什仠伀传佀你侀侠俀俠倀倠偀偠傀傠僀僠儀儠兀兠冀冠净几刀删剀剠劀加勀勠匀匠區占厀厠叀叠吀吠呀呠咀咠哀哠唀唠啀啠喀喠嗀嗠嘀嘠噀噠嚀嚠囀因圀圠址坠垀垠埀埠堀堠塀塠墀墠壀壠夀夠奀奠妀妠姀姠娀娠婀婠媀媠嫀嫠嬀嬠孀孠宀宠寀寠尀尠局屠岀岠峀峠崀崠嵀嵠嶀嶠巀巠帀帠幀幠庀庠廀廠开张彀彠往徠忀忠怀怠恀恠悀悠惀惠愀愠慀慠憀憠懀懠戀戠所扠技抠拀拠挀挠捀捠掀掠揀揠搀搠摀摠撀撠擀擠攀攠敀敠斀斠旀无昀映晀晠暀暠曀曠最朠杀杠枀枠柀柠栀栠桀桠梀梠检棠椀椠楀楠榀榠槀槠樀樠橀橠檀檠櫀櫠欀欠歀歠殀殠毀毠氀氠汀池沀沠泀泠洀洠浀浠涀涠淀淠渀渠湀湠満溠滀滠漀漠潀潠澀澠激濠瀀瀠灀灠炀炠烀烠焀焠煀煠熀熠燀燠爀爠牀牠犀犠狀狠猀猠獀獠玀玠珀珠琀琠瑀瑠璀璠瓀瓠甀甠畀畠疀疠痀痠瘀瘠癀癠皀皠盀盠眀眠着睠瞀瞠矀矠砀砠础硠碀碠磀磠礀礠祀祠禀禠秀秠稀稠穀穠窀窠竀章笀笠筀筠简箠節篠簀簠籀籠粀粠糀糠紀素絀絠綀綠緀締縀縠繀繠纀纠绀绠缀缠罀罠羀羠翀翠耀耠聀聠肀肠胀胠脀脠腀腠膀膠臀臠舀舠艀艠芀芠苀苠茀茠荀荠莀莠菀菠萀萠葀葠蒀蒠蓀蓠蔀蔠蕀蕠薀薠藀藠蘀蘠虀虠蚀蚠蛀蛠蜀蜠蝀蝠螀螠蟀蟠蠀蠠血衠袀袠裀裠褀褠襀襠覀覠觀觠言訠詀詠誀誠諀諠謀謠譀譠讀讠诀诠谀谠豀豠貀負賀賠贀贠赀赠趀趠跀跠踀踠蹀蹠躀躠軀軠輀輠轀轠辀辠迀迠退造遀遠邀邠郀郠鄀鄠酀酠醀醠釀釠鈀鈠鉀鉠銀銠鋀鋠錀錠鍀鍠鎀鎠鏀鏠鐀鐠鑀鑠钀钠铀铠销锠镀镠門閠闀闠阀阠陀陠隀隠雀雠需霠靀靠鞀鞠韀韠頀頠顀顠颀颠飀飠餀餠饀饠馀馠駀駠騀騠驀驠骀骠髀髠鬀鬠魀魠鮀鮠鯀鯠鰀鰠鱀鱠鲀鲠鳀鳠鴀鴠鵀鵠鶀鶠鷀鷠鸀鸠鹀鹠麀麠黀黠鼀鼠齀齠龀龠ꀀꀠꁀꁠꂀꂠꃀꃠꄀꄠꅀꅠꆀꆠꇀꇠꈀꈠꉀꉠꊀꊠꋀꋠꌀꌠꍀꍠꎀꎠꏀꏠꐀꐠꑀꑠ꒠ꔀꔠꕀꕠꖀꖠꗀꗠꙀꚠꛀ꜀꜠ꝀꞀꡀ', // length = 1 << 10
    'ƀɀɠʀ' // length = 1 << 2
  ];

  const lookupE = {};
  repertoires.forEach((repertoire, r) => {
    const numZBits = BITS_PER_CHAR - BITS_PER_BYTE * r; // 0 -> 15, 1 -> 7
    const encodeRepertoire = [];
    for (let i = 0; i < repertoire.length; i++) {
      const charCode = repertoire.charCodeAt(i);
      for (let offset = 0; offset < blockSize; offset++) {
        encodeRepertoire.push(String.fromCharCode(charCode + offset));
      }
    }
    lookupE[numZBits] = encodeRepertoire;
  });

  const lookupD = {};
  Object.entries(lookupE).forEach(([numZBits, encodeRepertoire]) => {
    encodeRepertoire.forEach((chr, z) => {
      lookupD[chr] = [Number(numZBits), z];
    });
  });

  const encode = uint8Array => {
    const length = uint8Array.length;

    let str = '';
    let z = 0;
    let numZBits = 0;

    for (let i = 0; i < length; i++) {
      const uint8 = uint8Array[i];

      // Take most significant bit first
      for (let j = BITS_PER_BYTE - 1; j >= 0; j--) {
        const bit = (uint8 >> j) & 1;

        z = (z << 1) + bit;
        numZBits++;

        if (numZBits === BITS_PER_CHAR) {
          str += lookupE[numZBits][z];
          z = 0;
          numZBits = 0;
        }
      }
    }

    if (numZBits !== 0) {
      // Final bits require special treatment.

      // z = bbbbbbcccccccc, numZBits = 14, padBits = 1
      // z = bbbbbcccccccc, numZBits = 13, padBits = 2
      // z = bbbbcccccccc, numZBits = 12, padBits = 3
      // z = bbbcccccccc, numZBits = 11, padBits = 4
      // z = bbcccccccc, numZBits = 10, padBits = 5
      // z = bcccccccc, numZBits = 9, padBits = 6
      // z = cccccccc, numZBits = 8, padBits = 7
      // => Pad `z` out to 15 bits using 1s, then encode as normal (r = 0)

      // z = ccccccc, numZBits = 7, padBits = 0
      // z = cccccc, numZBits = 6, padBits = 1
      // z = ccccc, numZBits = 5, padBits = 2
      // z = cccc, numZBits = 4, padBits = 3
      // z = ccc, numZBits = 3, padBits = 4
      // z = cc, numZBits = 2, padBits = 5
      // z = c, numZBits = 1, padBits = 6
      // => Pad `z` out to 7 bits using 1s, then encode specially (r = 1)

      while (!(numZBits in lookupE)) {
        z = (z << 1) + 1;
        numZBits++;
      }

      str += lookupE[numZBits][z];
    }

    return str
  };

  const decode = str => {
    const length = str.length;

    // This length is a guess. There's a chance we allocate one more byte here
    // than we actually need. But we can count and slice it off later
    const uint8Array = new Uint8Array(Math.floor(length * BITS_PER_CHAR / BITS_PER_BYTE));
    let numUint8s = 0;
    let uint8 = 0;
    let numUint8Bits = 0;

    for (let i = 0; i < length; i++) {
      const chr = str.charAt(i);

      if (!(chr in lookupD)) {
        throw new Error(`Unrecognised Base32768 character: ${chr}`)
      }

      const [numZBits, z] = lookupD[chr];

      if (numZBits !== BITS_PER_CHAR && i !== length - 1) {
        throw new Error('Secondary character found before end of input at position ' + String(i))
      }

      // Take most significant bit first
      for (let j = numZBits - 1; j >= 0; j--) {
        const bit = (z >> j) & 1;

        uint8 = (uint8 << 1) + bit;
        numUint8Bits++;

        if (numUint8Bits === BITS_PER_BYTE) {
          uint8Array[numUint8s] = uint8;
          numUint8s++;
          uint8 = 0;
          numUint8Bits = 0;
        }
      }
    }

    // Final padding bits! Requires special consideration!
    // Remember how we always pad with 1s?
    // Note: there could be 0 such bits, check still works though
    if (uint8 !== ((1 << numUint8Bits) - 1)) {
      throw new Error('Padding mismatch')
    }

    return new Uint8Array(uint8Array.buffer, 0, numUint8s)
  };

  exports.decode = decode;
  exports.encode = encode;

  return exports;

}({}));


const base32768WASM = "Ԑ茻䙠ҠҬ剤䴀Ꮏ无㹀癏陷ꆠᨼᑾ虣星蘠噌ԗꊛꊡ晢Ꙁ噢䘟陏陦ԃ꒽ꗾᅟ噠蘠嘬ڗꊛ꒽ꔀ虠Ԑᆟ陏鹗ꊘᆀ㔾ꜟ星蘿虬ݷꊛ꒽ꗾꜟ无㹂癏鹗ꊛ꒽ꗾꙀ噠ڟ鉠繗ꊛ꒼ᑾ虧星蘿陏鹐⪛ҩꎞᅟᇼ葠ځ囀陨㩌䙎ⳃᯀҠҠҰ囨ҠᰄᛀᏇ杠ݡ㙀䙠ҤҨᯄݠ枡ݡ㙀ҠҰበᯁҠ曠蝀晠ԈԈҤႢҢ枠蛠Ԁ㙀ᖄ㑀ቡݠ暠ڀ㙠㙀▤ቢቡႡݠ晠ҠҨ⪤ቤቨᖄᄡހ㵀⚘ꊴᯂұᒄ暿蚈㹈ᯀԌ㔮⎦崒膻钯㙠ԓ班譒雔ҥႻ厍貰Ԁꐝ敎裉嶒䀙含鱶䥢ꑱ蔞駔圑脷鑭鳶騃㰈߈㞟嘛绺听泖凒ꑕ椸鋏埠㞄牋鷖㦋忱甪钿徒纻⻍鲐ጸ揝敎裉嶒䀙含鳇㥫㩁乲䩁Ԁ暢訪鲗憋荸饎抹䉤荽侣裃ꅳ荑棔矂冎ⵝ锡倩噳覬ꊢ泟㙀■䭀ᔂ㙚ᗡ躠ᓁᖺ㚠㙟曗⦱ҭተ鲡曟ߜ䩀婱樓瀨橦䙁㩀㕈曨㟇䝀㝄㜨柠曞ሜ咤ڄ◣罦ሼᓱ㙂㚆㔎䵢㙢ᖹ钠ᗁⰛ茨ݨ㙷姻仠ጰԄ㝂皦㓄ڔ◣睦Ⴁꊧ弙□亁┄⪧鹭袠ᠡ⫻䋜檣䡀⛠Ҡ橪杸恰ᄰ䝎橸ᖇ陽襄䙅䛄䏐噿蚗⚠㭄坌飒㝇■䭀ڂ㙪ᗡ躠ᠡᖺ㚠㙟曗⦱ҵተ鲡曟ߜ䩀穱樓瀨橴杮懰Ꮠ䥮鶒ڒᖍ鍆郊㙁皣镄Ԕ☋萬晦杪憙胨朄Ҳ晠雨ᘂ㺴㙁㚂㓈㹈▀䐅誠ጡᖻ㚠䘀嵲Ҳᗡ鍄颂✰ڊҤዠ㡈蠰晤杨悀蚀䗀鵷㝀⚤㜬柠ꙁ芨ڈ㟇姳滨仢㒷㙊㚆啎塡䡈㐙贴邀ݴҥᗀ䩑樁ҩተ骡暠敡钎䡀㡈䠙ᒁꔃ廰ݰ䥎趇㝐苠ጰҸ㝁㚆㓄Ԅ◣睦Ⴁꊧ弙■溁┄⪧鹭袠ጡ⫻䋜檦䩐騙߉ዲ鷓㙙㚀键崂һ仠ጰԐ㝁㚆㓄Ԅ◣睦Ⴁꊧ弙■溁┄⪧鹭袠ጡ⫻䋜檣塠⛠Ԑ橤杸恰ݰ䝎橸ᖇ陽襄䙂䛄䏐噿蚗⚠⚤坌飒㝅湠䭀Ⴂ㙒ᗡ躠ጡᖺ㚠㙟曗⦱ҩተ鲡曟ߜ䩀䩑樓瀨橸杮懰ᒐ䥮鶒ڢᖍ鍆郊㙀灠ᛄ䙤♣盠ᘂ☔䜀䙿ဎ㵢Ҳᖡ鋣သᇸ湠溃┇㧑♜晢习ᖑݰ䥎桠㡈䠑ᒁလᔸ苨ڈ㛇塬ᕸ⎂䙂䛌䏜璤䜔☓苠䃂㾷忰ᓐ䚮趒ړ倈晨杯懰Ⴐ䟮鶒Ԃᖩ鍆邂ᄀ樽詠䩐鈛狠ᘂ⡶怕☡躁鷒Ԛᖵ镆䙇䛅䏜鎤䚤☛苠⭂⺷忰ᆐ䞎趖睰䯨晢习䁑ተ䥎桠桨䠑ᒁလᔸ苨Ⴈ㛇塬ᕸ⎂䙈䛌䏜璤䥴☓苠賢㾷忰Ⲑ䚮趒ߛ仠Ⲕ䙁㩀⤈暈㟇䝀ᛄ㜨柠曞ሜ咤Ҵ◣罦ሼᓱ㙀皦㔎䵢㟂ᖹ钠嚡Ⱋ茨ᯈ㙷姹ޝ窠┊㙍㚃畄ᇤ♫萬暔杣憙湥ⵄԆ睠獤䌮䙓䛌萼詢婰䇳狠謴䙄孰᧰䠎顡恨谽負㶁ᇻ䌈ᆍ䡃䆑ԍቼ鶀ᦀ沽铄ޔ▻耬智邀㹵□亁鷒Ԋᖵ镆䙅䛅䏜鎤䛄☛苠㛂⺷忰ተ䞎趖睰捤䔮䙏䛆萼詡驰稓琈檀杯懰ᖐ䟮鶒ݢᖩ鍆邂♀樽詢㩐鈛狠䣂⡶怕☤溁鷒ݲᖵ镆䙒䛅䏜鎤䞔☛苠僢⺷忰ᠰ䞎趖睰罤䌮䙖䛌萼詢詰䇳狠⋂㒷㙁皦啎塠䁈㐙負姊㙈䃈ᓨ㜧彠鍤奎馀㇀朽瓄ᒆ睠搈暾杮懰⩐䥮鶒ᅚᖍ鍆䙚孰ቺ橡㩐ꉙԅቺ鷓㙄皢甮崂㜂ᖽ钠㺁⍛茨ᒈ㛧姻仨壢㖷㙌皣啎塡灨倹贴䡜孰ᄰ䠎顠偨谽負ᠡᇻ䌈ݭ䡁⥑ڱቾ鶀㑠榽铄ሄ◳耭窤䍠ᘠ槽詡㩑爛狠㣂ᓶ忰ᖚ玤ڤ☓苠⭂㾷忰ᆐ䚮趒ڻ仠弴䙇䛇䐈ဈ㟗懹ҽቦ鳓㙄䃈ᒭ䡀㡈怼晤杹戙湠満巇㽀㯨暐邀⤠樽詢詰鈛狠勢⡶怕☧溁鷒ဒᖵ镆䙞䛅䏜鎤䠴☛苠擢⺷忰╰䞎趖睱Ⴄ䔮䙠䛆萼詤ᖐ稓琈檢邀⢠槽詢穱爛狠僢ᓶ忰ᴚ橤⍂ݲᖹ钠㢁Ⱋ茨ጨ㙷姹ڡ窠䖪㙈皣畄Ⴔ♫萬暂杣憙湢厤ሦ睠杤䌮䙐䛌萼詢ᖐ䇳狠Ⲕ䙖孰ᕐ䠎顠ꂨ谽負㖁ᇻ䌈ဍ䡁冱ԁቼ鶀ᖠ沽铄ݤ▻耬晤邀⛕▧亁鷒ညᖵ镆䙝䛅䏜鎤䡤☛苠櫢⺷忰☰䞎趖睱Ⳅ䔮䙣䛆萼詤婰稓琈檨杯懰⚰䟮鶒ᄂᖩ鍆邂㣠樽詤穰鈛狠烢⡶怕☩溁鷒ᄒᖵ镆䙦䛅䏜鎤䢴☛苠瓢⺷忰➐䞎趖睱䝄䌮䙨䛌萼詥ᖐ䇳狠廢㒷㙎㚆啎塡表㐙負㮪㙒䃈ᒨ㜧彠譤奎馀Ⰰ朽瓄ᄆ睡㇈暐杮懰ᯐ䥮鶒߂ᖍ鍆䙑孰☺橤㩐ꉙݥቺ鷓㙐皢甮崂㞊ᖽ钠価⍛茨ឈ㛧姻仨竢㖷㙕㚃啎塢硨倹贴䡫孰␐䠎顡遨谽負䎁ᇻ䌈ᑍ䡂冱ލቾ鶀㯠榽铄ᐴ◳耭窤劀㛠槽詤㩑爛狠棢ᓶ忰⚺玤ቤ☓苠曢㾷忰▰䚮趒Ⴛ仠紴䙟䛇䐈ᕨ㟗懹ڽቦ鳓㙑䃈ᠭ䡁顨怼暜杹戙湧満巇㽀鰈暲邀㩠樽詥ᖐ鈛狠盢⡶怕☫亁鷒ᅊᖵ镆䙭䛅䏜鎤䦄☛苠転⺷忰Ⳑ䞎趖睱筤䔮䙵䛆萼試穰稓琈櫌邀㧠槽詤驱爛狠瓢ᓶ忰⢚橦紂ᄒᖹ钠䲁Ⱋ茨ᙈ㙷姹ޅ窠嫊㙒皣畄ጴ♫萬暪杣憙湨厤ᑖ睡㝄䌮䙤䛌萼詤橰䇳狠朴䙨孰♰䠎顢䁈谽負䦁ᇻ䌈ᕭ䡂憱ݩቼ鶀㝠沽铄ዤ▻耬暜邀㥵▫◁鷒ᅂᖵ镆䙬䛅䏜鎤䥔☛苠裢⺷忰⬐䞎趖睱荤䔮䙷䛆萼試驰稓琈櫐杯懰㑐䟮鶒ሂᖩ鍆邂䋠樽詧㩐鈛狠飢⡶怕☮溁鷒ሒᖵ镆䙺䛅䏜鎤䨔☛苠ꄢ⺷忰㖐䞎趖睱黠骠庀㻐⣈ងቢထڔ暂䙏㙂湦詢桠蝠ހᖸ䢅㙇■ᛀ䝂㞲ᗩ钠咡⢻茨᧨㚷懻倈晠乢⪱㘈ҥԁ䝑鐬暼鞀䗹胰奻ꄩ䙣仨䊀ԈႦ☱玤䙖睠勠茴䙍㙝胨ᄤᕶ睠ᘀ芠懓廰㔜鎤Ҵ♳苠Ꮒ㮷忰ڐ䜮鶖硬沇慲┊㝠■ᛀ䛂㡋仨㪀ᄀ㵹芨᧮崂ڒᗩ钠⡁⢻茨ᄨ㚷懻佧䘯ᔮ搕☰橠Ꮐ㙡⚑窤⤠ݰᏜ钄ҷ䆑ԍዴ鶀ᦀ殽铄ޔ◛萭竣䯷鉆藺檨塠ᄠ■橢邂ᯐᏈᅎ嵲ړ琈晸杺懰ᒐ䣮鶒ڢᖝ镆邡鐢嵒曍䡤䝁雡ᑢ䙁㙞䊈潄Ҳቫ氭負ᄡ㕻湠亂巗㽀ᛄ㬮駊㙇䃈栍䡠馱Ԑ暆邀ᣐ⭚橡䡁憱Ԙ晶䙌怘湢铍䡀顨逼晼杵戙湣満鷗䆒╦淩略孱⭈ᇨ㠧彠孤䴮馀⍀棽铄ߒҩထ赂䚇怕▰ⵄ䛦睰狠㺀㒳廰ᒜ鎤ᄔ♳苠䳂㮷忰ᙐ䜮鶖硭㡗ꏂꀊ㝠■䩁䵒ڑԕ袤⤠ݰᓜ哎塠硨ꁼ晴杳戙湢溁䷗䆑Ⴉ窤⬪㝊▣橢嶗⚠怭窠㪁ⴛ湥◂緗㽀睤㔮駊䜪關慯䳢㡑ԑዼ鶀ᰀ欽铄߄◳萬晸䙊㙆茼䩁嶖睢㇈橶邂⋐ᙈᏎ嵲ݻ琈智杺懰ᓐ䣮鶒ڪᖝ镆邡狊踐㗭䡤㽂㛀㪀⥱㙅湣㑤䪂ڑԑ襆馀ᦀ淽詡婱䇻狠㳂⡷怕䃈栭䡡憱Ԕ曀邀⠐⩚橢塡禱ڜ智䙔怘湥㒭䡁恨逼暎杵戙湥躀鷗䆒ᯆ鍻㩁孱⋈ለ㠧彠彤䴮馀⏀棽铄ဂڙԑ赂䚄怕▬玤䛦睰因䂀㶳廰ᓜ鎤߄♳苠㻂㮷忰ᒐ䜮鶖硭ꃏⵂᎪ㝍湢橡嵲ڑԙ袤㩠ᣐᔜ哎塠硨ꁼ晴杳戙湢溁䷗䆑Ⴁ窤⺪㝉湣ᖂ鶗⚠萭窠㦁ⴛ湤躂緗㽀獤㔮駊䜡ꗬ孠紂㛹ԕዼ鶀⍀欽铄ߔ◳萬智䙊㙇䌜䩂涖睢❈橶邂⎰ᒈᎮ嵲ڣ琈晼杺懰ᔐ䣮鶒ڲᖝ镆邡ꃽ擅䜭䡢齠仠㴢䙋㙆芨汤ނګ氭負⥁㕻湢躂巗㽀卤㬮駊㙡胨枭䡡䦑Ұ晼邀ᆐᙚ橡档䆑ڐ晼䙓怘湤铍䡁䡈逼暈杵戙湥◀鷗䆒▛湕⇸孱ᙈᄨ㠧彠佤䴮馀ក棽铄ނڙԕ赂䙰怕▦玤䙶睰㫀䊀㪳廰ᔜ鎤ڔ♳苠⢂㮷忰ᄰ䜮鶖硭䑷蠜ꀊ㝍■詡嵲ҹԉ袤ᖠᛐᑜ哎塠䁈ꁼ晦杳戙湠躁䷗䆑ڭ窤⥪㝆□䩂涗⚠砭窠⬁ⴛ湣◂緗㽀坤㔮駊䜺弛韯洂㛡ԍዼ鶀ᦀ欽铄ޔ◳萬晶䙃㙅䌜䩀涖睠萈橨邂ᛐᄨᆎ嵲ԋ琈晴杺懰Ꮠ䣮鶒ڒᖝ镆邡蝉ꈉ㘍䡡彠⭀⚂䙄㙅芨槄Ԓڛ氭負ᗁ㕻湡◂巗㽀㝄㬮駊㙗胨栍䡠馱Ҽ晴邀ᖐᒚ橠䡀冱Ԙ晴䙌怘湣㒭䡀顨逼晼杵戙湣満鷗䆒ᯚ䘳ꐞ孱ᒈᇨ㠧彠孤䴮馀⍀棽铄ߒԁԍ赂䙛怕▤鎤䙶睰㫀㪀㒳廰Ꮬ鎤ڔ♳苠⢂㮷忰ᄰ䜮鶖确䄮㐼ڪ㝅湠詠浲ҹԕ袤◀ተᓜ哎塠䁈ꁼ晦杳戙湠躁䷗䆑ک窤Ꭺ㝃湡䩁趗⚠怭窠␁ⴛ湡躂緗㽀䍄㔮駊䜦坌穠䳢㚱ҩዼ鶀ᄀ欽铄Ԅ◳萬晤䙃㙆茼䩁⏖睠砈橨邂ᖐᄨဎ嵲ԋ琈晰杺懰ተ䣮鶒ڂᖝ镆邡鹌供蚭䡠轠⭀⚂䙂㙂䊈棄Ԃһ氭負ᗁ㕻湡◂巗㽀㝄㬮駊㙋胨桍䡠禱Ԁ晲邀ᔐᖚ橠硠妱Ԉ普䙈怘湡铍䡀硨逼晴杵戙湢満鷗䆒⍊㧥祤孱ᖈረ㠧彠捤䴮馀╀棽铄ဒұұ赂䙓怕▣ⵄ䙶睰㫀㚀⡳廰ቼ鎤ڔ♳苠⢂㮷忰ᄰ䜮鶖确馯᧪ᡊ㝈湠詠浲ҹԝ袤ᰀተᕜ哎塠䁈ꁼ晦杳戙湠躁䷗䆑ԍ窤Ꭺ㝃湡䩁䵷⚠倭窠␁ⴛ湡躂緗㽀䍄㔮駊䜭䪹絀鴂㚑ҩዼ鶀ᄀ欽铄Ԅ◳萬晤䙃㙇茼䩀趖睠怈橨邂ᒐᄨဎ嵲ԋ琈晬杺懰ᆐ䣮鶒Ԓᖝ镆邡辱擐喍䡠齠⭀⚂䙂㙂䊈柄Ԃһ氭負ᗁ㕻湡◂巗㽀㝄㬮駊㙆胨枍䡠榱Ҹ暒邀ᔐᘚ橠硡榱Ԁ晬䙇怘湡铍䡀桨逼晰杵戙湢◀鷗䆒╖㿏柚孱ᘈᄈ㠧彠䭄䴮馀ᘠ棽铄ݲұұ赂䙋怕▤ⵄ䙶睰㫀⬀☓廰ᆜ鎤ڔ♳苠⢂㮷忰ᄰ䜮鶖确䥾㽀ꈊ㝈■詠浲ҹԅ袤ᰀተጼ哎塠䁈ꁼ晦杳戙湠躁䷗䆑څ窤Ꭺ㝃湡䩁⏗⚠䠍窠␁ⴛ湡躂緗㽀䍄㔮駊䜣ꡙ斯崂㛉ҩዼ鶀ᄀ欽铄Ԅ◳萬晤䙃㙄茼䩀趖睠倈橨邂ᒐᄨဎ嵲ԋ琈晬杺懰ᆐ䣮鶒Ԓᖝ镆邡ꁫ蚍闭䡡你拠ᴀᗱ㙁□㑤䜲ұҭ襆馀ዠ淽詠橱䇻狠☢⡷怕䃈枍䡠榱Ҹ暚邀ᔐᣚ橠硡覱Ԁ晬䙇怘湡铍䡀桨逼晰杵戙湢◀鷗䆒⎾殝叝孱ᣈᄈ㠧彠䭄䴮馀ᘠ棽铄ݲұұ赂䙏怕▤玤䙶睰㫀⬀☓廰ᆜ鎤ڔ♳苠⢂㮷忰ᄰ䜮鶖确浺磌邂┰߈ݮ㡀㽀䰄橬䙄㙄芼铄Ԕ⚓苠⋂㦷忰ߐ䞎鶖睠栈橤邂ᔐᄨႮ嵲ڃ琈普杺懰ሐ䣮鶒Ԛᖝ镆邡驉侈䙭䡡Ⴀ⚤捎䙂䛉萼詠䩐稛狠ᗀᒠᘹ芨ߎ崂ݫ仨♴䡆㙂湡铎㡀击仠⭂䂷㙃㚅啎塠塨䐝贴查煎喠玤䝒ҹұ袠ዠዸ滤橠䡀䇋琬晨松懰Ⴐ䢮鶒Ԃᖩ镆邀⢵☢厤䛆睠㻀洴䙇㙏胨ބዦ睠䛀⬀┓廰ሜ鎤ݤ♳苠㛂㮷忰ተ䜮鶖硭襫聀Ꭺ㝊湢亃跒ڊᗍ镆䙉䛅䐜詡㡀㝀㠍袠㢳孰ᣚ檠崂㙩Ҹ晰駑㙃䌚橠穱稙ҵዪ鷓㙂皡镎崄㘦锧硨邂⚰߈ݮ㡀㽀䰄橬䙄㙄芼铄Ԕ⚓苠⋂㦷忰ߐ䞎鶖睠搈橤邂ᔐᄨႮ嵲ڃ琈普杺懰ሐ䣮鶒Ԛᖝ镆邡瀭庆䛭䡠齠⚤捎䙂䛉萼詠䩐稛狠ᗀᒠᘹ芨ߎ崂ݣ仨♴䡆㙂湡铎㡀击仠⭂䂷㙃㚅啎塠塨䐝贴栴馴遡玤䝂ݩҬ晨鞀ႰႼ䪂㡀㝀㐅赆䙄䛏䐈ݨ㝷懹ұቴ鷓宕☢厤䛆睠㻀焴䙇㙐胨ބጦ睠䛀⬀┓廰ሜ鎤ݤ♳苠㛂㮷忰ተ䜮鶖硭钶矆┊㝋▢亃跒ڊᗍ镆䙉䛅䐜詡㡀㝀㠍袠㞳孰ᠺ檠崂㙩Ҹ晰駑㙃䌚橠穱稙ҵዪ鷓㙂皡镎崄⺴炎䌰邂☰߈ݮ㡀㽀䰄橬䙄㙄芼铄Ԕ⚓苠⋂㦷忰ߐ䞎鶖睠瀈橤邂ᔐᄨႮ嵲ڃ琈普杺懰ሐ䣮鶒Ԛᖝ镆邡楌预閍䡡㝀⚤捎䙂䛉萼詠䩐稛狠ᗀᒠᘹ芨ߎ崂ڻ仨♴䡆㙂湡铎㡀击仠⭂䂷㙃㚅啎塠塨䐝贴栁轟设玤䜲ݡҬ晨鞀ႰႼ䪂በ㝀㐅赆䙄䛏䐈ݨ㝷懹ұቴ鷓宕☢厤䛆睠㻀甴䙇㙕䃈ބᎦ睠䛀⬀┓廰ሜ鎤ݤ♳苠㛂㮷忰ተ䜮鶖确喓秠ꄊ㝊湢亃跒ڊᗍ镆䙉䛅䐜詡㡀㝀㠍袠㚳孰ᣚ檠崂㙩Ҹ晰駑㙃䌚橠穱稙ҵዪ鷓㙂皡镎崄㗄脚䬸邂▰߈ݮ㡀㽀䰄橬䙄㙄芼铄Ԕ⚓苠⋂㦷忰ߐ䞎鶖睠氈橤邂ᔐᄨႮ嵲ڃ琈普杺懰ሐ䣮鶒Ԛᖝ镆邡砱鋎闭䡡⚠⚤捎䙂䛉萼詠䩐稛狠ᗀᒠᘹ芨ߎ崂ݳ仨♴䡆㙂湡铎㡀击仠⭂䂷㙃㚅啎塠塨䐝贴柹軅西厤䝢ڹҬ晨鞀ႰႼ䪁顠㝀㐅赆䙄䛏䐈ݨ㝷懹ұቴ鷓宕☢厤䛆睠㻀脴䙇㙖䃈ބᏆ睠䛀⬀┓廰ሜ鎤ݤ♳苠㛂㮷忰ተ䜮鶖硭㡳濈ꐊ㝋▢亃跒ڊᗍ镆䙉䛅䐜詡㡀㝀㠍袠㖳孰ᠺ檠崂㙩Ҹ晰駑㙃䌚橠穱稙ҵዪ鷓㙂皡镎崄⫯啂杞邂┰߈ݮ㡀㽀䰄橬䙄㙄芼铄Ԕ⚓苠⋂㦷忰ߐ䞎鶖睠栈橤邂ᔐᄨႮ嵲ڃ琈普杺懰ሐ䣮鶒Ԛᖝ镆邡黀儀蚍䡡Ⴀ⚤捎䙂䛉萼詠䩐稛狠ᗀᒠᘹ芨ߎ崂ݫ仨♴䡆㙂湡铎㡀击仠⭂䂷㙃㚅啎塠塨䐝贴柶枩馠厤䝒ݱҬ晨鞀ႰႼ䪂䡀㝀㐅赆䙄䛏䐈ݨ㝷懹ұቴ鷓宕☢厤䛆睠㻀鄴䙇㙛胨ބᓆ睠䛀⬀┓廰ሜ鎤ݤ♳苠㛂㮷忰ተ䜮鶖硬䦣扂ᅊ㝊湢亃跒ڊᗍ镆䙉䛅䐜詡㡀㝀㠍袠㢳孰ᣚ檠崂㙩Ҹ晰駑㙃䌚橠穱稙ҵዪ鷓㙂皡镎崄㒧惦驤邂⚰߈ݮ㡀㽀䰄橬䙄㙄芼铄Ԕ⚓苠⋂㦷忰ߐ䞎鶖睠搈橤邂ᔐᄨႮ嵲ڃ琈普杺懰ሐ䣮鶒Ԛᖝ镆邡腜霉䚭䡡坠⚤捎䙂䛉萼詠䩐稛狠ᗀᒠᘹ芨ߎ崂ݣ仨♴䡆㙂湡铎㡀击仠⭂䂷㙃㚅啎塠塨䐝贴栓獘塠鎤䝂ݩҬ晨鞀ႰႼ䪂㡀㝀㐅赆䙄䛏䐈ݨ㝷懹ұቴ鷓宕☢厤䛆睡䭄䌮䙩䛌萼詥㩐䇳狠焴䙱孰⻐䠮顣塨尽負岡ល䌚檡顠妱Ҽ曒邀Ꮠ⻚橡በ坠䐍袠┓孰ተ䦎顠桨簽負◡ᔻ茺溙厮㷰㟨檐䙉䛏䐈ᄈ㝷懹ԅቴ鷓㙄湠橠涗⚠氭窠㮪㝁胨朄ڢڃ琤晬駊㙂皦畄ڔ♋萬晪杧戙胰恒疝蚋仨䢀ᒠዸ湠詡㵒㙱Ұ晲韓忰ߐ䨎顠䁈琽負ᓁល茺橢䳢㙓仨㒀កᖹ芨Ⴎ崂Ԛᗩ钠␁⢻茨ဈ㚷懻佧踟怡ᒵ☤橠䩑騙ҩዦ鷓㙁㚂畎塠㝀⭀㤦鞀ᒹ胨ᑍ䡠䦑▸晪䙇怘湡响䡀塨逼晬杵戙湡満鷗䆒╚⥽䩇孱ᠨڤڇ⚠☠⚂䡖㙁■钎嶒Ԃᗹ钠ᗁ❛茨ݨ㛧懻仠䜔䡉孱ቺ橥婰騙ލዲ鷓㙕皠键塢憱ခ窠傡⏛湪溃㶷㽁佤⎌馀㥵▭鎤န☛苠䓂⺷忰ᕐ䞎趖睰Ⳅ䔮䙃䛆萼詠婰稓琈檀䙆孰ለ╍䡀㽀㯨晰䙆㙃茼䩀鶖睠䝄孎䙈䛊萼詡ᖐ戛琉ᕟ泵裣胨榄ݴ⚓苠㣂㦷忰ጰ䞎鶒ډҨ晨駑㙋䌚橣⍂㙛仨⡀ᰀᖹ芨ߎ崂Ԋᗩ钠ᠡ⢻茨ވ㚷懻佦偁䟦投☥橠塠䧉Ҭ晲鞂ᒐႨᄎ㵷㽀Ⳅ捎䙃䛉萼詠婰稛琈暂邂ᄕ☡詠硠槻櫠㜦邀ᔠ泽詠驱创狠㓂┗怕㚢㛓瓇榱◤晤松懰ݰ䢮鶒Ҳᖩ镆䙂㙁湢哎㡀姻仠䬔䡄孱ᆈބڷ䇉ҵ贴䙆䛍䐈߈㞗懹ҹቮ鷓宀ꖿ꜐緶睰滠傠ᒠዸ湠橠浲㛩Ҩ晦韓忰Ⴐ䨎顠䡈琽負ᗁល茺玤䛖睰䛁⣔屢㑐Ҩ♤Ⴒڊᗹ钠⛡❛茨ᄈ㛧懹Ԅ晤䙄怘湥响䡁熱▬晲鞂☰Ⴈᄎ㵲ҹұ襆䙃䛏䐈ڨ㝷懹ҭቴ鷓孰ᣚ檠䩑騙ҩዦ鷓㙁㚂畎塠㝀⭀㤦鞀♙胺檠桠㧉◤晤䙃弙湠詠海㽀㝄捎䙄䛉萼詠橰稛琈暄邂ᘵ⻀柤ҢሹҬ暸杮懰⤐䥮鶒ᅂᖍ鍆䙨孰㒚橢ᖐꉙځቺ鷓㙈㚂甮崂㛁ҵ窠◀ᒐሜ钄ڷ䆑ԁዴ鶀ᖠ殽铄ݤ◛萭竣鈹蜱䓚檠崂㙫伸ᖰ䙀㙠湢亃跒ڊᗍ镆䙉䛅䐜詡㡀㝀㠍袠㞳孰ߚ檠崃噰䛀ڀ憀㱐⥐䠎顢遨谽負厡ᇻ䌚橡鴂ሲᖽ钠撡⍛茨╨㛧姻仠㔔䙅㙃▢㒮㡀姻仠⢂䂷㙂皥啎塠偨䐝贴桗詓搾鎤䚲ҳ仨ᙔ屢⠐Ҩ┤Ԓԃ櫠ᴀ✑㝇湡ᖁ㵗䇙ҭዼ鶀ᇠ欽铄Ԕ◳萭窠┊㝃胭暠桠Ⴁ嫠裢㒷㙘皦啎塣⠈㐙贴䙺孰ᖐ䠮顡ቨ尽負㚁ល䌚橠贂ұҴ晰駑㙄䌚橠䩑稙ҩዪ鷓㙁㚁镎崄㗗浶赘邂ᏐႨ᧭䳣噰曠ڀᄀᔐ߈ᄎ嵲ڻ琈普松懰ሐ䢮鶒Ԛᖩ镆邀ᐵ⻀晡掁鹰摜ᑼ䥀䛈䄈柄晠㡀⚠晠桕އ杰◐▧表䝄㙠碡⠠桤⡍䩑ቨ䚁䬔醡战皿厤䙤▢ᗁተ㚒䛁䍚誠㡀⚠⛌岠ڍ⋁■◀洄◠枨桨柸灀Ҫڀᗐ蹪ᖀ晨醁ᆁ㙀湠乔□ұᒀጩ⋀⋐䨤ڄ㘿ꡜ㓖ⳀⳐႰ䜄ڄ◣翼橠釖䛀芨Ҩ㙗䦚ᚹ究䡆䛁䍐嫲艠ᓑ䙈ڄҤ䙐Ⴈ߂ᚷ䝈䍄ڂႣ䙁㙈Ң⇢㙑ұ㡚ԀႰႺ誠䡀䂸婠晠䝁㙁☠蠀ᖐႨ⫰ᯖ䙀䛊䃊ڀዠ㝀㫀ᗀԀᔠ涽満浶硨栈癤Ԃԃ洨ބԁ罨㫀㓂ᅔ㛃湠ᇠޒԈ㝀晪䝀ᯁᑈԁ皀聨ݤᏂᄀᒺᖕ亓⛜ҡ䙈ဂ䡀䣆木Ң᧶桨➑ᓉ㰀ԕ⠀晤䙄仈⫬⋀䙀㙀湠ቬ袀⚠㝼晢䙄寱ᄨک㵒㙐鋤ጠកᆐݦ誀塠ݢ廨Һҫ㙀瞣䚁婺䫶Ҡ癤ԂҰႳ躀በ㽀ݠ♶畻⋀湠䪀በ䛃曤⬀Ұ⻁㙈ڨ㝄◠枩䑈暀ҰႤ⪄ڢҸ枠晦柠ᄇ杰ᖀ衠㻀躐ᖖ䙃䛁菨暈㙷䡌颯Ҡ邁Ꮑ䘐売扠ᄠ■橤条㙀荨暎㚄Ⴀ㫠ᖐ⪡ᦀ讄鹠በ⚠➈鉤ԀᏅ溠䩀硠堐◀晢䙆䅁ᒈ߄ړ噰因⬀ᄖႤᒀ䞤Ңҹұ窀獫㙀ᖜ檠媰蹨器㳂㙠Ԁ杺溂ᖐ曢潥鴴䙀䯍皢ቪ䡐䙒ҩҤ晢旡㙀湨㾉䑀ހᖀ䡁㙂㚀锤䙇坰⚤⎂此䙐Ⴐ嫲鉠ᄠ□䁚⏀Ⴆ暰奲扠ᄠ■橠歭ᔐҤ⨭ᖐ㧢⋒几ڪ㩁Ҩ暂⇢ԃ勤ᴀႰ䵑ҡ■婢Ҡ柸晨醂Ⴐ߈ڄԔ潰☌桦䙀㙀湠槄㙒Ҡ枘橠Ⳁᣅ湠䪀በ䛃曤⡀Ұ⻐ߐ䡈㛁Ꮢ䩴⡀Ԁቨ㸈ބԑᏂ⋒叠ԈႠ☠企皢Ҫᖍ銤ᄡᇺ㚧㢸Ҧ睨䍆羍晠㩁Ҩ䜈㾉䑀ހᖀ䡂䛀湠哤䙗⠨婨普乢ᖆ߂蚨በ㡋ꑭቢ鞀ԕ☠躀嶢㙂⋒䷠ڪ㩁Ҩ月㛆瞠■橤䙀䜎䬰ҭ䡠ዸ㝀晤䙀䅁ᒈҤԃ噰䙰ቶ柴灀ҨԈ㸢һ萤鉤ҫ㙂湠躀嶡ᎩҴ䜤䝃ᯃ椠湨㙒Ңᗽ袤ڴ◊湠橠␇☢鰀橤杣恱Ұ嫲扠ᓑ䙈ڄᓁᖵ⠀晤䙒Ң⇲䷠ڪ㝀㠁▤Ҳҡ繨㺀Ԁݻݢᆀ㛴Ⰴ畠ݣ㫓虠⠀晨㸢ҳ萤鉤ҫ㙁湡ቫ顠㽀㚁蚤កᄀ朽ᖀ洒㙐枡ᓉ㴀ҴݠᗀڄႠႤ⎌䡀䛁荰姲扠ᓑᖝᓙ㴀Ҵݠᖠ蚇ꂬ碯Ҡ乢ұڐ䙤ҧ䝐ሄ☠䙇㩁ባԁ婹䫞Ҡ晠䙁彻ݠᖀ霒□Ҽ晬屢ᖐҨ߆蚀蝠㻀㒬ቬ㙃■⍠䛀聭墻Ҡ䙅䅁Ұ嫲鉠Ⴀ♸ᖀ䙃◙◠蟠蜔Ⰴ畠ڀᄀᄙ⻀晤ڰ罨ᘀ㒀ᰖႤ■䩀觀㚡Ҹ普屢ᯐᆈԆ蚀暺⍒叠ԀᏛݠ◔濌ҡҬ鉤Ҭݥ湠ᖀ塠䦐枔㲀Ұ影߃䙡嚄ҲҩҤ晢䙁㙀湠䩄ⴄ腠ڐበ㝀□⛀橤ⵄ腠ڐበ㝀□✁皂ښᖡተ㚒㙂䃐䣈㛁Ꮣ佤䛂▰侕㚠㙀来㛂ݠ㲐በ㝄ᓀ亀ተ㺠䩭ᓙ㴀Ҵݠᖠ䡀Ⴀ㟬橢杰䛄ᖔ澀橤⺤腠ݢԖႠ㚩㤘Ң晰ݤݣ䫖虠㚀⍠䙂ұҠ䛚䙂◙◠蟡㛲ұҰ䜠䝀䜒䯰Ҥҳ噰Ⴆ羍晠㙀⻀晤ҢҨ枠晤䙄●湠桮䡐㺠䙬晶乢ᖐ楰峲鉠Ⴀ匀ᖈ䡊䜚䯰ҥԀᓑ▤鉤ځ芫噠◗✌ҡ䙈ڄԀݰҨԉ堓噰ҩҤ暡纫噠ᛀ䙀䡂⎒叠ԁҡ癨Ңᯂڂ㹴ᗀԈႤ☠ᇠސ虰卧䝭晠㩁Ҩ晨硠杠ᄅ詺ᒌᔅ湠ቭߐႠځ碠⬇⋀■ᗀ㣀㙁▵ᓡ㴀Ҵݠᗀ䬐䨹Ҵ晢乢ድ■激穰ژ婬㳃盶虠㚴㤘Ң晰ݨڀ◀ᖐҲ视蚀Ⴀ䛀㬔䝁䜞䯰Ҥ㙀㡀⚠⋀䙁㙀⠀晨隤Ⴀހᖐ䡀⋀楠柁塠ݣ䙴ڀҰ嫰ᒑ栀㛴⻄腠ڐበ㛄盏㤘Ң■⚠⋀䙀㩁Ҩᄉ皤Ⴀځ暠⛫⋁ᑈҥԀ杰ԔҶ杠㛀ᑈᄄҡᒁ▹የ杨◉☣鏈㳖睰ᗁ誤ځᖈ㫈ҭ塠⥑■晠杰䛄ᖔ橡㳤漹◔䜤䝎㙆湣衮ተቨ䝄㙠碁ᇠ歰䝂គ◊ᗁተ㚒㛁㚬㤘ҢځԀ䜤䡁䛄ᖔ橠㳲㙈栠橮屢Ԁ邅繠በ硨䟨晤䙃㙂胺橠㳦罰Ⲙᖀ䙇㙁皠咦蚀䡈䝄㙠碁ᐠ歰䝂គ▲ᗁተ㚒㛀湡詠坧Ⴀᘀᗀᠡᖵ胺洠䚄㒤腠ݣݠ晠珠晤ߒڸ柝ᓹ㴀Ҵ曠ᖢበ顨䟩ᔉ㴀Ҵ曠⎀䙂ڱڀ鑤ځ誫噠ᖁ槀㙂⎢叠Ԁᛛݠ◗濌ҡԀ鉤ځ被噠ᖁ觀㙀Ⳁ晠杤◘◠䩀ᖐ怐▰晬䙁㝀㚁ⵉ地ڙԄ智汭ᔐጨᇤݶ罰ݠ㢀Ұ幨㥈Ҩ㹀㢸㝀晲䙀▭ᒂᅄҤ▻绨ݢᓴ䜎䬰ҭ䡐㙓ꎦ侇晠㩁Ҩ暈㙒ң盨ဂᗀ㙁⠀条晰聬碯Ҡ䙀㙀苭暠በ㚙ᖀ晤䙉䅁ቨҤݳ噰因㢀ዶႦ▢䩀ᓠ㚀噼㲀ԈႠ◠詠በ栐■晠䙀㩁Ⴈᄭ䦠㙡Ԁ䜤䡅䛄ᖔ檀䡀㻃滨Ꮒ▰佰晨ႤԂԋ合橬䙄◘◡詠衠䛂ꌠᴀԀޕ胨晤ڂԓ倌桨䙀䜘䯰ҥԀዸ㝁ᓙ㴀Ҵݠᖀᗠ躁Ҡ癤ᗁᇸ皠佁皰㡁Ҡ䜌䡅䜀ݳ蛨በݠ銐ቶ䙀䛆䃊ڀዠ㝀Ⴄ㜔乢ұڑ蛨በ⚠♸ᖘ䙂㙀珠条晰聬碯Ҡ柴灀Ҫڀᖗ靠㭄⎌鷑䅁Ң詠桠冱ᖐ晠䙅◘◠ᆀ眔⻄腠ڀ⏖Ⴀ㚪㤘Ҥⵄ腠ڐበ㙂䃈晦蚀Ⴀ䋀ݢᅒ䅁Ⴈ߂⏂▸噼㳃件虠■ᖀ洒㙉繨ݣ囶虠㚬㤘Ң晰ݨᗀᖐ幱ҭ暠በႠᛄᑤ屢ተݨݢᨲҰ栨桦⪦ᦀ骅繠በ栐■㹆⤠ҰҪڀ桠禱繨☣囶虠⠀晨䃉屠ހᖀ䙊孨⪣ڡ婺謖Ҡ普屢Ԁ辅繠ᖚ䫶Ҡ癤Ԁድ☠⍠䙂ԙҠ䛠䙆◙◠蟠園ԙҰ晠㚌㙂㚠ډ隤Ⴀ䋀◀䁠ᒈ䋈䚡暐罠㝄⎌䡀䛁荰姲扠ᓑᖈᚾ柴灀Ҫڀዠ⠈ᘀဈ䡀廢㙈څԀ曀ᖭᒩ㨀ҰҨԎ䦠㙁Ҩ㲂ԀႰል暡በႠ䌘ᖘ䙇㙁⻀柤ڲҡ繨㚀ᯐ彰朣ځ婽䫶ҡᕾ䕶Ⴀ㚲㤘Ңڡ繨ݣ曶虠▢洠䙄㐤腠ڀ◖Ⴀ㚪㢸ҤⲤ畠ڬበ䜘䬰Ҩ䂉䑀ߘᖀ栄灀Ұ姲扠ᇰ□ᓱ㨀Ԁ醄鹠ᓠ㙂⍒䷠ځ碩陠⍠䙄㑄畠ݣ嫳虠⻀晨䆉䑀Ⴆ羇晠䅁Ұ彲扠ቭ颯Ҡ屢Ԁ閄鹠ᖛ䫞Ҡ鉤ځ躩陠◘澜ҡ繨ݣ櫳虠㚯㢸ң噰Ⴇ垇晠䜦䬰Ҧ蚀ቮ墯Ҡ栤灀ҭ暠ᖞᘞҡᔩ㨀һݠ◚澜Ң⏒䷠ԖႠ㚺㢸Ҥ㔤畠ڬበ䜮䬰Ҩ䎉䑀ߘᖀ桄灀Ұ懲扠ᇰ□ᕡ㨀Ԁ龄鹠ᓠ㙂╒䷠ځ颩陠⍠䙄㘄畠ݣ鋳虠⻀晨䖉䑀Ⴇ羇晠䅁Ұ噲牠ቯ碯Ҡ屢Ԁꚤ鹠ᖟ䫞Ҡ鉤ځ檪噠◟澜ҡ繨ݣᘔ虠㚿㢸ң噰Ⴆ䝩晠䜂䭰Ҧ蚀ቬ墳Ҡ柤烀ҭ暠ᖙ欆ҡᒙ㬀һݠ◒澬Ңᰒ俠ԖႠ㚨㣘ҤⰄ祠ڬበ䜎䭰Ҩ㾉䱀ߘᖀ栈烀Ұ姲牠ᇰ□ᓡ㬀Ԁ辅㹀ᓠ㙂⋒俠ځ璪噠⍠䙄㐄祠ݣ勴虠⻀晨䄉䱀Ⴆ澉晠䅁Ұ干牠ቭ碳Ҡ屢Ԁ鎅㹀ᖚ謆Ҡ鉤ځ說噠◗澬ҡ繨ݣ拴虠㚭㣘ң噰Ⴇ䝩晠䜢䭰Ҧ蚀ቮ㢓Ҡ栜烀ҭ暠ᖝ欆ҡᔙ㬀һݠ◙澬Ң⎲俠ԖႠ㚸㣘Ҥ㓤祠ڬበ䜪䭰Ҩ䌉䱀ߘᖀ案烀Ұ懲牠ᇰ□ᔹ㬀Ԁ鮅㹀ᓠ㙂╢俠ځ颪噠⍠䙄㕤祠ݣ苴虠⻀晨䗉䱀Ⴇ羉晠䅁Ұ揲牠ቯ㢓Ҡ屢Ԁ蚅幠ᖟ䫦Ҡ鉤ځꃪ噠◝澬ҡ繨ݣ☵虠㚿㣘ң噰Ⴇ龉晠䜺䭰Ҧ蚀ቬ梷Ҡ柤煀ҭ暠ᖘ䫮ҡᕹ㬀һݠ◓⛼Ңᰒ几ԖႠ㚣㣸Ҥ⫤絠ڬበ䜐䮰Ҩ㾉呠ߘᖀ柴煀Ұ埲艠ᇰ□ᒹ㰀Ԁ讅幠ᓠ㙂ᖡተ㚒㛂皥◁Ⴅ㝈⚤䛂▰佰暰屲鉠Ⴀ䛀㙠颂Ԁ桤⡄Ҧ罰ځ蚤ᒶႠ㚪㤘Ңڒᖡ窠ᄀႰᄺ玤Ҧ禹▴鉤Ԁᆐᄰ䙮䦠㙢ᖡተ㚒㛁㚅◁Ⴅ㝈ᛄ䛂▰佰晨ڤڑᔁҠ晢䙂䛄䄚玦蚀䡎墻Ҡ柠暠ڍ暠ޔ□ᖍᓑ㴀Ҵݠᗀበ䢨婡ᓑ㴀ҰҨݭ墀❐□ᓡ㴀Ԁ銅繠Ꮐ㙁▨晨㚰㝀⻀晤ҢҪᖅ諌ቤ㙁□ቫ顠㛃滤ᯖ䙋䛈䃉ҤԐ藸湨筞ᓾ㟀㚼ߍ墀垀ݠ⭃Ҧ孨⤈߈䁀䆑◐䚘䙆䜘ݺ橠詸ԓ佧虠㚯Ⳑᆐ彠洄㯷姂訧泭珻㐀虤ڤ㑀㟩ᡍ錸网頃姆觐㹁ҹᓰᗪ䞛憖㱼拈錹缼ᯀ䙆䜘Ⴚ溶锭毯㕚䅶岗ᆀ□溕چ硵舓埃訦洭班蛀በ塭ұ童嵌銸齑砓姃幸ݠ⭃㹄宁君䅖䑼嫌錸鑦Ԁᒡ君䅖䑼嫌錸鑧㙄㙃㚢ލ䩭谧淫⤗㷮鑠㐀虤ڤ⪠㯩ᦙ彑韂襅鰻晣幸ݠ⭃鹤宁嶎䑼劸茝懐ڮᒀ㙃㚼ݭ䩭谧淫⤗㷮鑠㐀虤ڤ㖀㟩ᦙ彑韂襅鰻晣幸ݠ⭃虤宁嶎䑼劸茝懐ڮᒀ㙃㚶ݭ䩭谧淫⤗㷮鑠㐀虤ڤ㴥訧毫⦷緎ҭ蛚ڂԒᴀ♴䝊ᄀ■亘㙄麂ݠ⭃㙅孨⤈߈㽀冱Ҡ晢㙟㙃㚠ߍ䡀塬晵竣陠◗注߄ڤ⪠㿨䙢杠㛀朰ᖀ詽ԃ仠ᑔ䡀㙀湡玤䚲蹠ݨ㚀ԍҠ䌎晠በ塭晩窠ᅊ㝆盘ԍ䡠罠䛀㲚Ҡ忽Ҡᖁ穾▫仨㚀␁ޕ⥀Ҥ䚲ځ婠ဆ恠ҰҰ䙭䡠Ⴀ䋀ښҠ忽Ҡᖀ㩐㦑▥ጠ浭ҥ楠䞤Ҵ仈ݠᏂᅑᄀ■亀㪠䡂ᖀ桢⪡ᣐڐ嘮㡐遨ݤቦ暀ᒠ驡ⵄҶ睰䋀ڀᅊ㝅熠Ҥ䜢ԙ婠ဆ恠Ұᆐ屠䳢ҫ仨䓃虡孱ᖈሄႢ蹠ሌ驠Ԁ╀麠厤䜢ښᖅ窺Ҡ㝅湣氀ҧ䀐Ҡ普条孱ለᅄڲ蹠ሌ驠Ԁ⋐ڐ䚍䡠⠸婠㲀Ԁޕ◠ᅈ眰Ⴀᘀ㬔䡇㙀⥀Ҥ䙂ԙ婠ဆ恠Ұᆐ恠洂ҫ仨ጠԀݶ晠㒧䙀ڙҹᓠᎪ㙅㚰Ңሲڡҹᔠᗪ䜠Ҥᕤڤ㓀ᦈ檊䙆䜢ݺ殀䙃幸ݠ⭃繡孱ᣈ߈䌀㦑䩈ڮᒀ㙃㚸ԍ䡡彠㽇乤邉Ⴀ㐀虤ڤ㖀ᦈ檐䙆䜮ݺ殀䙃幸ݠ⭃陡孱ᴈ߈䒀㦑䩈ڮᒀ㙃㚾ԍ䡡睠㽇繤邉Ⴀ㐀虤ڤ⪠❈檖䙆䜺ݺ殀䙃幸ݠ⬀ᴁ葡䃈杅㙠ᇸ㕠ጠᰈᄼݨ䧄ڢ湽晨检䙆䜠ښ檣硠塬癭窲በ䇁晨߈䇀⥑☘晬柬ᇵ⡀晦隐Ⴀ㽆虢邂㗐ᆐ因崂湰ߜᯀ䙆䜸Һ檤በ塭癭窲በ䇁晨߈䗀ᓑ☤晬栜ᇵ⡀晦隐Ⴀ㽆Ң邂㝐ᆐ廠崂湰ߜᯀ䙆䜄ښ檤塠塮噭窲በ䇁晨߈㽀⥑☰晬栴ᇵ⡀晦隐Ⴀ㽆噢邂㣐ᆐ懠崂湰ߜᯀ䙆䜐ښ檤衠塯㙍窲በ䇁晨߄ڢ湷陨鑧乡㙃□溕暖睰伄ᖀ嵣婰ᆐ孠崂晰ݤ璠ᰉሐ߈䱤ڤ㕀ᇨ檰䙆䜂Ⴚ殀䙃幸ݠ⭃繠孱⡈߈䘀䆑䩈ڮᒀ㙃㚴ҭ䡢睠㽇蹦邉Ⴀ㐀虤ڢԒ═⍴䡍㫁ҭ蛉በ坠㽆㹈邡衠ᖛ誀በ亂ݠݣ䉅孰柨Ҩ䐀冱ᖼ晠杤孰楨Ҩ㽀䦑ᖠ晠桜ᄕ◤◀ተ繺ݠ◠ᠡ㙐ᄰ䩉㟲㚰栘梆䙇䛜䃈ᓥ㙰ᇸ■普析孰⋊䚠ᓰ㙁ҽጰ邀⭔朠⎀䙂Ԛᘁ窠㹩ᆀ㐀晤ڴ♣仠咲ᒀ䇁Ҩဈ㝆睠缄ᯀ嵢Ұሐ䝍䡁侨⪠鑤ԀᔐҪ䚹ҳ幰ݠ䚀ԉሔڍ蚠ቡቨ䟨暞佣һ曠ᖂᖑᓑڸ硦ԗႠ▤◃⍂ဉ䩌ڮበ㙄▣ក䙃幰ݠ㛂☊㙆㚂ⵅ㙠ᇸ■晰杰孰ᒐ䡍䣐㙁艨ڀ◡⫵▣◃⍂湰ߜᖀ䙈䛐䃈ᆈ㡆瞨■鑤Ԁᖠ灺橡橲榱䩈ڮበ㙄㚌ⵄ߄✣伄ᖀ嵢Ұተ䵍䡀衩蠈硤ԗႠ▢橠Ꮠ䆁艨ڀ⡁ᖵ☠䩄Ꮠ㹁艨ڀ⡁◕☡ᖄ㣐㹁艨ڀ⡁⫵☢䩄䣐㹁艨ڀ⡁㙵☤䩄声㹁艨ڀ⡁㩵☥ᖄ棰㹁艨ڀ⡁㹵☤橤磰㹁艨ڀ⡁䉵☪詤裰㹁艨ڀԀ㑛ގڄߔ♣仨纠争ᆀ㐀晤ߔ☣仨肠侉ᆀ㐀晤ߔ◣仨芠傉ᆀ㐀晤ߒҡ䩍㚮በ㙀▩贠僠㽀ݠ裎ᔠᆐҨᯆ際ұҡᓠᎪ㙁■衣顠Ⴀ卤ᑔ䡋䛌䍈ᅈ㛇䡌ባ鹮韒㙅皢㔈㹏陻櫠㳂㺶徙⻀矠䡀ቭ晩窠ځ污䃐䛂ሲҡ䙊癦䝯㙀⡀驠塳㝀㽄霴䙫㫁ҭ蚠በ塩栈暄佢һ曠ᖀ該榱ڐ硤ԗႠ□溄⍂ݩ䩈ڮበ㙃㚆ⵄݲ湰ߜᖀ䙆䛈䃈ݥ㙠ᇸ■晬杨孰ڊ䚀ᓰ㙁Ҹ晴佢һ曠ᖁ顠辨■鑤Ԁ╀桺橥裰㙁艨ڀ㖁◕▫䭠䙃幰ݠ䓂㺪㙖⡀晦隀Ⴀݠ諎ᔐᏐҨᨦ蚉暉ҡᒀ⇪㙀㚬ڍ䩟Ҡ栜媠ځ蹢䃈Ҩ㹀妰暤晠柰ᐵ■◚چ硩ڀ撠ځ晣䃈Ҩ㽀冲╠Ԁ镺㙇㚀钄㚂Ңᴀᙔ䙀䜀ᆚ桢㩐Ⴈᘀ䋂꜊䛁稡▤င➣櫤书暀ݰᙚ檡㡀濈Ҡ晠柰ᄕ■厤䝒蹠ሌ驠Ԁᘠ暺檢䡁㞨Ҡ暂条孶晠㒧䙀Ⴀ䭄ᙔ䡒㙉⥀ҤႴ△伔Ҡ馚Ҡ▢亀崂㚉Ԅ聠Ԁ♀机氀ҧ䀐Ҡ暈䙁䛂䃈暈霰ژ勠⡀㒫㛂湡ݨበ⚠琈桲䙀䜈ݺ橠㳢▨Ⳁ晲䙉㳀Ҩԅ癠ᔙ蹠ڀ⛡ޕ◢䩀㩐⥑ᖄ晨柟孱Ⴃ䙁園ڱڍ窢ᖠᏆ晢蟄Ҥ㗀㿨湠⦽ᛀ湿諀ᖘҫ勨◨Ԁހ発檀的ҲݠᏂ斫ዠ□◇⍂㜙Ҡ晪邂ᐠ瑺殀ң幸ݠ☢囊㝎□了⍂湠ߜᯀ䙄䛔䃈樄ڔ⛣伄Ҡ嵣ҰႰ䩍䡡靠㭄朴你һ朠ᖀ橱榱☜晪杸孴晠⎀噢Ԃᗁ窤䙠ᐠ橺殀ң幸ݠ☢☊㝐湡亁⍂湠ߜᯀ䙄㙂炠Ҧ隐Ⴀ㝇陠邢һ朠ᖀ橿ң佨ڮᒀ㙂㚺ҭ䩠ᇸ⪠晨桀ԕ㛀⎀噢Ԃ─ߔ桠䇁晨ݨ䍀ᓒ■鑦Ԁዠ顠ⵈ䙃幸ݠ☤ԗᇠ■亀㶢⚰Ⳁ晢栠Ұڐ幠ᘑ罰獤ᑢ杠㛂湤躀㪰䡁ڍᕼڱ㛃朰ᖀ橴ᓙҵ窤◀Ұᄺ檡䤐ҡҰ晪邂ᘖ晠㒧䙀Ⴀ䝄ᑔ䙊䛀胫䙀በ灨ᦈ聠ڳ䍀Ҩငڔ△仨⢎Ⳁᣅ杰ᖀ橴ᓙҵ窠Ԁᐵ⥀Ҥڂԋ伔Ҡ馚ҠᑈҤᄖ睨Ⴄ◢㹠ቴݿᖠ硠䞀➠梊䙄㩁䍈䣄ڂ晳曤⬀ᖨᄖ◡詠棠㦁ᖠ晨乢塰毨ݥԆႨ櫠◰ጼ㛆□ᛀ䯂◱Ұ癤突ᘐႪڊተ轠㛠ᘘ䝎㙂⠀潤㜲ԁ䙉◢㙠ቴݰᖡ嚔Ⴀ䫀䜔杧懰ᣜ誢顠熲ᖥ钠㪳㝌湡橡崄◛苠䄦䡍㙅胰䝮顡⦹☈智邡⍛湡瓄䡲ԉҽ竢┗㙇䌈栤ږ硨䰜晸馂ᯐᔚ溁緒ԛ狨䢀⬪䛉䐈ގ墀你䛀㬔杧懰ᠼ誠鴄◛萬橬䙅宀梽铄䞂ԓ佤䄮䙇忱ᠨᏍ䩑㧹ҵ貢កᔐለႭ䩐爙ԝ貤㖪䛆萨ᄮ墀睠搉ዤ鶀ᖹ滢ᖂ鴄◛苠䤦䡇㙄䃐䝮顡秹◤普邡⍛湥铄䞢ݫ佤䬮䙈忰桨ᒤᅒߋ佤䄮䙐忱ᖚ溂䷒ڋ狨㢀⺪䛃萨ᄮ墀睠䯩ቲ鶀ᰙ滣ᖁ䳤☋苠䄦䡍㙆䃐䢎顠燹ᖤ晼䙚㙑胰䢎顠臹◍竢┗㙈䌈桤ޖ硨䰜晾馂┰ᖚ溁緒ڳ狨䊀㖪䛉䐈ᅎ塰罠蝥ꗔ䡘⋀ᑈݤڂ晲ݠ㴔屢ҰႨݥԄ䝀栈鉤ᖠተႪډበꇱ繨㚀ᖠቴݳᖁ贃噰因◠ᖨᄈ▣厦蚁Ⴀ㛀◰ጴ㙄胭暢桠䝀㛠ᘰ䙊孻ݦᖀ桠䞀✐晸邖Ⴎ□ᖀ棠㥁څ竌ዠ㙂□ᛀ䲂ޓ伸ᗈ䙄㙂⠀獤ݦ砐♀晨䙄㩁䅈ဍ䦠㞡Ұ晨乢幰ᆚ洠䥂ԁҰ癤骀⠵⻀泤ڂԁ䙉隠㮪䅁㑈ݤڂ晳雠⣔屢䑠晨ጨ㙗⥙ݩ袠㢁ᐺ㚐㑭䡠偪ᇬ桬䙅䜟蘲蠀䡀坠ⴌ䁆䙒䛀胨䢄Ԃԋ仨⡀ᖩᆀ㐀Ҥڔ➃仠岲ᒀ䇀Ҩވ㥆睠霄ᯀ嵠Ұᄰ䭍䡁辨⪠鑠Ԁᐠ湺橣裰㹁艠ڀᠡ⫵▧讀噣幠ݠ⢂㚪㙐⡀虦陠Ⴀ㭄㜔䙡㫁晭虠በ⚠琌橢ⳀᣐႰ噠㳢䙀抌晪䙁◕晢詠硠団婠㲀ᰀᆈ䅀ᅗ曰◛ꌬݣ虠寱ᏉҠ䩀㡀⚠ᘀጠᄀݰڈԄҲҩҤ暡ᦀ暤⤄䜀䡁ԑቮ邡爠噠ᛀң噠ݠ㻃㛀虠⡀Ҧ陠ҲҩҤ晢䙁㙀湠䩂Ԛᖑ転䕠ᒳ脨柈䘰⦪剱ڀ␅⋀眐䘿ꡟ鹹Ҿ胤┦晰ያ僡皲ڊᖁ㙚ዠᘆ朰䙤㚠蚀卤㣂Ⴐ剱ڑ䟡በ⠌鑣Ҡ你һ晠ᖀ㩐榲⋎ᆀԍҠ㓀Ҥނҩ繩䚀⡂欠䙠㡀㦰㣠嚨㳃曠虠㚆云▼Ҡ杘Ҷ㚃ҥ湢亀㝅杰㽔䁌䙆㙄橻榡塠硨蠈晶䙇㙄ᖊᖁ䣀㜀婨晴杨孰Ꮠ䫍䣀㙁繨ڀ⠠ᛔ曧⎀噢Ԋᖅ裪ⳁᯆ椰䝨㙑ᑁ▥⠚កހ鳀㹀Ꮠҡ艠ڀᄡᖵ㚸噸Ң蹠ဈҠ䙊㙀珠灤ބ㪌ቢᄀᄗᄊᒃ䞤ބ⪴ᒐڬጰ㙅㛀浀塢ڑҴ鉤䉠ᛐႭ暣በ睠佧䙀邖Ⴔ▢溆⍂ڒᗡ窀㑠ᛔݴ◐乬䙂䉑ڀ⠨Ⴚ㞃䟄ނ晱暠⪸⪫㙅⠀泤㜒ڑ䙈蚢◀ݰݳ蠁በ瞠⚀桼䙃䛁菨柄ݴ滈䉍ڀ⠠ހ桽◐▯蚛櫠Ꮒ㺴彰ڐ䝎詸▐㐄晢杸憙䋍暢桠硨砉ቨ䙈㙇▢橠衠滠皔㪀ᄡޕ◠亀ተ幺ݠ㒀⥆⋃湡詡㪠躡Ҹ普邀ᔠ暺檀餰Ң㩴Ҷ䙁㙁㠃䙁圠暸嚈㳂⥁ݨ䃀ᅈ㛔▨栈Ҷ䙉䛀橺晡婰灨ᗁ穠⤠ᣐጰ嵰䉀ݡ癠㲀⛀ᘠ邀幠Ⴃ䙀勠⋂┑㛁湡橡崂☘Ⳁ晴䙁䅁ᖈᄤҴ◣睦Ⴁꊧ廰ڐ䥎涂Ҫᖡ鋣သᇸ湠亃┇㧑繨亠⡁⠵㚁ᖁበ靠仠⬀⚰⠆曨Ԉ㙖睨ᛄڂ⎢䙁癨ငޔ庂ݠ⬀┊㙃皠厤㚲蹠Ⴔ䁂⪢ᣅ湣谀Ңһ罴䁈⤠ݰݱ蠀ސ聨ᛄዠ纂ݢ㙈Ԉ㥃癠ݠ㪀ᄖᄈ▢溰㹈ᖀ朼ᘨ䙍ዠ▢በ蜒ڈ㝀晬㙆ᣐᒄ߁暰聨ᛄዠ遠ᦀ鼀㹀ᖑ坠佤圴柠曀Ұ奰䉀ݡ扠㲀⠠ᘛݶᖁ䡀瀐⛰晴䙆䅁㩈ᄨ㩆罠佧䙀遰䅐Ꮠ䷭䩐❐■晴枌宀曭暠በ硨♸ᗨ䙊䝁㐀槤ބ㒤⎠ڬቸ㙅▢溈⍓噱蛠㪀⡁◕⻀汤ނڒᙁ竌የ㙅㚴ҭ䡀硨蠈䙞䙊㩁㝁▤ނ晲ڀ⪶䙍䣆暨Ⴂڠ虨勠㫅⦠暠剠䴠䮂ڑԐ鉤皀ᘢ榠䩀蝠囀ᖬ晸㙆ᣐᄡ▤ځԐ勠㪐ጰ㛀曰ڈበ瞠⛰橦䙊㩁㱈暩皤Ⴀᘄ⪸Ⴋ㙁㞁▨㙒◑Ҥ䙌⪡ᣐڈڨ㙒Ұ枬橬歭ݥ湠ᖀ䦠㙡Ҡ晬屢ҰᏐ扠⍂䙀抌晤条◕Ңꡀ陰橘⚠ᘀ䙀䛁胰嗮㡠㝀ᇬ橦䙁䯐ߐ䛉嶀蹡Ҥ晦醂ᒠ杲䟠በ塨㐄桮杠㛀曰ᖀ媰蹡ҭቦ鞁ᖁ㙈ڄҤ⪛琉ቦ潤䙐Ҩ䚁晰罠ⳅ齂䝄㙀◠曈በ⚠♐Ҡ栟昅䃈ڈ㙖矀ҡᓾꛊ孰ݰ䚍䤀Ң⎝ꖔ邀ᄀ机毠Ҥ㐻ꏉ窢ᄀᄀ杺檀䡀䡋須橨Ⳁᣅ湢♁癠䁁Ҥ晤剠Ԁ阿辭䡐⚠⚤ᑔ䝂㙄㚟鎤䛀蹠劌晠䙃孰晠湤ڴ仈ݠڀᴁ撘胨暥晠ቭ꒽㪂កᔠ暱栀በ你♐Ң栟昅䃈䛤ڴ▲㹴ڀកႶҠ溗鹔禱ᖔ㲀ᴁᄛ◠詠㡀冱ᖐ⋀䙀㛀湠輁皂Һ⎠ጠᓁ虠碦誠穰䇉ᖘ晪杢恰栠湤ڔ㘠᧤橰杢恱ұ䛈ᖐႨ◐ቶ䙀㙀胨䝨㙂▱Ҥ桠ᓀ㙁■ᛀ䙂㙒ᨽ賢┖㙁㚁甮䩘⪴㙡褴䙀䛂䃊ڀዠ㡋ꑭቮ鲀ᄀ柽璨㹘㩠䠅窠ځᖵ⠀晤䙤⪛獤㔬䙂䛃䏜源㹨䚃氈晠杬孴ݠᗀ䩗ꈺᖝ銠ጡᒻ䋐嚐亠槫令ᗀځ◕☠ᖁ㪰蹠劌晢䙇孰晨ڤږ罨⭀ᘂ☖䜿蛟ဎ㡀㡏ꔇ鹮韊䜀虡⻈㝇坠㟨桨䙆䣆晢詠㡀桨➑窢Ԁᒠꡟꡟ隖睰ⳇꡟꡟᇸ滠亀㳢㙒ᖍ衤暀ހ朲䛈ᖐႨ◐ቶ䙂䜾晟ꡀ鵲▪ᖀ桤ᓀ㙁■ᛀ䙂㙒ᨽ賢┖㙁㚁甮䩘⪴㙡褴䙀䛂䃊ڀዠ㡋ꑭቮ鲀ᄀ柽璨㹘㩠䠅窠ځᖵ⠀晤䙤⪛獤㔬䙂䛃䏜源㹨䚃氈晠杬孴ݠᗀ䩗ꈺᖝ銠ጡᒻ䋐嚐亠槫令ᗀځ◕◠ᖀ㩗覱▤䁀⤋ዠ■躐㹈ᖃ須桢ᓀ㙁■ᛀ䙂㙒ᨽ賢┖㙁㚁甮䩘⪴㙡褴䝂㙀㚁ⵄ㙂Ҫᨽ窤Ⴍҥ椨ڈ㛇塯ꔇ鹮鞀ᄀꡀ无鵶硬ᯀ♸杰慰Ⴚ桁塠⠨㝁በ㕋㙀皠钄㙠㡁ҥᑾ邡ᇤ杰ᆀ㛲Ҫᨱ袢Ⴃ䙐Ⴈҥ晠ቭ꒽㬔䙀䛀胫Ҡᖛꊚ倈晠杢孶Ҡ◗鹔禱ҡቦ邌Ҡ㚯陉䳢◁ҡቨ邁Ұڐ嗭䡠☈Ԍ㲀ጥ⋀ߐᖀ桠ᅀҡᓾꛊ孰杨Ҩ㙖睨ݠᘂ꜊㝁ᓀᅁ塠䚟湸ቪꚠҨ䌈晤ҡᒱ▨䜠䝁ᄀݰڈበݣ䉴ڀԈႠ◠蚨በݢ齴☠䙂㙁胨䚄ҢҸ栤橠栌燀Ҫڀᗰ蹩Ҥ癤ᗁᇸ皠轁的ⴄ腠ڀዶႠ■ᖀ䡀☢嚜㲀ዠᇵ㚄ⵄ㙀虰勠⋃Ң䷢㙈Ңᇰ虨勠ݢ⬪㩁Ҩ曤Ҥ◣伀ᖀ䡅䧂㙈ބڃ噰因◠ពႤᒀ䞨㾉䑀Ⴆ侇晠㩁Ұ嘤Ԕ▻耽裌በᣁ㙈Ԃᦐ䡁Ҡ晤䙁◆ᒀ䞠䩀㡀⚡ᓡ㴀Ҵݠᖀ㪰䡁ҥᓙ㴀Ҵݠ⚁癴⺤腠ڀԖႠ㚩㤘Ҥⴄ腠ڐበ㙁䃈暆蚀Ⴀݠዠ癯ᦀ銅繠በᇰ□ᓑ㴀Ԁ邅繠Ꮐ㙁ҩ窤ᄖႠ■ᖀ㩐⦱繨◠ځ粫噠ᛀ䙄囈ᖰᖖ䙁◓☠詠䳢▰⚠晦柠ᄇ杰ᖀ㝁绀ᖬ晢杬孴ݠᗀ桠⠈䟨癤Ԃރ杰ᖀ㡀䟰◐晨䙁䅁ባԁ婹䫞ҡᒩ㨀Ҵݠ●衠䁈㐙镂屢ҥ湠ᖀ䝅ႠႦ羍晠㩁ұ蠀䩚䫶Ҡ晤屢Ҧ߂躔濌Ңᖀ鉤ځ粫噠◀ᓠ㙀卧㽭晠㩁Ҩԉ霰⠌ቡ黢◡ᖈ㫐䣈㛁Ꮣ佤䛂▰侕䄐啎㩗醱□በ杰䛄ᖔ満䶆罰ᘀጠڋ㇂榠亖✌ҡ䙈ݪⳁ䛄㚂ቪ䡐ቨ睤㙠碁ހ橰䝂គ▲ᖀᘀ栈燀Ҫڀዠ䝀☠ጠځᖵ胺檠䬐蹢⍢叠ԈႠ◠亗濌ҡᖀᘀᓀ㙀⠀晤Ҵ躂ݠԀ蚀ޅ榠柄Ң晰䛈Һҫ䛀◠ᅄҡᓀ婠晠杬孴ݠᓁ晠聨ڀ弶浭ހ邅繠Ꮐ㙂⏒叠ԈႠ㦃䙨䌉屠Ⴅꕬበ┥湠源Ԅ滈ᘀڀተⴀ鮅繠ᖝ䫶Ҡ癤ځ昕☠⍠䙂Ҡ婠䙸䁏ᣇ椨ڈ㙷坰Ⳅ⎈柼灀Һ檀㙧ꂬ碯Ҡ乢ұݰ䙤ԗ䝐㐄☠䙁㩁ባԁ婹䫞Ҡ晤䙃彻ݠᖀ㛲▹Ҥ晠屢ᖐ߈Ҧ蚀蝠ݠᎬቬ㙀■贠䛀藰㹄ⲾጠᄀݰڈԄႠހᖐ䡈䛀砰䙄Ң晰曨☢ᄧ㇂杰ᖀ橰⠸婬晢䙂孰栨Ҩ㞆瞠■橬ⳁ㙀溡ᆀ䛲ҡ䙈嚠ᄀႰҰ䧍䣀㙁䙈㹢ᒀ㛁楠蟄Ҳ◀Ⳁ晨䡃㙃矣䚀乒Һᖅ窠ᒬҠ☡●鬀蹠軠⋂Ꭺ㙂㚘⛁癡睠Ⳅ⍴䙄䛸㢃䙃䡀䡏ꊥ裢㢴䜀䙼Ү㡀㾨ҭᎾ鞀ᆖ晠溇鵴◓盠ᴚҡ䛟芰䟎涇㧒ᯂᆈچ⋁湠躀洀罰㛀⡀ᓫ孰枨߈㸶睰㹴Ҷ⤠ተሑ栀በ䞠Ҡ橦柟䭐ߐ剩㵢Һ᧡㤤此䙐ߐ晀㵔☳睦Ⴁ陠廰Ⴋ䙀婳ꈩҰ聠ጡ䗸皡瓤ڂ蹠ᛄꗢ杬悙䋜源▬䙂㹴ቶጠᄀ□伀橤□ᖐ㹂⤠Ꮠݳ蛨ᖐႨ⭀⡀ዢዣᓀ䟀䛴□ᖌ晪䡄㙀胫Ҡᖔጠ婤㲀ᖡᏐڈ䚡塠你☠ᰖ䝂㙁湠䩀堒▨勠㛊ⳁ㙀㚃ⵅԀႨ䉉ڀጡ◇杰ᖀ㡀㛀㫄▸Ⴋ㙁㞁▨㙂◀噤㲀ጡᇸ溡䚈በ㡋ꑉቦ潤䙠晨䛄Ҳ▸噤㲀ጡ撘溡満ተ䝀ᘄᯆ暀ተߋҠᖛꊚ倈晦条孶Ҡ◗鹔禱ҭቤ邌Ҡ㚯陉䳢Һᖍ窸Ҡ䜟蘲玤㚂Һᖑ窢ᒠᒠ蕺檠蜰ژ勠⢊Ⳁᇠ□ᖀ夠Ң⎝ꖔ邁ተߐ䙭䡐㽀㭅ꗔ䡅⋀ᑂ詠顠䢘㝁በ䝃㙃湡⺤䚂◐⚠ᘀጠ䛀■ᦀቢ㙩ҵቦ汻䛁芰䙭址㙀ᖈ㳂ԁᒐႨ䚡晰罠㝄ᑬ䝃㙂㚀厨㙗坨㹬晦条孰木Ҩ㠆瞠■桨䙀㩁Ⴈ䛤Ң晰蛤Ҥ晣䙐ߐ噍䡠䁨婤晠䙅㙂⠀桢㙐የ婠㳂Ⴏᦀ暨䚤ڔ⪤ᒐݬⳁ㙀■䩀䡀䞀◐䡆ҭހ晨䚠婢ҹҹ⪨暡ҧ椨ڨ㙖睨⭀ڀកቴݤዠ㙄仈Ԍ晦柟孰ᆒ䠡圠◹Ҭ䑖䙀㩁ᯈԄԂҢᗱ窰በ㩁ᒄ䚠ޟ隐ᖙꖂ冡暠坠ᖀᏀ㙁▵ቢ鞂ᒍ溢橠桠妱ᖜᘀ䙅䛂䊑䛈ᖐႨᖰቶጠ㙁㚄➠橢ҩҨ䙊䝈ᯀ椨ڈ眰Ⴀ⚤⎂䝆ᄀ■溏鴄►䩑ڀᄁᏆڂ詠䩗觩ᖤ晢䝅ᇠ▢ᖀ礠Ң⎝ꖔ邀ᐠ暺毠Ҥ㐻ꏉ窠ᠡᄕ⤀Ҩ䈷ꃳ仠⢂ᓪ㱀Ұ幏鬆睨䛀⢂ᗪ㛂湢亏洂㚈婠㱖䙆䣆晠蹤ݢԉ噠ݣ旟䭵◢ᖀ穰⥑ᖔ晬柟孱ᆃ䙁園ԙԁ窢⎫ᄀݰᖀᏀ㚂㩑ݢᄁᏐҨᄤҲҰ杔䁂⪢ᣁ㙀湠䩀㡁ҡቸ邈Ⴀ☡橠鬐䡁Ҡ聠ځᖸ榡◀ተ你㻀㔖䡆㛃皠䩀ᑐႡ◀晰杣䥍皠针㙖绐▤ᖆ⥁ݰ枨ҤނҩҨ䚺Ⳅᯂ椰䙄㚲ԑᖔ㹂⤠ᒠ暽檀硠塨ᦉቢ鲁ᔅ湡亀㳢◉ҡዸ邈Ⴀ◢ᖀᏀ㙡ᖘ晠乢⪰梠湠婢Ԋᨽ窤ᠥ⋀湢䩀衠枠◠䡂څ⋀ᑐ䙡霔▩ᖔ晬柠曂ұ栀㡀Ⴀ仠ጠተ䓆暨ҥԁ杠⭀◠ԈႮ⠀柢㙰ڨᘀڐቼ㛀湠ᛀ䟂▢ᖀ桪Ꮏᇠ□詠硠悐婤媠ᠡޕ◡䩀በ坠ᘠᖠ㝁Ԃ榠ᅄڔ⪛二普澁Ꮖڂ詠Ꮐ㙡ᖠ晠析䅁Ⴈҥ癢Ⴈ䭄ጢកԀ暮晤በႠ仠ጠተ䓆晰䙄㚒ԑҽ粤ᄁႡ㙀湠䩄▩Ҡ聠䙢ᒐᆐ䚨蠔▻此ᑖ㑂Ҡ曢躀ተ㝀ᘄ⠘Ⴋ㙀皠唤㚒Ҫᖅ竢ᅖ㛁ᑈވ㙖睨㫀ݢ䊪㩁Ҩ䜄Ң晰㛄ጠԈႬ◡蚨ԔႠ㭅ꗔ䡅䣆暨ငҲԑ䙈䙢Ⴀ䣆晢躀㜰聨ᘄ⡀ᄡ暠坠♡癢ҡ䙈嚠ᒠተҪڃ棠㚠橬ҺԀҴݧᖠ塠ᄠ☀桨杠㛃ݰڨበ㝀㽘䁂䙆䛀胨䜄ڂҩҬ癤㙑ݠ㞃䙁塠填ꑈ晤潭ݥ湠ᖁ㧠ႡҠ晰屢ዠ晣蟄ڐ麹Ҡ癤㹠ᆐႨҨ㠆瞠■癤⪱ᆀᑷ߀㚧鹲ҩҤ暀ᄀ梳蛨በ㽀◠䪄ቭހ晣蟈㙂▲ᯂဘ杨䛄ᖔ溂橰曢瀉ዠ杨◉䃚躎鵴⪋仨Ꮒځ◀桤⡈㙧䦙▴晪䙁䯍湠送癴☡ҭቨ邡◀桤⡈㷶睠ⴌ峢▰佰枨Ң⏒㙉Ҥ䜌䡆◘◡ڈԄҲҩҤ晢䙁㙈Ԃᨤ亂ݠ⬀ᠯ⋀湡◖✌ҡ䙈ݬⳂ㙂㚫㤘Ң晰Ⴘ䁆䙄◍榡詠杦坰䋀Ⲕ䡈㙂碣䜤ݢԋ勤⬀␁晡㢃䛄ځߘ噴㲀Ⴐ奰杨ވ㹀㢈婸晨䙅䛂䃓躀በ䝀㯭ᒃҨ䫍榡䩀㣀㙁▸晨邡◕◡詠穱ꇲᯂҨ㚒㛂㚀ᗀ窰躑Ҵ晬邂ݰႨߍ墀ቫ栈橤屢ተڈڂ⎤◙繨◠ᄀԀ荺桮ᖐᇰ▱ᓩ㴀Ԁ鎅繠Ꮐ㙁Ұ普释㝀⻀晨䍉屠Ⴇ䝭晠㩁Ҩ暤ڒԉҩ㱶屢Ԁ钅繠ᖛ欖Ҡ癤ԂႰҨڄҤ缹繨Ҹ⚫㙃□叄䚄☢ᖠ䛤潭ተڈނ⎢◑Ҥ晪㚈㙃□ቩበ坠㚀䁘ᖋ䜔䯰ҥԀႠ㿨橬䙅䳆杨Ԅڑᔁᖐ晢䙅◄□ᖀ衠冹▵ቢ颖Ⴂ㚪㤘Ңԉ繨ݣ囶虠□⍠䙀虸卦澍晠㩁Ҩߍ䡠坠㭤䁆ጠ㙃□叄䚄☢ᖠ䛤潤䙐ڈ߂ᘄ□ᖑበ䝆ᯀ椨Ԅڑᔁ▸晨㚰㛃湠䩀睤杠㻀◀皀ᔐሊڀ橷駩繨▶栌燀Ҩ߆蚀ቭ㢛Ҡ䙄䅁ңځ塠䡈堈癤ԂᘐႰ䝍䣀㙁▱㑈暀ተጭ暡桠潠㜘ᖐ⪡ᦀ讄鹠ᖙ䫞Ҡ癤ځ数ሐ䚮跗❐■㲀ᴁ◀桤⡉隤Ⴀᘀ⠠隁ተڈނᘂԁҸ䛐䙄㙃ᖃ䟀㛲ҩԀ䛐⤠ݦ朢詠坠⚰㭔䁂䙅㙀■詠㝆填蝥麠Ⴐ啭胨暄ҲҺ勌䜞䙀▣ᕂ詠䡀Ⴀ⭀ጠᄀᇥ洤㐣䡀ݠ㹬晤㕋㙀橷榤ұᔐ唬⪢ᗿ㟀㚐ⵄ䛒䙀⚠ᘀጠᄀݰڈᖐ聨ᗁ嚤⤄䙐ᑐ䜭䩙扦Ҡ癠ԖҠ▢躒▬ҡ䩀ڮҠ䜍蚐Ҥ㛠㡁ҹቨ骡㗐ᄹ鏄䚔㘸᧥䁚Ԁᒢ榠溛㹌ҡᖩᣁꡟꡟ木ߕ窀抔ݠ㖚穭ҡ㙀湤ݤ▢幱ڀ▭ހ暨䞁暀绢⪠㲀◡ݨ㱈枨眰䝀仠㙠鑺ᣐጰ䭍䡀你㻀㑠乢䙐ጪڅᗐ䡁ԅተ邀ᘠ獺歠䙃噰ݠ㢀⛉Ⴖ㐀虠䩂Ҳᖅ衺Ԁᘠ蜀㻀ᓠ㛁ԅᖄ嵣㹐ጨچ蚂蝠䫀Ꭼየ㙄湢亂⍃噱蛠㣂㺪㙄皪ⵂဂډ䙈䛃Ꮐ衠㟃䚄ݲ晰靴䁀䙉㩁ᯄ߁園ڊ⠮Ⴁސݻ曧ᖁ㡀耐☀㹎⤠ᘔݧᖠ衠澠☀桪ጠᄀ□◀㵐蹡Ԅ癤䙡ᔐጰ嚰⬀ᇰ◠晲桢䇁牨ᄄڃ噱因㢀ᒶႴ▢䩁㩑ᓑ繨隠⛡⫵▢亅⍁ڱԄ癤㚁枠坠♡癲ډ䙈廪Ⳁ㙄灠楢ڠ罠䭊㵁ݠ繠琠槤ݲڙ繨嚠ᴅ⋃湡䡀蜠庹Ԅ癤䉠Ꮠለᄅԁ杰䋀㢐ዠ㙄湢橡Ⴁ䚨㛀㢀◖Ⴘ▢䩁ᓠ㞡Ԅ晴屢㩐ጰ䥍䡀灩䟨䚬ᗀ㙃橡柄ڠ䡁Ҵ䙌⤠ᣈᆃခ婰灨ᗁ嚤ᠥ⋂□䩁䣐ҡ艠ڀᠡᖵ▢溁⍂蹠ဈҠ䙉㙂珠楤ݴ㪌ቢᄀᄗႮ▢衠蜠嚺ᖭቢ㚪ҥ盐㙘Ҥ♪⍢ᆀҰ䕀ᑈႨ㙑ᓐԍᕅ߀Ԁ毨ᄈ㣆硬ባҠ桘曀Ҥᨠޔ◪ᖄ䜔ҫ㙄㞃䙄ށԐ勠▨暀ᆈᆂ詠䚄Ⴀᗀ⪶䙉㩁ᯈ䙠䩀㡁Ԅ癤䉢ᆐጪڄዠ㢨㝀晢䝊ᯀ椨ڈ皤ቨᘄ㪀Ⴐᒆڂ詠㡀䁈ᘀᖠ禂គ榠䞤Ңұ繨◠Ԁᛛݠᖁ㩔ᓙ㙀䑖䙂䛀橺晡晀䙈停池析寱߉ҤԔ⛃仠Ꭼበ㙁皠趠ᏂҺ⠂Ⴁݠቻ朢ᖀ塠ᇰ☠晦杠䅁ᯈڨ㙃噰晩Ҥ晢䙐ݪځዠ碈㝀晤杴孴ݠᗀ檰蹩Ҩ癤ԁݰݪڂተႠ㝅ꗔ桟ꡟꞀ咈㙖睰䋄▦暀ހ杺歠䙂㙨㝀晦乢㙐ڊڀበ你Ⰰᗈ乢ᯈ朠ᇠ朒ҡ䙈ڀᓁᖵ■◀洂晰ڄበⳃ㙀㚂ⵄ㙂Ҫᖡ窢ᄀዠ蘺檠朰ژ噤㲀ጡᰕ⠀晤䙄仈ݠݢᡔ㛅湠●鴄㘿ꡜꗢ条孰栨څԀႨᖍڀᄡድ⠀晤䙀䡁Ҭ癤䙠ݴݠᖀበ㾀☰癤⪱ᆀᓀ蟄Ԓԁԉ窤ᠡ㑵⥀ҧ䙂杠⭀⢂ᗪ㫁Ұ橱㦰㺁ҵደ邈Ⴀ◡橠䣀㛁ᖡበ䝉䛀◠ڈԄҲݠ⢂㪪㩁Ұ䙭址㙀▤㲀ᴁᇺ▢ⵄ䜂晰㝄壮ⳁ㙆⠀晥ԀႨ㹭ቢ䝀ᣐ߈߆蚁䝀⭀ڬተ㙂皤ⵅԀႨҩҤ晢䙐ᄰ䟍䣀㙂ᖅ籼በႠ椨Ҩ㙷䝀䟨橬乢ዠ沱蠀㡀垠■癤ԁҥ皠䩡㛲ҹҠ鉤䉠ᆐጭ暣በ杠㫠ᖀ杣悕☠ᛀ䙂Һᖡ窠ԈႢᗀ䙁皂Ҫᖡ窢ᄀᣐႰ䩍䡠䡸婠㱖杠㛀□詠䣀㙢䫈Ꮚⳁ㙁灠橤Ԃ晰ݠ㓂ᓴ宀晨ԃ墀⛠■晢乢ተߊڄ棠㚠橬ݪⳁᦀ暨䙁塠䁉栈湠䙀ᨼ߀䟏颐ቩᇬ橴䩀㙅■䴀䚀㡀⚠ᘀ䙁ዠ■蛨በ㽈䋀ᗂ▣䙐ለԉ㜐㽀䛀ڀႰ己ቨԄڲԙҥ㱶䡉㙀■䡀塠杠䯨桰䙇㙄脨杁癠纸⚠晬歭ҡ㙀湤Ҵ⠣仨㒀ᄡ䙵☢➠橢Ҫᚱ㡚ᄀᒠ蘺檁桠Ⴀ䟨桺䙁㙂湡䩀㫱罰䙴ᖆ暀⋔Ҡᖁ浲㙒ᖅ窠ᅌ㝃湠䩀䴂㚊䩴㒀⏀ᇥ榢ᖀ桠你ݠዠᒠᒠ蘺檠蜰ژ噬㲀◀ᔈ䆀ᅄڲҨ栐Ҷ䙈䛿䊈䠄ݤ▫櫤䑆暀⋔Ҡᖁ浲㚊ᖅ窠ᅌ㝃湠䩁㴂㚊䩴◠⏀ᇥ榡䩀䡀熱ᖥበ䝇㙄㚀佀橠䁁Ұ普邂▰ለᄍ䡡✈Ҡ晠䙇孱ᘋ䙀⏓癠ݠ䛂ᅊ㙈皠厥癠Ⴀ潤ᑔ占ԙ瓠ҤဂԚᖉ窤␇⋀ᑂ詡婰⥑ᖬ晾ᗀ㙂□鎤ڲڋ伔Ҡ䙀㙃胫䙀⏓癠Ԍ晨䙅㙀■䡀塠坠卼䁀⤋㙅㚈ⵄ晠麹ԉበ屢ᖐᏐ䛍䩘ᖮҠ晴杨宀鮁幠Ⴃ幠卧罧晠䛔㚼㛘ҡሰԌ晲䙇◖晢詠顠㻃噠㷚ᖁዿ湠ᖀ㝇Ⴈ▩Ҥ晢䙐Ҥⲡ癢ҡ䙈ڂᒂ䙐Ҥ⩈皤Ⴀᘀ⍴䝁㙀■衮㡠ቭ墻Ҡ乢ԃ榠䩀䣀㙢ᖍ裢ᓇ⋁㚩㤘Ңҩ繨ڀԀݰݤ✡霒ҩҭ竢㚪㛀ᒀ柄Ԕ⪠⛜☠䙀▭楠䞤Ҥ☃伀ᖀ䡄㙀㚂ⵅԀႰ㭜☠䙅㙂⻀柤ڂԉ繨㙘Ⴋ䜊䬰Ҩ㾉䑀ހᖀ柞㙁皠键鵳噰Ԍ晤㚛ዠ■ᖀ㡀㛂嚐ᖖጠ䜘䯰ҥԀႠ⚼☠䙂䜖䯰ҥԀዸ婥ᓙ㴀Ұҭ暠ᖚ䫶ҡᓉ㴀Ҵݠᖀ㳢㙉繨ڀԀݨ㩃蟈䅉屠ݠڬበ䜔䯰Ҩ䃉屠ހᖀ䙁孱ڍ暠በႠᛄᑤ屢ተҰ寲鉠ᄠ□㑚ᄡ碫噠◀ᓠ㙂⍒叠ځһݠሡ塠㛃㻈ᴀᅊ㛀曰ᖀ婸Ҳ扱ڀተ⻆ڂ詠䩐覱䙈ڄᖠᄀ桺歠䙂㙒䉑ڀዠቻݣᖀ桠㟰◀㹂⥁炩陠◒澜ҡ䙈ݢꔠᇠ朽畎㦠㙀勠ڀႰ买Ұ寲鉠ᄠ□㑚ᄡ碫噠ᖀ㦠㙀劜㲀ᄡ晡㨁▤ҢҨ曈䑖䙁䛁菨暨㙷䡌颯Ҡ邁ݡ䘐売扠ᄠ■橦条㙁䍈暮㚄Ⴀᘠᖐ⪡ᦀ讄鹠በ㝀㐈鉤Ԁݥ溠橠㡀ᇰ◀晤䙀䅁ᒈҤҳ噰因ڀዶႤᑿ䚠㚇齸Ⴇ晠醂ႲҨڈ㣆睠ᛄ䜔乢ұߍ暠በ㡉ᇨ晢杨孴曠⎀噢ұҤ硤ԗᆌ■溂⍂Ҳᗡ窠ᒐ㓁㙀湠䩂ұ婠䚄ᄡᄃ皠ᖀ㩐⦨鍴☠䙀䛀⻀杤Ҥ㙉艨ҸႫ㙁⥀ዤ㙐㡁Ҩ癤予Ⴀ㚠癸晤廈ݠᗐቼ䣆晨څԂየ婬㳂◡ݨ㱈曈眰⚠⭀ᎴҠ㙁㛢㙐□ᇸ♰晤䙃䅁⪨ڈ䍀ᓑҩጰ邈Ⴀ☠䴀䙂Ҳ⏀ߔ䙂䛐䃊䚠ᓰ㹁Ҩ晤佣⪻朰ᖀ䩐榱ҩᏀ醀ݨ␀湤Ԃ蹠䛈Ꮒጦ㙀皠咈綀蹡Ҩ聠⛁ᐠ桨䛈㙒▨Ⳁᘀ䙁㙂㠃䙀䩀㡁Ҩ癤皈Ⴀ㚠癸晤廈ݠᗐጤ䣆晨څԄ梈婤㲀ጡ㹵□◀㝂㝀♀ᗠ䝃ᯀ椰恰剠ቨ警齥晠▿Ң詠㡀䆑Ҵ驠ԀႰڐ䙭䡠❐⚀晤䙂䛠䄈څԅݠ髠ᗚҠ㝂㚀漤ڄ▫歵詺ᄀႶ晠䩠硠㞀♰桨⪠ᣀᑈҤԂ湹朼ᖀ䙀䛄䃈ڈ㧆瞠■鉤ҫ㙁㚸ҭ䢀ڸ卤㛂Ⴐ孠ᑐ恰剠ቨ警齥晠▿Ңꐠ噰橙⪡ጠ醂ቲҨԈ㞆瞠■桲䙁㩁Ҩ䜀䩂Ҫᖑ窰በ㝃皠铨皤ڠᖬ普柟宀ꡟꡟ陷⚰⚤ᑔ䡃䛃芨䛠乒Ҳᖝ㡈暡Ұ木߁晰罠㽄鼴䝂㙁盞䘿ꡐ䇉ᖡበ䝃ᇠ■歠䙂Ҳᨡ窰በ㙁㚜ⵅԀႠ⚥眴乢Ұݰ剭䣀㙁ҩᐰ邈Ⴀ■溊⍂晰ݠᘂ滊㩁Ҩڭ䳦禳倉笴䝃㙁㚐⺤㙢ڂᨡ窤▭ҥ湠溈洀罠㭔䁀杤孰曠蹤Ԃ晰ݠ⍴䝃㙁㚂ⵄ㙢Ԋᨽ窤ᛍҥ椠湠䩀㡁ԅ⠈暀ᆐ曣ԁ嚄Ⴀ䍔䁀䙆㩁Ⴃ䙄Ԕ☢䩴ᖖ䙃㙁胨暤Ԕ滈ᖭበ䝃ᄀ■満ᚠ䡁ҩ⠈暡ݰ枣ݡ塠㡈ᗁ嚤ᠥ⋀湠檀圠㺘杬Ҷ䙂䛀橺晡婰⚨㭄ڂᒋ㙀㚀⍠䛂ҡҬ鉤ᖠҰᄭ暠በ䝀ߘᖈ䙄䛌䃈Ԉ㝆瞨■鑦Ԁዠ橺橠㩐榱䩈ڮᒀ㙂■䭠䙃幸䛀☢ᗪ䜰䤰Ҥڄ◣亠㱈暡躦噠◆塠䡈䟩ᕱ⩀Ԁ趃幠Ⴂ鹠勠☢䚪㡀ᑵ曀㙷齸Ⴄ蜶䡂㡀■◀ᓠ㚁ҡᖂ嵢Ұݰ䡍䡠㽀ᛄ㜔佢һ朠ᖀ䡀⛨■鑦◀ᄀ決橠䩐榰杨晤乢⪱ځ▤Ҥ□Ҥ䚄⤠ᄀ湺橠声㹁艬ڀዠႴ朢⎀埢Ҳᗡ窀憂ހ蚀㻀ᗰ䡁ҡቨ邁ቡ癠湠乐㡀⚠晢柠އ杰ᖀ䩐ᇰ♐晢柠◄榠䩀㩘ᖀ㝼䁄䙂㙀皯针㹀⦱蹠芠ዠހ楽溜ҷ㠐ސ晤䙁䛃䏐乎㩘ҫ潈ښ杣ᯁ椨ҥԀ杰⭀◰በ䥂䘈ҤԑႩҠ癤▥㙁椨ҥԀᓑҤ驠ԀҰҪځᖐ⥑繨㙘ᒋ㙁■亇鵴⪠᧨驠厀Ⴐڐ䜎詼ҫ潈ژ杢ᯀ椨ڄҴ➻武Ң颚ҷ湠橠㩑㧲╠ᑤ恠㱐ݨԈ㚧塩ꑥᒀᅒ䍀⦨ڄҴ☃罤ꗢ柠ޙ㓀ᦈ㚀罨ᘀ◰በ㙀⠀杤䙶罠ង☠䙀㙁湠䡄䡀ᄠ◀桦⤠Ҵݠᖀ崂Ҳᘱ窠Ⴐ巭■ᖀ㡀䆑繨㙖䙂䛌䃄┄䙔⪤ᒐݮⳀᣅ湠溆⍂䙀咠ᯂᅟ㙀橦䩀በ⛠⛐橤杸恰ݰ䝎橸ᖇ陽襄䙂䛄䏐噿蚗⚠⚤坌飒䅀ҨҤҴ㓀ᇨ癤Ԃᄀ汽ᖀ䩐樂ᯂሸ┑彰ݰ䝎詸▐㐄晤杸憙䋍晠桠Ⴀᛇ习邈Ⴀ☠溃␂Ҳᖡ軣ݠꔃ芼橠䩐樒ᯃꊦ鞀ᄀ汽璮䦠ځҡቸ邀ހ鱠ⵅԀႰ⚤坈䙂䛄䍐噰㘀懫滠ᘂ☖䜀无钄Ԅ♣耩諌Ҡ㙀■些晦瞠■橤杸恰ݰ䝎橸ᖇ陽襄䙂䛄䏐噿蚗⚠⚤坌飒䅀ᖈҨ㞆睠ᛇ晠邈Ⴀ☠溃␂Ҳᖡ軣ݠꔃ芼橠䩐樒ᯃꊦ鞀ᄀ汽璮䦠ҡҡደ邀ހ齠ⵅԀႰ⚤坈䙂䛄䍐噰㘀懫滠ᘂ☖䜀无钄Ԅ♣耩諌Ҡ㙀㚇ⵄҴ㖀ᇨ癤ԂԀ汽ᖀᖐ樂ᯂሸ┑彰Ұ䝎詸▐㐄晠杸憙䋍晠ޞ繰ᖍꔄ晢䙁㙀湤Ҵ◪扱ݢ㚁ᖈ㫈ԉ地☀◌晠㙁㛁楠柈㝄◠枨桢⥁暠䕐䝈㛁Ꮢᗑተ㚒宀橰䝂ឆ禺᧽裢ꐊ㝂㚀◂ᖐ曢潤ᚨ醂Ⴐݨݩ堒ҫ勠ݺⳀ㙀皤ᖀᖐ䦒ᗁተ㚒䛽胨ҩ堔◠枨橨邡◀桤⡍䩗覰晤橤歭Ұݤ㒤㙀㡁ҥᑾ邂ᆐݼ伀橢ҡᖄ㹂⤠Ⴐߚ満በ⥛檡貢ጡ◀桤⡄㙲Ҡ柸晤杠㙀湠橠⍒Һ勍窤ᄀԕ滠珄㙲Ҡ柙⠈暀ݰ߄⚤ҢҰ枀晠䙂▦楠䞤Ң晰ݤڀᄀᆛݡᖀ㡀Ⴀ❈鉤ҫ㙀橷栀㡀☣㻈ᘂ㚁ᖈ㫈ݭ䬐蹩Ҥ晨㚰㛀■䩀杤杠ݠᗀᗫ㝂ᖒᖀበ䛀媐ቶ䙃┥湠䡎䡀☢黈㶺ቡޟ漠◞Ҧ罰㛐ڀᗁ钡陠⍠䜂ԁҠ鉤◀ዠ鶀鹠ᓠ㛡Ұ晢屢▰Ⴐ坑鉠ᇰ☀晨杢䅁⎠湤Ԃ晰Ⴔ☠䙄䜦Һ溃䦠㙁ұᔈڪ䛍⻀晤ڄ㖠ᇩቦ屢ҰႰ曦隅蝠㝇罽晠䅁㱈ݨ㟳噱雠◠ᗁ䉵⻀獡晰罠㝄蜴䙂䛈䃊䚀ᓰ㹁ұጰ邀ᄀ桺殀䙃幸ݠ◠ዩႠ㐀詤ڄ㖠ᇩቨ屢ҰႰ惠⍄⚁繨ڀᗁ豠䃐䦆蚀Ⴀ㝇■邡ⳛݠᖀ檀䟸✐晨栨淀ҭ暫በ䡈錸ᗸ䙄㙂㚎ⵆ蚆杠㛀☢䚪䅁㩂詠桠䡈栈鉤満ተႰ䝍䦠㡁Ұ晨杸孻ݮᖀ橽晣仠ᰀ橠ᨢݠ䝏颐ቩᇬ橲䩀ᄀݰڈԄႠ㽔䁀䙄㩁Ұ䜮梀彠㛠ᖈ銂ᖠ晲ᇠ塠䞨Ԁ桨条㛅▢ݨበ曢䋈㫊ⳂᣐҨԄԂҹԈ晰㙂㙃湡㓄䙴▢䙴ᯄ暀ᇢ杰◀㡐绀ᖬ晦㚇㝅瞣䚡塠恨ᄀ䁆ጠ㙃杰ᖀ靤彰嚔ጠ␁ݨ䃀ᅄݴ□繨◠⛡һݢᖁ㩐䦒▒⻀Ԁᘠ桺溚☜Ҡ朼Ҷ䙈ዠ㚀䩀涢☑Ԉ桤䙈㛂ߐᖀ䡀彠㛀◠␋⻑ᓈᅄԒڡҼ晼㙌㙁▣厤㙢ԁԕ粤ᖍҥ椨ҤҲڑԀ晪䙆□▣በ衠㹢ݠ㱠ᯋ㙄㞃䙄ށԐ勠㣂䚪㡀□漁霒ڂᖄ䜔ҫ㙁皠䡍䙀绢⪠㷢ቡᇿ漠◂⍒㙑㙀ᘀᎿᄀ■亐Ҵ麂ݠᘂԖႦ■亐Ⴄ黈ᘀᗀᄡ䗸盀Ԏ䧠کҨ晢杦憀陠咧䙀表◐ᖖ䙀㩁ቨ曄Ҥ◃伀ᖀ汤䙐Ҩڢጢҡ䙈㚂ᒋ㙀■躀㳣噰䛀ڐበ㙁胨ԇ䙀ڠ◌晢柠晢㨁▤ԂҪᚽ裣ҡ彽ң詠䡀⠈瀹ᕠᅒ䍀ᒈڄҴ◓罤ꗢ柠ޙ㓀ሄԂҪᖱ鋢旑䜀ڜ涠ߔ◀噤㲀ዠހ瘼亐ҷ㠐Ԙ晤䙁䛆䏐扠㵣癠因ᗀᄡᒻ㚏针㹀⦱蹠䃂ᒋ㛀湠◀洂晰ݠݢ☊㝂⠀晤䙶罠ង☠䙀㙁湠䡄塠䞀■桦⤠Ҵݠᖀ崂Ҳᖱ窠Ⴐ巭□ᖀ㡀䆑繨Ҷ䙂䛈䃉ҡ掐㙈㐼池杰寱ݩҠ䩀㨸⚠ᘀ䙁䜀ړ蛨በ㡈ߘᖘ䙁䜀ᖒ䟠㡀⠌በ☾Ⳃ㙁■亇鵴⪠᧨驠㑠Ⴐڐ䟎詾ҫ潈Ҹ䙂㙀皡用㨷⠌ҥ諔ҭ䛁楠蟄Ң晰䛈ᴀځድ⠀晨蚤Ⴀݠᰀ䩠Ҵݢᖠ園ҡҭቢ邖Ⴄ■ᛀ䙂һ仠ᎴҠᯁ椨ڄҴ➻武Ң颚Ҧ湠橠㩐娒⎠ᑤ恠ᰀ曣ԁ塠㝀ᛄꗢ柠ޙ㓀ሤԂҪᗉ鋣陡彽ңᖀ䡀⠈䀙Ꮎ鞡晠苮晡衠㝀ᛄ㼬枟开虠咧䙀遨㙬桢䙀䛂䃊ڀበቨ䟨橨乢ұߚ詠㫐䡁Ҡ晦䙁▱湡ᛀ䙂▸勠ڐበ㙁胨ڈ㜆睠ᗁ蒔䙄㙀湠鎦蚀ڙҩዠ還ҥ鏠暀鹐㡁ҩቾ獤䙐Ҩ䚡晰罠Ⴄڀګ䛁芨曭䡐你㙑ڀԁᆐڈ䜀婢ҹҸ聠ԚҠ□満㳢◑ҭቢ邂ᆐᄲ䟠ސ罠㫀ᗀᗫ㝄㚟㑤䚶睨⪩ڀᄀድ☡◀嵰䡁ҽቢ湭ݰႰ䚮梀㡈蠤桲䙄䛾䊈木㚆睨ᛄڀᎫ䛌䊈䚄ڢ晰ݤ⪦暀Ꮠᆈᄎ衠⛠■橬䙂悙⻀晤Ҵ◃令ጠᠡድ☡䩀嫰蹠劐ቶ䙇䛀硣䙄ڂ▨Ⳁ晪䙁㩁ҭ暠በ⠈㟨桢䙅䛂䃈朄Ԕ滈Ԍ㲀◡ᇸ溠橠桠憱ᖄ㲀ቤ䙐ݨڭ䡐㙚ݠᴀᄍҠ㓀ҤҴ▫令ጠᓁޕ☠詠䫐蹠劌晠⨾Ⴁᄿ蚏袐ቩ栌橨䩀䛓溠暨በቴ榘ވᗀ㙀◡蟠㛰䁁ұቲ邀ᄕ☠躏洂ҡҡខ瑠晱ሐ硹虧驍䋈⢃ꡟᇸ盙ҭ袀塨᧱ᓅ㘀ԕ⩀ҧ噠Ⴀⳅꍴ䙅㙃㚹ҭ洔㘿ꊭ裢ᅔ䜑䨰ҭ䤰ҡ鉠ڀጡ撕◠橠ᖯꔎ茝加⏁Ҧ晢蟄ں彰ⳇ池煤䙐ݰ嘭䡠㝀㝄㤔邀ᕓ滠詠婿ꡘ㐅ᕈڮ㝁盙ҭ洔㘿ꊭ裢ᅔ䜑䨰ҭ䤰ҡ鉠Ҷጠ㙁皢灀橢Ҳᨹ窤ዠዠ梺玤Ԕ▫睦歿晠孷晠─Ҡ虨勠ᘂ꜊㝁□◁㳦睠Ⳅ蜴恠ҥ湠井漼Ңᖀ晨杩孰ݺ溄顠㦘暀晨析孲Ң鴀䙠䨸ᨸ晠栬ԕ◠詠Ꮠ㹁ᖔᘀ䙀㩁ቨ暈䉀ዸ㝀晢栠Ԅ榠䩀㩜Ң╒㟀Ұ䁀ᑈڤҤ☃亠ݢԁݰҰ䙆蚀暹Ҥ晠杬孱ښ源ҳ癠ݠڀԈႤ☡◀㳢㙑繨㙄暀ᄀ隠⛀橢ҩҩ竢斀ድ橻榤Ң晰䝅㔔杨䫂㙈ڤұҡҠ癤◂ᄀ隠➡皂ҩҨ䜜䁋㙀㚱ҭ䡀偱䡙ᛁݠ暠䙰䘠◒Ԋ⚂Ⳉ䙅䝌䟐癰▨ᖇသᴀᠢᗃ㛠㙐▯လ㑒◠ᠢᗄ㛠㙐㗀ꊹҵᖱ◢暠敡雐桠偱䡡ᛁꔃ柰ᄰ浱◨䩡艨ڀᒠݨҨҨ㙃噰䙼㲀ጡ虠ᖚ虡塠㡎Ҡ䜘ҫ硡ځ噄Ҥ㙁艨䚀Ң昀晨Ԉ㹀㢈婠嫢䕠ހꡟꡀ鬐蹠軠Ꮒᰀހ桽獄䙦舒ᖅ袠ጡޚ䄐中䛲㙑繨庠ጡᄚ㚩㣸Ҧ睨⭀ڂᖂ䙁㙀湠䩄Ⲅ畠ڐበ㝂皠䩀䶂㙳橱ڀᒨႠ◠詠䝄齨☠ᰀ貀ރ榠䩀塰㚠◍ᒱ㨀Ұᄨߎ䦠㙁Ҭ晠屢Ҧ߂詠㡀㧡ᖔ⋀䙃㙂皧唨㚇⥒ᗁ窤ᰈႠ☠漁皂Ԋᖅ躢កႱ߄ⲄҴ廈Ԍ㲀የႤ☠䩀槀㚡Ҩ晨屢ᖐႨچ蚀蝠㛀Ꭼቨ㙀㚀⍠䟀麹Ҹ晠屢ҥ湠ᖀ姀㜁Ұ晨屢ᖐႨݦ蚀蚽繨ቪꚠҴݦᖠ暄ҲݠڀԈႦ㟁▤Ҥ♂ᗀ晠杴孱ڊڀዠ㼛伀ᖀ䡂⋀皠ᖠ㜀㚙Ҡ癤◂ႰҪځ梀❐◐晢䙂䅁ባԁ塠⚠Ⴄ䜔䙃⻐朠蹤Ԓ◉Ҩ橢杴孱ߊڀዠ㡨㝀晢杰孰木ԅԁႨ◌晤Ⳁᣐᄰ䙆蚀ژ⚠晨歭ҡ㙈ҤҢ晰靤ᚨ栄煀Һ檠䣀㙂䉑ڀᗁ◀歨ݥԁႠႸ崴䙁䅁Ҩԁ癰虰勠ᗀᄖႠ■䟠ᖙ櫾ҡᒱ㨀Ҵݠ●衠ᄠ☑镂屢ҧ椨Ԅڃ噰蛠ڐተ㝁Ⴐᖀ㡀㟰◠晤䙁䅁ᯂ詠ᖑ䦑䙈ڄڅ⋀■亂洂ҡ繨ڀԀݻݦᅁ嵐☃ꎧ⛍晠㩁Ҩ暨皤ቮ碻Ҡ桟㗛ݠ◀တ聭颻Ҡ䝆ᇠ■檠㣀㚁ᖈ晢乢ተ木ԅԀႨ㛀Ꮒ⬪㩁Ҧ橠㡐坠㭄ᑔ䝅㙁ᓀᅈ䎉屠ݠ⢃ꙟ㙂盟詉堓噰ݠ㙗㩂ݣ䘈虨㝆罰㛐Ҥ晢䙁㙈ԅԀ䝐Ⳕ☠杢㛁楠䞤ҲҹҤ癤◂Ꮠ߈ڤڔ缹▭糌ቤ㙀湠䭀䙂㙩ҭ竌በ㙁瞣䙤ڂԉ婠ڀᄈႦ☡満㶂㙸朘ᘀᎿ㙂⥀Ҩ皤ႠⳄᏚⳅ㙂⥀Ԅ㛄▩ᖌ晨䙅㳀ڈဈ㙗㛁廠◺Ҡዠ□◁⍂晰Ԑᖖ䙄㳀ڈႨ㚇䧑ᖔ㹄⤠ዠ桺歠䙀罨⭀◰ቤ㛂湠橠姀㙡Ҩ晪屢Ԁ晨䚡塠⚠㽄ᑔ屢ᯅ湠ᖀ稀ҩҠ晦恠ҰႰ䡍䢀ڸ卤ݢځ蒡陠ቦ晠聨ᛄᏃ狣虠ᖍҡ廰㙐㠼ᑼ䥀䛘䄈暤晢Ҫᖑ窢ᖠݴݡ♀橢ҩ䙈ڂᒠᄀ橺檠穰ᇰ■晤桡䇁桨ڄԄ◣伸ᖨ䙂䛔䃈ڨ㝆瞨■鑦Ԁᄀ湺橠婰榱䩈ڮᒀ㙁■讀䙃幸蛠ᘂ㪪䜞䢰ҤԄ♣亠㱴䙄䛄䃈ޅԀᇰ■晨䙂㫁桭蚠ޒҲᘁ窤ᒠዠ桺歠䙃噰ݠᏂ⬪䛀⻀晤ڂ湰ݤ⬀ᄢݻ曡ᖀ䡀堘⬡ቸ杤◌☠伀橤☂ᖐ䜔ҫ㙀湠殀埣幰ݠᏂ☊㙁灠晦蚀ႠႦ坷晠䅁ႨҤҳ噰ݠᘂ囊㡀ᑸ蚀㙷齠ݠڒᒀ㙁冰曐踣幸ݠݣ牠孰枠湤Ң晰䛈⋊Ⳁ䜠Ҩڭ墀䝀⛌䁀䙃䜠晲䛈በ㽀Ⴄ㼔䡃孰ڈݢ⎑睠Ⴄڬቨ㙂湠衠በ㝀㟬桤䙁㙂䃈䙡晰罠ⳇҠ㚫ҥ湠溘Ҥ麂ҭڀកݨҨԈ㩆罨ᘀᘂ曊㝁㚰ҩ霰ژ勠ڐቨ㝁湠玤䚂Һ扱ڀᗁ虠㤁▤ڄ㑀ځ繠⤠Ұߚ溁洂ҩҨ䜞䁠ҰҪځበ㦑繨㙞⤠ᆐႤ㇀ޘ鹰ᖍꕆځ㙵满䫀ᖐ⚨㽆䝧晠䜈䬰ҥԀႰ䍄ᑔ屢ҡ㙐慲鉠ᅈҠ☠格燀Ҫڀᖐ⥑ᖘ㹂⥁銫噠◀㧠Ҡ卧徍晠㙃⻀晠䩀㡁ҽበ満ᒠ曲钡癢ԉҰ驠㹠Ꮠߍ暢桠你♸ᖠ柤灀Ҫڀዠ㡋ꏐ䁀柤灀Ҩڈ㙖睰♸ᖀ柤灀Ұ埲扠ᄠ■橦ᗿ䜄䬰ҥԀႠ㫀ڀᄈႨᗀҤڒԉ䩌ڮᒈ㙂皢ⵄԒ晰皤Ҡ柤灀ҪڀڒҰ卥ꗔ屢Ұᆐ䙩地Ⴀ㙴ቶҫ㟀㚄⺤䙢䙁Ҩ晢屢ᯐݨҦ蚀晠啀ቢᓿ㟀㚈⺤䙢䙀⚠晢条孱߈ԉ㜐ႠႤ♴乢ұڐ䙮梀䝀⭀◠ᓋ⻑ߐ䝄Ԕ◢勌桦ጠ㙀杰ᖀ䩑榲ᖄ鉤ԀႰڍ暢桠㝀ހᖀ屢▦ڂ詠䩐ᇰ◠㲀ዠᆐݰ䡍䝂潠♀ᖀᗀ㙁㚂ⵅԀႰႴ䁂䙂㩁ႨҢ⍀ڙҨ癤ᖡݰҰ䛍䡀㿰■晠䙁䅁Ҩڈ㡆瞀Ԝ㱠楠᧼ڀ䚏颐ቩᇬ橦䩀ᄀ■䩀䳢㙑ҥ㡚ԀԀ杺歠䙂㙊ᖅ躤ᖠႰႨډ堒㙒ᖠ晤杨䯍溠暨በ◂ݠ⋂㺪䛀珠晤Ԓҩ繨亠ᒠҴݠ⍠䝀虨勠⋂ԖႨᑈڤԂҺᗁ窀侀ᆔݠݨበ䁈䟨癤ԂԂ榠䩀壠㙡Ҡ䜔ҫ㙁灠曤㙒Ңᖑ窠ዶႠ■ᖀ㦠㙁ҭጠ還ҧ椤☀ޛ晨ᖉꕆځ㙵滠諠ԄႠᘀᙔ䡂㙀碣䙄Ҥ◃伀ᖀ䡁䛀荨曤Ԃԁҩ㱶䡂䛄■溁ᘱ罨▩ڀႤ䙐ߐ䥍䩐❐■晦䙁䅁ᛈڤҢ晰ߘᖠ⪡ᣐߐ䙆蚁ڙҬ晤䙃䛈䃄ᚤԒ晰ұڀᓁᖵ⠀晤䙄仈ᘀᴐቤ㙀ᖚ晡塠㾀▰桢䙀䛂䃈چ蚀ႠݠᎬበ㙁皨ⵄ晠麸杬ҷ幡ݡ蘨虨㡆罰☰Ҥ暀ހ暺檠塠⡈婠晠杤孴ݠᗀ㩐⨡▰晦䙄㙁礦誠婰杠Ⳅ㛖䅡ᆁ㙈Ԁ橢Ҳᗡ竢ᄖႠ■橠㦠㛡Ҩ晠乢һݤᆀ㛲Ҳᖀ鉤㙋㙁■詠䩑ᓐ曼晤乢Ң㙈ڈ㛆瞠■橠歭ݰݪڀ桠ݣ习㲀የႢ◠䩀ᖐ䦑Ҭ鉤ԀҰڍ暠በ㡉ᇨ湠㕋◁晢騀㙐䈸⚠晢杯䳂㙈Ҥ㙠虨勠ݢԀԕ皠钄䚆睨⭀▨暀Ұ曠蹤Ԅ□蹠ڀጡޕ☠橠嫰蹠劌晦䙁㙂䄈暈㸇⚰㟨桤䙄䛀秡■婢Һᖀ鉤Ԁᇠ杺檠塠㢈婠㱖䙁䛁芨䙡塠◂ݠጠᎪ㛀朰ᖀ䩐ሐҠ晤条孱ݨԉ㜐ژ勠ҷ剡ݡ蘨虨㥆罰☰ڀᄡድ◠詠㣀㙢㩑ڀᄈႠ◠䩀䩑ᓑ▱በ屢Ұݰ暆隐杠☠ᘂ☊䅁ᛈڈ㣆睠ᛄ䜔佢һ朠ᖀ䩒ᓑҥተ邉Ⴀ㐀虤Ԃҩ䩈ڮᒘ㙁㚅ⵈ䈈瑠ݠᘂ㺪▥注ڨ㛆睠㛠ᖀ屢Ұ߈څ㙰栘■㲀ځ犥陠⍠䚂ҡҬ鉤Ԁᄀ牺櫠ޙ幨ᖉꔄ晢䙁㙀湠乐㡀⚠ᚾ条㝁湠亀ᘀ蹠軠ᗐበ㝂㞃䙤Ԃ晰㛈ᖚᖠݦ曰䙡暐罨ⳄڂႬᒅ湠䟠ᖐ☀ᖬ晢条◌ᑈ暨眰☀◌晨䙂䛀湠䡊墀㚨ᖬ晠䙁䅁Ⴐ䙤㙐虨勠ڀዶႢ㚀ᖠ園ҡҬ鉤ԀԀ桺橠㦠㙀咐ቤᅟޟ■ڏ驰⚠⚴晦毒㙁㚿ꡟ靗⚠⚼晢桟ޘ皧迎䵠蹠轤ጠጡᔺ冨月㙒Ҫ▜ᑢ䡄悶藰橱⡲ԉҮ腜梀檳苨ڈ㚇䝀㝴晤䙃岀ꡟꡟ隔至溔Ԕ䙀㙁⻀曤Ҥ☃仠ᎴҠ㙀㚂ⵄԓ噰ႤҶ屢ҥ诠䙠乐㡀⚠ᘀጠᄀݰڈԇꂨᘈᴀᄡԄᓀᓄԂ晰ݨ☪Ⳃ㙁⠀曤䙠蹩Ҥ䁆⪥ᣐ朰䙄㙐蚐勠◠ጡݰڄ⡤䙤仈◐▶䙁䣆曢詠㩐☢蛨ᖚቫ㙀■䴀䚄▩ᖄ㹄⥁ݰ曢詠በ㟰▱በ䝃ᣐҨڦ蚀ႠႤ㜔䙁䅁Ң雠㙐䈹⪡ᒀᅋ㝁潠ᖀᏀ㙁ᖀ⋀䙂㙁胰晀⍄✢␜ڀځ╘满◁䫑罠㟨驠Ԁᄀ蘺檀䡀ቨ掌晠杤慰晣䙁塠㡌ҥ窤ځ曠稡▤Ҥ⪠ᗁ籠⤠ހ躃鹠ᖐ㝀☠⍴柠ޕ㚀ᖀ䳱ځҭᒀᅊ㡀ᑠ蚀㙷齸ႦҢ醂ᆒҨҥԀႨҭڀዠᇵ㚿虭䩓ቩ苠ݢ㖱㝂㚂澃塠䦑蹠ڀጡ昕◠橠ᖐꃹҡቨ鲁Ҧ晢詠䩘ҫ仨ݣႡ䷢㙈Ҩ㹀☣剠㲀ᄡ皧陠◀䡀㝀㇉ᒀᅊ䛀■珂ݢҺᯀᑔ䩀᧰暠ᖀᖐᇰ◀晠栤ԕ㛀⎀䙂Ңᚱ竤ԗႠ■◆洄㙁艨ڀځ㱵㛀⎀䙂Ңᘑ竤ԗႠ■◃洄㙁艨ڀځ⠵㛀⎀䙂Ңᖱ竤ԗႠ■◞☜ҡ䩈ڮጬ㙀㚵ҭ䩟檞Ҡ硤ԗႠ■◛晦硬ዣҠ佢һ曠ᖀᖞ䙃佦㝑晠㫁ҭ蚠በተߜᯀ⦾ݠ替諀ᖑᓙ▬湠䙀䛊䃊ڀተ䙒ҩꔄ晢䙐Ұ䛍䣀㙀幨Ңᒋ㙂ᓀ満ተቮ碇Ҡ⪡ᣐႣ䙤Ң晰ݨ◰ቤ㛀□ᛀ䙀罨㛀ᴀԖႢ■詠槀㙁ҭᔙ⩀Ұڊځበ㝀ᘴԀ㙠ҥ湠躀ᓠ㙡Ҭ晠屢Ұߐ嵱扠Ⴀᘠᖐ䙂㙀熠ቢበڜ⪤ቢꙂ䙁㙀湤Ҵ㐻ꑉᕾᅑ䛃㨁▤Ҵⲻꑉᕾᅑ䛃㢃䙤Ҵ⢃仨⋃ꙁ开棲䟠䡀ቨ䟨晤屢ҰҰ䛍䡀⠏ꊥ裌በ㙀㚀䶀Ҡ麹Ҡ晢枩孽Ҡ䟀䛲ҡҥᓒ꜊䍀ڃԁ塠ႠⲨҢ⤠Ԁ普晠ޗ蹨ᨼ池枠孱ᄩҤڒҩ繨㺀កһݢᖀ硠㿰◰晪䙂䅁ᖈވ㤆硨♸ᖀ䙅䛞䃐䦆蚀Ⴀ㭈ᗮቼ㙂盄㠸ң噰蛠⢂䅶Ⴚ□䩀穳ᓑ繨皠កᐠ橺洠䧂ԉҵተ邖Ⴘ□亃⍂Ԁ杰Ҷ魡ᇿ湠ᖀႧ㝐Ⴄ㙠碀ԕ滠桮ተቭ䢛Ҡ䙁㙁䄈暆蚀ቭ梻Ҡ䙀䅁ҨҤҴ▫漸ᖈ杨䛄ᖔ檀䩑䡈䚁䪂ᓁ◀桤⡄㚂ҡҤ䜠䙄㙁湠溁⍖禱繨☣狶虠㚠㙐ҳ噰ԍ葢ᅟ㟀㚌⺤䙢䙁Ҩ晢屢ተݨҦ蚀Ⴀ⚤弴杢䅁Ҩڈ㤆硨♸ᖀ䙂䝁㐀柤Ԅ㇄煠ڬቨ㙁㚀洠䢂ұҩጠ邖Ⴌ■橠䩐䦑繨皠ዠႻݨᖀ䩐榲⎲䯀Ұ䡀ᑛ蚀㸲㹂ᙁ粤ዤҰݨԆ蚀䝀☠ڬበ㙁㚇ⵈ㙣噰ݠᘂ勊䛁⻀晤Ԅ㙑艨㺀ጡ麨陠⍠䛂Ҳᖈ鉤䩠Ⴐݰ䩍䦠㜁Ҩ晤杤孻ݪᖀ䡀㟰☠晤杨宀蚄繠Ⴄ䙀吜ቢꚣԀ牺誠䢀Ⴀ☠Ꭼቤ㙁■⍠䙂Ҳᗱ竢ዶႠ■溅洄▱繨ڀጢႻ曣ᖀ䩚ᘎҠ鉤◀ᄀ曭暤桠㝀⚤朴屢⪰ݨڈ㚆砐♀晤䙂䅁▨ڈ㛆确梧Ҡ㚄ҥ腠䙯颐ቩ栌橦䩀㙁湠䴀䚂ҹҠ鉤Ԁᇠ浺満䦠㙁ҭጸ邡Ⴛݠᖀ媀㟸◐晦桐浀ҭ暡በ䁈♸ᗈ䙃㙁皨ⵆ蚁杠⭀⇬የ㙁湠躀洃噱ݠ⋂☊㙁ᖑҡ寀△ꌬݢ䚫㝁⚠ᖀ㩑覱䙈ڂᒠݴݦᖀ䩑榱ҡዠ邉Ⴀ㐀虤Ԅ☣仠ݢ☊㫁ҭ蛀በ㝀ބᖀ嵣ᖐ߈ڈ㛆盠勠ᘂ䚪㡀ᑞ蚀湒㹂ᘁ粤ዤҰڊڀዠ䝈⭀ጰቨ㛂湠源▬䙁繨㺀ጡ钠陠⍠䛂ұҬ鉤ԀႰ߈ލ䦠㙡ҩደ邀ᄀ桺殀噣幸ݠᗀዩᆀ㐀衤ҢҲᗁ窀㙠ހ杺歠䙀䡁Ұ䙌⤠ᄀ湺櫠ޕ器ᨼ池枀寱ႩҤڂҩ繨◠ᖠһݠᖀ橱榱ҩዠ邉Ⴀ㐀虤ڄ☣仠ᘂ☊㫁ҭ蛀በ䝀♄ᖀ嵣ᖐႨݨ㚆睠㝄㜔䙃▩晢醀㙗齸Ⴄ朶䡂㡀■橠Ꮐ㙁繨◠ጡ⫵■亂⍂湰ߜᯀ䙂䛈䃈Ԉ㛆瞨■鑦ԀႰڊ䚀ᓰ㺁ҩቨ邡蒤陠ᖀ䩐榰暌晤枀孲Ң鍀ደቩ栌橢䩀䜮䫰ҥ癠ԂݠᏂ䊪䛀珠晤Ҵ㙑艨㺀ᄡ碥噠⍠䛂Ҫᖈ鉤䩠ݰҭ暥桠⚠ᛄ朴屢⪰ڈԈ㤆砐☠晢杨宀馂繠Ⴄ䙀勠Ꮒ囊㡀ᑖ䙠㸲㹂ᘁ粤ዤҰݨҥԀᇰ▰晤杸孰ڐ䡍䣐㙁艬ڀጡ◕■亁⍂湰ߜᯀ䙂㙀炠晦隐杠⚤♴桀汀Ҩڈ㛆盠勠ᘂ䚪㡀ᑚ蚀乒ҡ䙈㺂ᄀԀ蚀㻀ᓠ㚠⚠晢柠曂ұ蠀ᖘᖆ㙀桢䙀㩁Ҩ暤Ң晰㝘䁀䙀㙁㚀厦蚀Ⴀݠڐቨ㝀■氀Ң㙊ᖽ褴占һݣᖀበ⠈㠙窺Ҡ㛀椨ԁ孀△ꌠڐበ㝁皡ⵅԀႠⳄ㜔䡄㩁Ҩ晭塠㢈㝀晦䙀㙁ᖈ詠棠㙁ᖀ㲀ᒨႠ■ⵄҲҰ栜媠ᖠҰݺ洠䙄■厌Ҥ晢旰ڐ噰⬀ዸ㝁ቢ䙀㩁ᯈԄҤ⚃伀ᖀ乢▨暠ᇠ㟠罠◔Ꮒҫ┥湠ᛀ䟂ұҬ晠杼孴ݠᛀ䜁▸ԍ㑂ᅟ㟀㚈⺤䙲䙁ҭየ邡һݠᖀ婺諎Ҡ鉤㙠ᇡڍ蚠桠㽀ᙘᖸ䙃㙀⻀楤ԒҺᗡ竌በ㙁湠桨晠肀ᖉꕀᄈႢ◠橠㣀㙁ᖍተ杤◌☠伀橤◢ᖐ䜔ҫ㙀湠洠䚂ҩҬ鉤ԀԀ邂鹠ᓠ㙡Ҡ晢屢ҥ璠䙯顠⠈根Ҡ䝂㙀㚀⍠䛂Ңᖀ晢柠暞䊈ڈ㸴坰ᗬ鉤ᖠԀ晨ڈ㝇䝀ᗬ鉤ҫ婠朿諀ᖑᓙ▤湠䙀㩁ᒈ暨皤ቮ碇Ҡ枋䜼䣰ҢᕠڙҠ癤◂ᇢ杰◚滼Ңᘭᒑ⩀Ҩ㗀ᅄҲұ繨㚀ᄀһݡᖀ㡀㿰■晢乢Ұڊڀ桠⛠◀䚚ҫ䇀■◀㦠㙡ҡተ邀ހ杺歠䙂ҩ䙈ߖ条恰ڊځ橸ᖆ㙁㔤䡁䅁ҨҤҳ噰Ԍꔂᅟ㟀㚈⺤䙂䙁ҡዸ邡һݠᖀᖟ檾Ҡ鉤㹠ԁڍ蚡桠ቭ袓Ҡ屢ᖐҰ䝍䩜ᗦҠ䛈ҫ䕀暿諀ᖒᓙ▨湠䙂䛀瓠ᒄԂҩ繨亠ዠһݤᖀ䩚諎Ҡ鉤⫠ᄀ醃幠ᓠ㚁ҩተ遰䛀ᑊ晠䩂Ңᨱ㱚ԀԂ杰◀材罠ݠݢꏩ䛁䍄⤄䙄仈ݠҾ⤀ᣝ晨ҥԀႨݠጺҠ䛈䊐䛎誰䡁Ҥ聠ځ㙸皡唨皤Ⴀݠዠ襯ᣐҨԂᐰ麹Ҡ晢㙪ᣑ暠噀䩂Ңᖄ䙤䡁䣆晨Ԃ⏑ᑰ婠晢䙀◗⋂詠㛲幡Ҡ晠乢ዠ暼䩀㵤△漸ᖈ䙀㙀胨晤Ң晰㝄ᑤ屢ብ淠ڈበቨ㟨癤څ⋀■ᛀ䙂㙂㩴ڀҰᒅ椨Ԁ㸰㡁Ҡ癤ᖢނ榠ᖀᖐ榱䙈ݪⳀ㙀橡柁塀ҲݠᏂꋭዠ■ᖀ㩐䝀◡䲄ҭݥ晢詠ޒ㹁Ҩ晤乢ዠ藼䴀䚂ҡҥቢ颖Ⴂ■ᖀ㳢ҩ繨Ҷ䑀㙀■亀嶃噰㛀ڀᅊ㝀■ᛀ䚄▫漸ᖈ⤙ݠ蘨ҥԁႰᖑꕀႥ㙀㚅ⵅԀژ动ݢځ⭐Ұ䙮贒Ңᗽ⫶⤖ҰҨԈ㙗㟰▰晠䙁孰ڍ暠ޑ虡Ҥ癤㺁邩噠◀硠⠈須癤ԈႦᗀ虡坠Ⴀݠᑔ柟宀晨ԍ嵰绀ݠڀᄀႰ߄ᄁ圐ႠᖑڀҰᒅ椣虤Ҥ▫盨ݢԀԕ苢裠በᄠ■晢䙀㩁Ⴊځ杰■加ڀᄀҴݠᖀᏀ㚀晼㱐ԀҰڄጡ地Ⴀހᖀ䙁▪皠ᅂ噢Ң⍂㷀ԖႢ■ᖀ㦠㙀劔ڀԍҢ㚀璈㙗嚸晠晢䙀㩁ҨҥԀ䛀䉬㩀杠㙀䄈Ү㛰繡Ҡ聠ᗁᇸ瞢蟠በႠᛄ⎄屢ብ榠ᖀᏀ㙁Ҡ癤ᗪᣆ晨ҥԀႠᗀ勢ҫ⎠■ᛀ䙁発ԐҶҫᣀ■⍀䙂Ҩ曀㱖Ԁұ智櫠ደژ陠晢乢⫠麁鹠ᖑႠᛄ弴乢Ҵݣዠ噠纰ݠڐቤ䛼䊂螠በᄠ▱ቢ靫ᛀ■ᛀ䜄▫檌㩀䙀㩁ᒐ䙮蜑湡Ҡ晢柠灀Ҫڀዠቨ䋀Ԗ㝀Ҡᑂ䙄ҢҨ本Ҷ⚠㙀■䡆䙀纨ݠڀႰ㻀ᑂҤҢҨ更㱔ԀҰڈڂᅐ纘ݠڀᅊᣃ晨ҤҶ纸䉀晠杨孥栠ᖀᖗ榰劔ݥ磡瓏囑旽ꄧ麸婡ᛗ譇煙咃ꆗ▐终Ⴋ落踻買諚䌀ސ㹀ᖬ㸆㡁Ԁ蚀㹀ޝ滰⪠ҠҠҠڀҠڀҠᇥ荀鯔㙢苼瑎䫖験ᦑ礨䚲怙㼋鏭㱢駳牠ڈҰҥҠҢҠҠ牠Ҡ蟔悒膼㓄␆齣㟥録諅㙱䒈㖌綆ꃫ怹椸迄㙸㞜璭鶂ᒫ蟵浊髉嶓湼鋎䷷ᔡ㙀䙀⠀Ҡ■ҠᔠҠݰԀҪҠҪ虠ҡ㹀Ҡ湠㙀ᛀҠ╠ҠሰҠڈҰҥҠҨ䙀Ҡ晠Ҡ䩀■ᏀҠᗰҠڔҠڼҠҠҢҠҠң㙀㙀ݠҠᯆ㥣㿡笸铐忁垑罹匥鶇击矬蔬讕坸猹⍧ᒖ埱篵烌媗䁱㾌涌槓䠃Ⲙ鄢諃塼犹洧㲒ꈃ䯉謢飙㷱舼猅鶗㥙搭缲觅㷴荹咥趇㹀ᔰԀڎҠԅހҡ习ҠҠҠ圚䍙后␂ᔣ拡漲鳉墒湸疄╆凳挝眾鏅㷲荺Ⰾ䶖这忭楄跏㷹㾙鎎嶧㨉搭謦嗇嬚䁝劥貖ꈉ嬥焦視㽜璹⬇㲖䀁漬蔰诘㳘⦭᧦套䇓Ⱍ缲袎徙智䙢ҥ㙀ң㑀Ҡ㣀Ҡⴀ㝀ᏐҠᆎҠԀ晠Ҡ癠Ҡ㙀ҠᖀҠᆀҠᯗ䇛㰉輲闎㙳㺚召粣督㠍躼鋅嵴⡈╧硧䇓Ⱉ缪针㫗聻鐌祖刃䟕譊鎏㵱纼獍饗㥫䏥赈飙㷹苸豌鳷䦃篨茦闍㳘羸鋆覃瀫㟈餪覘㽙爸疎沲鈃搝罆厐㵙燬䰮嶆㾻堅檼飓Ҡҥڂҥ湠Ҡ㡀ҠᏀҠҠҠᅛ瀵赈規妒玸沆岣堡毸諊诅䅚㐍⬌禃熁茰霦岕園㼙⏆㲣堫㫽缲裒圙䒋鋍鶆俛琩沾駌嬑羫鐍鲢駳牠ҡᖂ■㦀Ҡᡐ㹀ԄҠԏ媗膹䰬綦榋瀵肾哃圙䀛豎䲖憫琱譒嗓徑爹鎎泧共忭蔺厑夑缭沧㧖䥑诵泐墓㷹缼疎␂迡弨苀嗓徑爼瑍糷染瀬ለተԋ晠ҩ䙀Ҡ湠ҡ詢■㰀ҠកҠڸҠငႨҵ虠Ҧ鹠Ҡ䡀Ҡ顡ᖀ⣠ҠᒐҠڞҠҠҠҥ鶇击矬蔬讕坸猹⍧ᒖ埱篵烌媗䁱㾌涌槓䠃Ⲙ鄢諃塼犹洧㲒ꈃ䯉謢飙㷱舼猅鶗㥙搭缲觅㷶船᧮䵰ҠበᰀڍҠҵ蛀Ҡ湠ҡ㤜鳁岔罳锎浧刂埵茯豩客釹鷎喖顁鈵䖊ꛒ⏈襺ޓ愝牸ꌇ䈀膏媗膹䰬綦榋瀵肾哃圙䀛豎䲖憫琱譒嗓徑爹鎎泧共忭蔺厑夑缭沧㧖䥑诵泐墓㷱䅛鋍夶㧫㿙煄厐㵛燬豎嶆㾻堅檼飓ҨႤҫ噠Ҥ㩀Ҡ⚠ҠᖁበᦐҠዠҠҳҠҤݢҥ繠Ң㹀Ҡ⦠Ҡበ杠ᑘҠڐҠҦ晠ҢځҢ鉠Ҡ屠ҠጠҠݠҠҰҠҤҠҢ䙀Ҡ癠Ҡ㱀Ҡ堐腻Ⰼ桦Ꮋ栱社钚䍺臽钬㵂枫ݡ蔼䚡㙰㧛鐬籢ᔳᦑ鄪鏅崗苾䩌㴆觛⻅輲闎㙷翨ᖌ䷷䥫狡猢迌夒Ꮐҿ隡Ҡ穠Ҡ㩅■ᔀҠ⍦煳濥譒嗓悒⩜钬奖⥣堝沼飓䁂橠ᒀҠጨᖀҲҠԖ䂘璬㵧濛琱溾駒執艸吭㱶膫忼荄馼ᏈҧҠҤ噰Ҡ摠Ҡ呢橠ᔀҠዸ■ԜҠҦҠҡ晠Ҡ㙀ҠⳀҠበҠݠҠҰҠҮҠң虠ҡҠҠ■Ҡ■ҠዠҠڀҠҰҠҢҠҢ䙀Ҡ牠Ҡ㩀ҠႠҠڀҠڔҠҶҠҥ虠ҡ䙀ҠҠҠݠҠᒀҠᓣ䯉謢飙㷰腻㐬套䇓Ⱍ謢鶿憒缫璮岖⦣ᣍ祈龀帛㾜猭浗幠Ҡ湬㙀☠ҠႠ蝠ကҠҪበҢ晠Ҭ㡆姛瀕楈髉嶓湽㒌㳗䝃䯵蜸词夗䍘哭㴶靣濵轊风夒▸吤ᴗ㧓搩缲裒圙䒋銍洦ꆹ搭謦嗆崚⦼瓀◐因ڠҠڕႠҧҠҡ蹠ҠҠҠݠҠᕀҠᓋ忱煐䚯愚▻錤ᰆꉋ忱賔䚴媒湻Ⰽ衦燹ݡ歊骀悔㾈ⴍ貦刡ᇥ負Ҡ董ᖀᖀҠ⎀㺀ԄҠԖ纽⬭ᴗ㽉魔ꅢ駓夙䍚呍衦奫䯱焨悀噴䅙匮桢ᔓ䯝睈俀ᛐ▻Ⰼ趣督ᆀ繴䚲嬓聽␄ᯆሑҠҠ⤇■ᴀҠጠ廠ڈҠԖᔈңҠҤ㙸晠ᯀҠ噠Ҡᅀ靠߈Ҡڈ⎰ҩҠҦ蛑Ҡ噠Ҡ蹧■ڀҠᔢҠᐰ⫠ҠҠԃဂҠ㙀Ҡ蝐嚐㹘牬汦奣䟁笠鋀嶐䉘㒌䱆㥓✱欬裈垕㻛⬍貇ᒓ濱木裄墒㿙Ⳍ洆䦣㟹潀諒妐㿘猬泆妓䟙第鋆嶓䉙璭ᯆ楳䟑眬軈媕䁛ⳍ賧ᓃ瀉朴裊墕㿚獭䳦秃候筀郒岐䅘珬洦姃䟱笸鋌嶖䉛㒍豦饳忱茬铈嶕䇛㐍赇ᓳ瀡杀裐墘㿜Ⳏ⍇ᓣ栙蝀雒徐䋘璬涆姳䠉筄鋒嶙䉜璼犍賖佣琱楄骀嬗㽙啤ቦꉋ盡蔬䚲圗䀙䩌赗㝃琑礦讀帓▻Ⰽ賗䦁Ҡߔ▰ҩҠү曡ҡ■Ҡ鋉垙㺜疅鲖ꈳ㫽资規怖䂘錅鳶馃㰠荄饠繤ᖀᕠҠᇠҠҪҠԙ㺛獌硦凓㛁礼諅扰幢በႠҠሰ㙠ԂҠԌႢҡ鹠ҡ㡀ҠᏀҠ㒭泶䅩ᇥ茨诘㙹荸咮涒ᒋ盠朤鯔㙲臹㒤ᯗ䝀ڀ㡠ҶҠҩ枂Ҡ蹠Ң虰㙀㗀Ҡ⦠ҠԈҠݪ飒帙Ҿ螎⏆ꇃ篭煄饢ᖶ㺛獎籶憈ᖑ䬪駔Ҧ䉜瑌岷䇛㯐脤齣ᐹ䎜铬堳✑缤苀䙨妒玸沆岣堡߈蛄墍㹚熬䵅㚧慫堩酆ᰐ㵘璫污淖⦻嬕欲铄娒臤汥覂頡滠益徘䉙羸勌㣟";

const wasmBinary = base32768.decode(base32768WASM);

scryptPromise = WebAssembly.instantiate(wasmBinary, {}).then(instantiatedModule => {
  const wasm = instantiatedModule.instance.exports;

  
  let WASM_VECTOR_LEN = 0;
  
  let cachedUint8Memory0 = new Uint8Array();
  
  function getUint8Memory0() {
      if (cachedUint8Memory0.byteLength === 0) {
          cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
      }
      return cachedUint8Memory0;
  }
  
  const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
  
  let cachedTextEncoder = new lTextEncoder('utf-8');
  
  const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
      ? function (arg, view) {
      return cachedTextEncoder.encodeInto(arg, view);
  }
      : function (arg, view) {
      const buf = cachedTextEncoder.encode(arg);
      view.set(buf);
      return {
          read: arg.length,
          written: buf.length
      };
  });
  
  function passStringToWasm0(arg, malloc, realloc) {
  
      if (realloc === undefined) {
          const buf = cachedTextEncoder.encode(arg);
          const ptr = malloc(buf.length);
          getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
          WASM_VECTOR_LEN = buf.length;
          return ptr;
      }
  
      let len = arg.length;
      let ptr = malloc(len);
  
      const mem = getUint8Memory0();
  
      let offset = 0;
  
      for (; offset < len; offset++) {
          const code = arg.charCodeAt(offset);
          if (code > 0x7F) break;
          mem[ptr + offset] = code;
      }
  
      if (offset !== len) {
          if (offset !== 0) {
              arg = arg.slice(offset);
          }
          ptr = realloc(ptr, len, len = offset + arg.length * 3);
          const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
          const ret = encodeString(arg, view);
  
          offset += ret.written;
      }
  
      WASM_VECTOR_LEN = offset;
      return ptr;
  }
  
  let cachedInt32Memory0 = new Int32Array();
  
  function getInt32Memory0() {
      if (cachedInt32Memory0.byteLength === 0) {
          cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
      }
      return cachedInt32Memory0;
  }
  
  const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
  
  let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });
  
  cachedTextDecoder.decode();
  
  function getStringFromWasm0(ptr, len) {
      return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
  }
  /**
  * @param {string} password
  * @param {string} salt
  * @param {number} n
  * @param {number} r
  * @param {number} p
  * @param {number} dklen
  * @returns {string}
  */
  scrypt = function(password, salt, n, r, p, dklen) {
      try {
          const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
          const ptr0 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          const len0 = WASM_VECTOR_LEN;
          const ptr1 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          const len1 = WASM_VECTOR_LEN;
          wasm.scrypt(retptr, ptr0, len0, ptr1, len1, n, r, p, dklen);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
      } finally {
          wasm.__wbindgen_add_to_stack_pointer(16);
          wasm.__wbindgen_free(r0, r1);
      }
  }
  
  /**
  * @param {number} start
  * @param {number} end
  * @param {number} difficulty
  * @param {string} salt
  * @param {number} n
  * @param {number} r
  * @param {number} p
  * @param {number} dklen
  * @returns {string}
  */
  mine = function(start, end, difficulty, salt, n, r, p, dklen) {
      try {
          const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
          const ptr0 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          const len0 = WASM_VECTOR_LEN;
          wasm.mine(retptr, start, end, difficulty, ptr0, len0, n, r, p, dklen);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
      } finally {
          wasm.__wbindgen_add_to_stack_pointer(16);
          wasm.__wbindgen_free(r0, r1);
      }
  }
  
  
});
