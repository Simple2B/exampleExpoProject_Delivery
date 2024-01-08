/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {WHOAMI} from '@/constants/query';
// import {getReadableVersion} from 'react-native-device-info';

export const useFetchWhoAmI = () => {
  // TODO: add version of application
  //   const appVersion = getReadableVersion();

  // const whoAmIQuery = useQuery(
  //   [WHOAMI],
  //   async () => {
  //     // const res =
  //     //   await UsersService.getUserProfileApiUsersUserUuidGet(userUUID);
  //     return 'res';
  //   },
  //   {
  //     onError: (error: any) => {
  //       console.log('error', error.message);
  //       return;
  //     },
  //   },
  // );

  return {
    // userUUID: whoAmIQuery.data?.uuid,
    // isAuthByGoogle: whoAmIQuery.data?.is_auth_by_google ?? false,
    // isAuthByApple: whoAmIQuery.data?.is_auth_by_apple ?? false,
    // isCurrentUser: whoAmIQuery.isSuccess,
    // isLoading: whoAmIQuery.isLoading,
    // isError: whoAmIQuery.isError,
    // isSuccess: whoAmIQuery.isSuccess,
    // isFetching: whoAmIQuery.isFetching,
  } as const;
};
