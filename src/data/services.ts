import type { Service } from './types';
import { residentialServices } from './services-residential';
import { commercialServices } from './services-commercial';

export const services: Service[] = [...residentialServices, ...commercialServices];
export const serviceBySlug: Record<string, Service> = Object.fromEntries(services.map((s) => [s.slug, s]));
export const residential = services.filter((s) => s.category === 'residential');
export const commercial = services.filter((s) => s.category === 'commercial');
export const process = services.filter((s) => s.category === 'process');
