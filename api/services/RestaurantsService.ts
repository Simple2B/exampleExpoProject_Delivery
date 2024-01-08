/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PanelRestaurantList } from '../models/PanelRestaurantList';
import type { Restaurant } from '../models/Restaurant';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RestaurantsService {
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
}
