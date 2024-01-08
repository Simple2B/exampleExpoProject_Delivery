/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Auth } from '../models/Auth';
import type { Body_API_login } from '../models/Body_API_login';
import type { Category } from '../models/Category';
import type { CategoryList } from '../models/CategoryList';
import type { PanelRestaurantList } from '../models/PanelRestaurantList';
import type { Restaurant } from '../models/Restaurant';
import type { Token } from '../models/Token';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApiService {
    /**
     * Get Current User Profile
     * Returns the current user profile
     * @returns User Successful Response
     * @throws ApiError
     */
    public static apiGetCurrentUserProfile(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/me',
        });
    }
    /**
     * Login
     * Logs in a user
     * @param formData
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static apiLogin(
        formData: Body_API_login,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Token
     * Logs in a user
     * @param requestBody
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static apiGetToken(
        requestBody: Auth,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
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
    /**
     * Get Panels
     * @returns PanelRestaurantList Successful Response
     * @throws ApiError
     */
    public static apiGetPanels(): CancelablePromise<PanelRestaurantList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/restaurants/panels',
        });
    }
    /**
     * Get Restaurant
     * @param restaurantId
     * @returns Restaurant Successful Response
     * @throws ApiError
     */
    public static apiGetRestaurant(
        restaurantId: number,
    ): CancelablePromise<Restaurant> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/restaurants/{restaurant_id}',
            path: {
                'restaurant_id': restaurantId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Endpoints
     * @returns any Successful Response
     * @throws ApiError
     */
    public static apiListEndpoints(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/list-endpoints/',
        });
    }
}
