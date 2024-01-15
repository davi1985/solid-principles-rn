import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { Repo } from '../@types';
import { fetchListRepos } from './api';

export const useGetRepos = () => {
  const [repos, setRepos] = useState<Array<Repo>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const repos = await fetchListRepos();

        setRepos(repos);
      } catch (error) {
        Alert.alert('Something wrong!');
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { isLoading, repos };
};
