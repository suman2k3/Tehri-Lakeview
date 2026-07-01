// Import all image files from assets
import logoImg from '../assets/images/logo/logo.png';
import dividerImg from '../assets/images/divider.png';
import heroBg from '../assets/images/hero/hero_bg.png';
import subpageHero from '../assets/images/hero/subpage_hero.png';
import aboutBg from '../assets/images/hero/about_bg.jpg';
import contactBg from '../assets/images/hero/contact_bg.png';
import cottageInt from '../assets/images/cottages/cottage_interior.jpg';
import cottageExt from '../assets/images/cottages/cottage_exterior.png';
import roomInt1 from '../assets/images/rooms/room_interior_1.jpg';
import roomInt2 from '../assets/images/rooms/room_interior_2.jpg';
import diningBg from '../assets/images/food/dining_bg.jpg';
import menu1 from '../assets/images/food/menu_1.jpg';
import menu2 from '../assets/images/food/menu_2.jpg';
import boating from '../assets/images/activities/boating.png';
import adventure from '../assets/images/activities/adventure.jpg';
import dobraChantiBridge from '../assets/images/lake/dobra_chanti_bridge.jpg';
import tehriDamViewpoint from '../assets/images/lake/tehri_dam_viewpoint.jpg';
import kodiaJungle from '../assets/images/lake/kodia_jungle.jpg';
import familyView from '../assets/images/family/family_view.jpg';

import gallery1 from '../assets/images/gallery/gallery_1.png';
import gallery2 from '../assets/images/gallery/gallery_2.jpg';
import gallery3 from '../assets/images/gallery/gallery_3.jpg';
import gallery4 from '../assets/images/gallery/gallery_4.jpg';

export const images = {
  logo: {
    main: logoImg,
    divider: dividerImg,
  },
  hero: {
    bg: heroBg,
    subpageBg: subpageHero,
    about: aboutBg,
    contact: contactBg,
  },
  rooms: {
    deluxe: roomInt1,
    premium: roomInt2,
    suite: cottageInt,
    executive: roomInt1,
  },
  cottages: {
    exterior: cottageExt,
    interior: cottageInt,
  },
  gallery: [
    { src: gallery1, category: 'exterior', caption: 'Scenic Sunrise over the Cottages' },
    { src: gallery2, category: 'interior', caption: 'Cozy A-frame Cottage Loft view' },
    { src: gallery3, category: 'rooms', caption: 'Premium Lakeview Room Interior' },
    { src: gallery4, category: 'rooms', caption: 'Luxury Suite Bedroom Setting' },
  ],
  food: {
    diningBg: diningBg,
    menu1: menu1,
    menu2: menu2,
  },
  activities: {
    boating: boating,
    adventure: adventure,
  },
  lake: {
    sunrise: dobraChantiBridge,
    viewpoint: tehriDamViewpoint,
    jungle: kodiaJungle,
  },
  family: {
    group: familyView,
  }
};
