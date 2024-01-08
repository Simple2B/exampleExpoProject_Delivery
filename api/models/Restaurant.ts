/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
export type Restaurant = {
    id: number;
    name: string;
    image: string;
    duration: string;
    distance: number;
    rate: number;
    rates: number;
    tags: Array<Category>;
    description: string;
    is_deleted: boolean;
    created_at: string;
    location: string;
};

