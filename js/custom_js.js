var Bahasa_Indonesia = ''
var English = ''
var Dutch = ''
var Jarvanese = ''
var Tetun_Prasa = ''
var Mambai = ''
var Makasai = ''
var Tetun_Terik = ''
var Baikenu = ''
var Mandarin = ''
var Hokkien = ''
var Cantonese = ''
var Teochew = ''
var Malay = ''
var Bahasa_Malaysia = ''
var Chinese = ''
var Filipino = ''
var Vietnamese = ''
var French = ''
var Khmer = ''
var Lao = ''
var Thai = ''
var Burmese = ''
var Bangla = ''
var Yue = ''
var Wu = ''
var Minbei = ''
var Minnan = ''
var Hindi = ''
var Bengali = ''
var Marathi = ''
var Telugu = ''
var Sharchhopka = ''
var Dzongkha = ''
var Lhotshamkha = ''
var Dhivehi = ''
var Nepali = ''
var Maithali = ''
var Bhojpuri = ''
var Sinhala = ''
var Tamil = ''
var Japanese = ''
var Korean = ''
var Mongolian = ''
var Turkic = ''
var Russian = ''
var Punjabi = ''
var Sindhi = ''
var Saraiki = ''
var Dari = ''
var Pashto = ''
var Tajik = ''
var Uzbek = ''
var Kyrgyz = ''
var Turkmen = ''
var Persian_Fars = ''
var Azeri = ''
var Kazakh = ''
var Arabic =''
var Kurdish = ''
var Hebrew = ''
var Arabic = ''
var Armenian = ''
var Turkish = ''
var Georgian = ''
var Azerbaijani = ''
var Tatar = ''




