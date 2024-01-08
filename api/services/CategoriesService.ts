/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';
import type { CategoryList } from '../models/CategoryList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CategoriesService {
    /**
     * Get Category
     * @param categoryId
     * @returns Category Successful Response
     * @throws ApiError
     */
    public static apiGetCategory(
        categoryId: number,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/categories/{category_id}',
            path: {
                'category_id': categoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Categories
     * @returns CategoryList Successful Response
     * @throws ApiError
     */
    public static apiGetCategories(): CancelablePromise<CategoryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/categories',
        });
    }
}
