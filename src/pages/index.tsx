import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticProps } from 'next';

import { FiCalendar, FiUser } from 'react-icons/fi';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination, preview = false }: HomeProps) {
  return (
    <>
      <title>spacetravelling</title>
      <main>
        <h1>Como Utilizar hooks</h1>
        <h2> Pensand em sicnronização </h2>
        <span>
          <FiCalendar size={20} color="#BBBBBB" />{' '}
          {format(new Date('02/07/2018'), 'dd LLL y', {
            locale: ptBR,
          })}
        </span>
        <span>
          <FiUser size={20} color="#BBBBBB" /> Rafael Ribeiro
        </span>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
