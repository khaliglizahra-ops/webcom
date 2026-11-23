// Client projects shown in the work section.
// Text (type, place, description, tags) lives in i18n under `work.items.<id>`.
export interface Project {
    id: string;
    name: string;
    url: string;
    image: string;
    /** panel background behind the screenshot, taken from the client's own palette */
    tint: string;
    demo?: boolean;
}

export const projects: Project[] = [
    { id: 'petshop6', name: 'Pet Shop 6', url: 'https://petshop6.com/', image: '/images/work/petshop6.webp', tint: '#F4E4D2' },
    { id: 'blackinkart', name: 'Black Ink Art', url: 'https://www.blackinkart.com.tr/', image: '/images/work/blackinkart.webp', tint: '#3A2C1C' },
    { id: 'piercingland', name: 'Piercingland', url: 'https://piercingland.com.tr/', image: '/images/work/piercingland.webp', tint: '#E8E4DC' },
    { id: 'balkabagi', name: 'Balkabağı Juice', url: 'https://khaliglizahra-ops.github.io/', image: '/images/work/balkabagi-lezzetler.webp', tint: '#F5EDD9' },
    { id: 'bagizza', name: 'Bagizza', url: 'https://khaliglizahra-ops.github.io/bagizza/', image: '/images/work/bagizza.webp', tint: '#C8211E' },
    { id: 'zet', name: 'ZET Elektrik', url: 'https://zetelektrik.github.io/', image: '/images/work/zet.webp', tint: '#D7DB2E' },
    { id: 'nukleon', name: 'Nükleon Lab', url: 'https://khaliglizahra-ops.github.io/potash/', image: '/images/work/nukleon.webp', tint: '#E6E8EC', demo: true },
];
