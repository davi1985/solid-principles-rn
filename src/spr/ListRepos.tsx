import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useGetRepos } from './useGetRepos';
import { Repo } from './Repo';

export const ListRepos = () => {
  const { isLoading, repos } = useGetRepos();

  if (isLoading) {
    return <ActivityIndicator size={'large'} color={'#4285F4'} />;
  }

  return (
    <View>
      {repos.map((item) => (
        <Repo {...item} />
      ))}
    </View>
  );
};
