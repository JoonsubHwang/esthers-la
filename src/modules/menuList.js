import {ReactComponent as UpArrow} from '../images/up-arrow.svg';
import {ReactComponent as Event} from '../images/event.svg';
import {ReactComponent as Megaphone} from '../images/megaphone.svg';
import {ReactComponent as Armor} from '../images/armor.svg';
import {ReactComponent as Seal} from '../images/seal.svg';
import {ReactComponent as Rune} from '../images/rune.svg';
import {ReactComponent as Card} from '../images/card.svg';
import {ReactComponent as Math} from '../images/math.svg';
import {ReactComponent as AI} from '../images/ai.svg';

export const menuList = [
    {
        name: 'News',
        url: '/news',
        submenus: [
            {
                name: 'Updates',
                url: '/news/updates',
                icon: <UpArrow />
            },
            {
                name: 'Events',
                url: '/news/events',
                icon: <Event />
            },
            {
                name: 'Notices',
                url: '/news/notices',
                icon: <Megaphone />
            }
        ]
    },
    {
        name: 'Library',
        url: '/library',
        submenus: [
            {
                name: 'Equip\'s',
                url: '/library/equipments',
                icon: <Armor />
            },
            {
                name: 'Seals',
                url: '/library/seals',
                icon: <Seal />
            },
            {
                name: 'Runes',
                url: '/library/runes',
                icon: <Rune />
            },
            {
                name: 'Cards',
                url: '/library/cards',
                icon: <Card />
            }
        ]
    },
    {
        name: 'Tools',
        url: '/tools',
        submenus: [
            {
                name: 'SealCalc',
                url: '/tools/seal-calc',
                icon: <Math />
            },
            {
                name: 'CarvAI',
                url: '/tools/carv-ai',
                icon: <AI />
            }
        ]
    }
];