function language_info(country) {

    document.getElementById('country').innerHTML = country

    //todo: percentage

    switch (country) {
        case 'timor-leste':
            helper_lang_adder(['Tetun Prasa (30.6%)', 'Mambai (16.6%)', 'Makasai (10.5%)', 'Tetun Terik (6.1%)', 'Baikenu (5.9%)'], [Tetun_Prasa, Mambai, Makasai, Tetun_Terik, Baikenu])
            break;
        case 'indonesia':
            helper_lang_adder(['Bahasa Indonesia (official)', 'English', 'Dutch', 'Jarvanese'], [Bahasa_Indonesia, English, Dutch, Jarvanese])
            break;
        case 'singapore':
            helper_lang_adder(['English (36.9%)', 'Mandarin (34.9%)', 'Hokkien', 'Cantonese', 'Teochew'], [English, Mandarin, Hokkien, Cantonese, Teochew])
            break;
        case 'brunei':
            helper_lang_adder(['Malay (official)', 'English'], [Malay, English])
            break;
        case 'malaysia':
            helper_lang_adder(['Bahasa Malaysia (official)', 'Chinese (dialects)'], [Bahasa_Malaysia, Chinese])
            break;
        case 'philippines':
            helper_lang_adder(['Filipino (official)', 'English (official)'], [Filipino, English])
            break;
        case 'vietnam':
            helper_lang_adder(['Vietnamese (official)', 'English', 'French', 'Chinese'], [Vietnamese, English, French, Chinese])
            break;
        case 'cambodia':
            helper_lang_adder(['Khmer (96.3%)'], [Khmer])
            break;
        case 'laos':
            helper_lang_adder(['Lao (official)', 'French', 'English'], [Lao, French, English])
            break;
        case 'thailand':
            helper_lang_adder(['Thai (official 90.7%)', 'English (langauge of the elite)'], [Thai, English])
            break;
        case 'myanmar':
            helper_lang_adder(['Burmese (official)'], [Burmese])
            break;
        case 'bangladesh':
            helper_lang_adder(['Bangla (official 98.8%)'], [Bangla])
            break;
        case 'china':
            helper_lang_adder(['Mandarin (official)', 'Yue', 'Wu', 'Minbei', 'Minnan'], [Mandarin, Yue, Wu, Minbei, Minnan])
            break;
        case 'india':
            helper_lang_adder(['English (official)', 'Hindi (43.6%)', 'Bengali (8%)', 'Marathi (6.9%)', 'Telugu (6.7%)'], [English, Hindi, Bengali, Marathi, Telugu])
            break;
        case 'bhutan':
            helper_lang_adder(['Sharchhopka (28%)', 'Dzongkha (official 24%)', 'Lhotshamkha (22%)'], [Sharchhopka, Dzongkha, Lhotshamkha])
            break;
        case 'maldives':
            helper_lang_adder(['Dhivehi (official)', 'English (goverment)'], [Dhivehi, English])
            break;
        case 'nepal':
            helper_lang_adder(['Nepali (official 44.6%)', 'Maithali (11.7%)', 'Bhojpuri (6%)'], [Nepali, Maithali, Bhojpuri])
            break;
        case 'sri lanka':
            helper_lang_adder(['Sinhala (official 87%)', 'Tamil (official 28.5)', 'English (23.8%)'], [Sinhala, Tamil, English])
            break;
        case 'japan':
            helper_lang_adder(['Japanese'], [Japanese])
            break;
        case 'south korea':
            helper_lang_adder(['Korean', 'English (widely taught in school)'], [Korean, English])
            break;
        case 'north korea':
            helper_lang_adder(['Korean'], [Korean])
            break;
        case 'mongolia':
            helper_lang_adder(['Mongolian (official 90%)', 'Turkic', 'Russian'], [Mongolian, Turkic, Russian])
            break;
        case 'pakistan':
            helper_lang_adder(['Punjabi (48%)', 'Sindhi (12%)', 'Saraiki (10%)'], [Punjabi, Sindhi, Saraiki])
            break;
        case 'afghanistan':
            helper_lang_adder(['Dari (official 77%)', 'Pashto (official 48%)'], [Dari, Pashto])
            break;
        case 'tajikistan':
            helper_lang_adder(['Tajikm (official 84.4%)', 'Uzbek (11.9%)'], [Tajikm, Uzbek])
            break;
        case 'kyrgyzstan':
            helper_lang_adder(['Kyrgyz (official 71.4%)', 'Uzbek (14.4%)', 'Russian (official 9%)'], [Kyrgyz, Uzbek, Russian])
            break;
        case 'uzbekistan':
            helper_lang_adder(['Uzbek (official 74.3%)', 'Russian (14.2%)', 'Tajik (4.4%)'], [Uzbek, Russian, Tajik])
            break;
        case 'turkmenistan':
            helper_lang_adder(['Turkmen (official 72%)', 'Russian (12%)', 'Uzbek (9%)'], [Turkmen, Russian, Uzbek])
            break;
        case 'iran':
            helper_lang_adder(['Persian Fars (official)', 'Azeri'], [Persian_Fars, Azeri])
            break;
        case 'kazakhstan':
            helper_lang_adder(['Kazakh (official 83.1%)', 'Russian (official 94.4%)'], [Kazakh, Russian])
            break;
        case 'yemen':
            helper_lang_adder(['Arabic (official)'], [Arabic])
            break;
        case 'oman':
            helper_lang_adder(['Arabic (official)', 'English'], [Arabic, English])
            break;
        case 'UAE':
            helper_lang_adder(['Arabic (official)', 'English', 'Hindi'], [Arabic, English, Hindi])
            break;
        case 'qatar':
            helper_lang_adder(['Arabic (official)', 'English (commonly used)'], [Arabic, English])
            break;
        case 'bahrain':
            helper_lang_adder(['Arabic (official)', 'English'], [Arabic, English])
            break;
        case 'saudi arabia':
            helper_lang_adder(['Arabic (official)'], [Arabic])
            break;
        case 'kuwait':
            helper_lang_adder(['Arabic (official)', 'English (widely spoken)'], [Arabic, English])
            break;
        case 'iraq':
            helper_lang_adder(['Arabic (official)', 'Kurdish (official)'], [Arabic, Kurdish])
            break;
        case 'palestanian terr':
            helper_lang_adder(['Arabic', 'Hebrew'], [Arabic, Hebrew])
            break;
        case 'jordan':
            dhelper_lang_adder(['Arabic (official)', 'English (widely understood among upper and middle classes)'], [Arabic, English])
            break;
        case 'israel':
            helper_lang_adder(['Hebrew (official)', 'Arabic(special status under Israeli law)'], [Hebrew, Arabic])
            break;
        case 'lebanon':
            helper_lang_adder(['Arabic (official)', 'French', 'English'], [Arabic, French, English])
            break;
        case 'syria':
            helper_lang_adder(['Arabic (officail)', 'Kurdish', 'Armenian'], [Arabic, Kurdish, Armenian])
            break;
        case 'turkey':
            helper_lang_adder(['Turkish (official)', 'Kurdish'], [Turkish, Kurdish])
            break;
        case 'armenia':
            helper_lang_adder(['Armenian (official 97.9%)', 'Kurdish (spoken by Yezidi minority 1%)'], [Armenian. Kurdish])
            break;
        case 'georgia':
            helper_lang_adder(['Georgian (official 87.6%)', 'Azeri (6.2%)'], [Georgian, Azeri])
            break;
        case 'azerbaijan':
            helper_lang_adder(['Azerbaijani (official 92.5%)'], [Azerbaijani])
            break;
        case 'russia':
            helper_lang_adder(['Russian (85.7%)', 'Tatar (3.2%)'], [Russian, Tatar])
            break;
        default:
            break;
    }
    helper_lang_visibility()
}

