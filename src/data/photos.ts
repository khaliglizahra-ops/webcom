// Photos from Unsplash under the Unsplash License (free for commercial use,
// no attribution required). Only images.unsplash.com "photo-" images are used;
// Unsplash+ (paid) images are not. Served from Unsplash's CDN.
// https://unsplash.com/license

const ids = {
    bakery: 'photo-1579005007697-75b2fe2c88e7',       // woman at a bakery counter
    shopDoor: 'photo-1687422808191-93810cd07ab0',     // shop owner at his door
    barista: 'photo-1507914372368-b2b085b925a1',      // smiling barista at the till
    cafeOwner: 'photo-1753351052363-53ce102830eb',    // café owner, arms crossed
    flowerShop: 'photo-1777138203981-8513ee875cd4',   // flower shop entrance
    barber: 'photo-1605497788044-5a32c7078486',       // barber at work
    florist: 'photo-1642751652611-bb9a7cad58a3',      // florist arranging flowers
    boutique: 'photo-1753161029353-f6bb0ff2ad3c',     // clothing shop, stock on a tablet
    salonDesk: 'photo-1556740758-90de374c12ad',       // booking on a tablet at a salon desk
    baristaPour: 'photo-1555953348-ab36203d4cad',     // barista pouring milk
} as const;

export type PhotoKey = keyof typeof ids;

export const photo = (key: PhotoKey, width = 1200) =>
    `https://images.unsplash.com/${ids[key]}?auto=format&fit=crop&w=${width}&q=75`;

/** Photo per service, in the same order as servicesMenu s1..s6 */
export const servicePhotos: PhotoKey[] = ['cafeOwner', 'flowerShop', 'barber', 'florist', 'boutique', 'salonDesk'];
