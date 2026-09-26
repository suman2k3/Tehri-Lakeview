// Import all image files from assets
import logoImg from '../assets/images/logo/logo.png';
import dividerImg from '../assets/images/divider.png';
import heroBg from '../assets/images/hero/hero_bg.jpg';
import heroBg2 from '../assets/images/hero/hero_bg_2.jpg';
import heroBg2Mobile from '../assets/images/hero/hero_bg_2_mobile.jpg';
import heroBg3 from '../assets/images/hero/hero_bg_3.png';
import heroBg3Mobile from '../assets/images/hero/hero_bg_3_mobile.jpg';
import heroBg4 from '../assets/images/hero/hero_bg_4.jpg';
import heroBg4Mobile from '../assets/images/hero/hero_bg_4_mobile.png';
import heroBg5 from '../assets/images/hero/hero_bg_5.jpg';
import subpageHero from '../assets/images/hero/subpage_hero.png';
import aboutBg from '../assets/images/hero/about_bg.jpg';
import contactBg from '../assets/images/hero/contact_bg.png';
import legalBg from '../assets/images/legal_hero.png';
import cottageInt from '../assets/images/cottages/cottage_interior.jpg';
import cottageExt from '../assets/images/cottages/cottage_exterior.png';
import cottageExtNight from '../assets/images/cottages/cottage_exterior_night.png';
import roomInt1 from '../assets/images/rooms/room_interior_1.jpg';
import roomDeluxe from '../assets/images/rooms/room_deluxe.jpg';
import roomEconomy from '../assets/images/rooms/room_economy.jpg';
import suiteHome from '../assets/images/rooms/suite_home.jpg';
import menuPdf from '../assets/Explore menu.pdf';
import beverageMenu from '../assets/images/food/beverage_menu.jpg';
import himalayanCurry from '../assets/images/food/himalayan_curry.jpg';
import diningBg from '../assets/images/food/dining_bg.jpg';
import diningBuffet from '../assets/images/food/dining_buffet.jpg';
import diningHall from '../assets/images/food/dining_hall.jpg';
import diningView from '../assets/images/food/dining_view.jpg';
import freshTasteTerrace from '../assets/images/food/fresh_taste_terrace.jpg';
import menu1 from '../assets/images/food/menu_1.jpg';
import menu2 from '../assets/images/food/menu_2.jpg';
import boating from '../assets/images/activities/boating.png';
import adventure from '../assets/images/activities/adventure.jpg';
import paragliding from '../assets/images/lake/paragliding.png';
import waterSports from '../assets/images/lake/water_sports.jpg';
import dobraChantiBridge from '../assets/images/lake/dobra_chanti_bridge.jpg';
import tehriDamViewpoint from '../assets/images/lake/tehri_dam_viewpoint.jpg';
import kodiaJungle from '../assets/images/lake/kodia_jungle.jpg';
import surkandaDevi from '../assets/images/lake/surkanda_devi.png';
import tehriLake from '../assets/images/lake/tehri_lake.png';
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
    bg2: heroBg2,
    bg2Mobile: heroBg2Mobile,
    bg4: heroBg4,
    bg4Mobile: heroBg4Mobile,
    bg3: heroBg3,
    bg3Mobile: heroBg3Mobile,
    bg5: heroBg5,
    subpageBg: subpageHero,
    about: aboutBg,
    contact: contactBg,
    legal: legalBg,
  },
  rooms: {
    deluxe: roomDeluxe,
    premium: roomEconomy,
    suite: cottageInt,
    suiteHome: suiteHome,
    executive: roomInt1,
  },
  cottages: {
    exterior: cottageExt,
    exteriorNight: cottageExtNight,
    interior: cottageInt,
  },
  gallery: [
    { src: gallery1, category: 'exterior', caption: 'Scenic Sunrise over the Cottages' },
    { src: gallery2, category: 'interior', caption: 'Cozy Wooden Cottage Loft view' },
    { src: gallery3, category: 'rooms', caption: 'Premium Lakeview Room Interior' },
    { src: gallery4, category: 'rooms', caption: 'Luxury Suite Bedroom Setting' },
  ],
  food: {
    diningBg: diningBg,
    buffet: diningBuffet,
    freshTaste1: diningHall,
    freshTaste2: freshTasteTerrace,
    freshTaste3: diningView,
    himalayanTaste1: beverageMenu,
    himalayanTaste2: himalayanCurry,
    menu1: menu1,
    menu2: menu2,
    menuPdf: menuPdf,
  },
  activities: {
    boating: boating,
    adventure: adventure,
  },
  lake: {
    sunrise: dobraChantiBridge,
    viewpoint: tehriDamViewpoint,
    jungle: kodiaJungle,
    surkandaDevi: surkandaDevi,
    tehriLake: tehriLake,
    waterSports: waterSports,
    paragliding: paragliding,
  },
  family: {
    group: familyView,
  }
};