function helper_lang_adder(langs, lang_infos) {
    var lang_1 = document.getElementById('lang_1')
    var lang_2 = document.getElementById('lang_2')
    var lang_3 = document.getElementById('lang_3')
    var lang_4 = document.getElementById('lang_4')
    var lang_5 = document.getElementById('lang_5')

    var lang_1_info = document.getElementById('lang_1_info')
    var lang_2_info = document.getElementById('lang_2_info')
    var lang_3_info = document.getElementById('lang_3_info')
    var lang_4_info = document.getElementById('lang_4_info')
    var lang_5_info = document.getElementById('lang_5_info')

    while (langs.length < 5) {
        langs.push('')
    }

    while (lang_infos.length < 5) {
        lang_infos.push('')
    }

    lang_1.innerHTML = langs[0]
    lang_2.innerHTML = langs[1]
    lang_3.innerHTML = langs[2]
    lang_4.innerHTML = langs[3]
    lang_5.innerHTML = langs[4]

    lang_1_info.innerHTML = lang_infos[0]
    lang_2_info.innerHTML = lang_infos[1]
    lang_3_info.innerHTML = lang_infos[2]
    lang_4_info.innerHTML = lang_infos[3]
    lang_5_info.innerHTML = lang_infos[4]

}

function helper_lang_visibility() {

    if (document.getElementById('lang_1').innerHTML != '') {
        document.getElementById('lang_1').classList.remove('invisible')
    }
    else if (!document.getElementById('lang_1').classList.contains('invisible')) {
        document.getElementById('lang_1').classList.add('invisible')
    }

    if (document.getElementById('lang_2').innerHTML != '') {
        document.getElementById('lang_2').classList.remove('invisible')
    }
    else if (!document.getElementById('lang_2').classList.contains('invisible')) {
        document.getElementById('lang_2').classList.add('invisible')
    }

    if (document.getElementById('lang_3').innerHTML != '') {
        document.getElementById('lang_3').classList.remove('invisible')
    }
    else if (!document.getElementById('lang_3').classList.contains('invisible')) {
        document.getElementById('lang_3').classList.add('invisible')
    }

    if (document.getElementById('lang_4').innerHTML != '') {
        document.getElementById('lang_4').classList.remove('invisible')
    }
    else if (!document.getElementById('lang_4').classList.contains('invisible')) {
        document.getElementById('lang_4').classList.add('invisible')
    }

    if (document.getElementById('lang_5').innerHTML != '') {
        document.getElementById('lang_5').classList.remove('invisible')
    }
    else if (!document.getElementById('lang_5').classList.contains('invisible')) {
        document.getElementById('lang_5').classList.add('invisible')
    }
}