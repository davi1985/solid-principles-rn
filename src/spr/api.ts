import axios from 'axios';
import { Repo } from '../@types';

export const fetchListRepos = () =>
  axios
    .get<Array<Repo>>('https://api.github.com/users/davi1985/repos')
    .catch((error) => {
      throw error;
    })
    .then((res) => res.data);
