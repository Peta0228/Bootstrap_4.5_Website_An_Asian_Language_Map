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








function language_info(country) {

    document.getElementById('country').innerHTML = country

    //todo: percentage

    switch (country) {
        case 'timor-leste':
            helper_lang_adder(['Tetun Prasa', 'Mambai', 'Makasai', 'Tetun Terik', 'Baikenu'], [Tetun_Prasa, Mambai, Makasai, Tetun_Terik, Baikenu])
            break;
        case 'indonesia':
            helper_lang_adder(['Bahasa Indonesia', 'English', 'Dutch', 'Jarvanese'], [Bahasa_Indonesia, English, Dutch, Jarvanese])
            break;
        case 'singapore':
            helper_lang_adder(['English', 'Mandarin', 'Hokkien', 'Cantonese', 'Teochew'], [English, Mandarin, Hokkien, Cantonese, Teochew])
            break;
        case 'brunei':
            helper_lang_adder(['Malay', 'English'], [Malay, English])
            break;
        case 'malaysia':
            helper_lang_adder(['Bahasa Malaysia', 'Chinese'], [Bahasa_Malaysia, Chinese])
            break;
        case 'philippines':
            helper_lang_adder(['Filipino', 'English'], [Filipino, English])
            break;
        case 'vietnam':
            helper_lang_adder(['Vietnamese', 'English', 'French', 'Chinese'], [Vietnamese, English, French, Chinese])
            break;
        case 'cambodia':
            helper_lang_adder(['Khmer'], [Khmer])
            break;
        case 'laos':
            helper_lang_adder(['Lao', 'French', 'English'], [Lao, French, English])
            break;
        case 'thailand':
            helper_lang_adder(['Thai', 'English'], [Thai, English])
            break;
        case 'myanmar':
            helper_lang_adder(['Burmese'], [Burmese])
            break;
        case 'bangladesh':
            helper_lang_adder(['Bangla'], [Bangla])
            break;
        case 'china':
            helper_lang_adder(['Mandarin', 'Yue', 'Wu', 'Minbei', 'Minnan'], [[Mandarin, Yue, Wu, Minbei, Minnan])
            break;
        case 'india':
            helper_lang_adder([], [])
            break;
        case 'bhutan':
            helper_lang_adder([], [])
            break;
        case 'maldives':
            helper_lang_adder([], [])
            break;
        case 'nepal':
            helper_lang_adder([], [])
            break;
        case 'sri lanka':
            helper_lang_adder([], [])
            break;
        case 'japan':
            helper_lang_adder([], [])
            break;
        case 'south korea':
            helper_lang_adder([], [])
            break;
        case 'north korea':
            helper_lang_adder([], [])
            break;
        case 'mongolia':
            helper_lang_adder([], [])
            break;
        case 'pakistan':
            helper_lang_adder([], [])
            break;
        case 'afghanistan':
            helper_lang_adder([], [])
            break;
        case 'tajikistan':
            helper_lang_adder([], [])
            break;
        case 'kyrgyzstan':
            helper_lang_adder([], [])
            break;
        case 'uzbekistan':
            helper_lang_adder([], [])
            break;
        case 'turkmenistan':
            helper_lang_adder([], [])
            break;
        case 'iran':
            helper_lang_adder([], [])
            break;
        case 'kazakhstan':
            helper_lang_adder([], [])
            break;
        case 'yemen':
            helper_lang_adder([], [])
            break;
        case 'oman':
            helper_lang_adder([], [])
            break;
        case 'UAE':
            helper_lang_adder([], [])
            break;
        case 'qatar':
            helper_lang_adder([], [])
            break;
        case 'bahrain':
            helper_lang_adder([], [])
            break;
        case 'saudi arabia':
            helper_lang_adder([], [])
            break;
        case 'kuwait':
            helper_lang_adder([], [])
            break;
        case 'iraq':
            helper_lang_adder([], [])
            break;
        case 'palestanian terr':
            helper_lang_adder([], [])
            break;
        case 'jordan':
            dhelper_lang_adder([], [])
            break;
        case 'isarel':
            helper_lang_adder([], [])
            break;
        case 'lebanon':
            helper_lang_adder([], [])
            break;
        case 'syria':
            helper_lang_adder([], [])
            break;
        case 'turkey':
            helper_lang_adder([], [])
            break;
        case 'armenia':
            helper_lang_adder([], [])
            break;
        case 'georgia':
            helper_lang_adder([], [])
            break;
        case 'azerbaijan':
            helper_lang_adder([], [])
            break;
        case 'russia':
            helper_lang_adder([], [])
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

    // todo: fill lists with 5 elements

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
        console.log('waht?')
        document.getElementById('lang_5').classList.remove('invisible')
    }
    else if (!document.getElementById('lang_5').classList.contains('invisible')) {
        document.getElementById('lang_5').classList.add('invisible')
    }
}