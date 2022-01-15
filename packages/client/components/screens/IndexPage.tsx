import Head from '../../seo/Head';

import { Wrapper } from '../layout/Wrapper';
import { useUser } from '../../lib/auth/Api';
import { Button } from '../ui/Button';

export const IndexPage: React.FC = () => {
  const { data, error } = useUser();

  return (
    <Wrapper>
      <Head
        title="Lakro • Home"
        description="A platform designed to make networking fun and authentic."
      />
      <div className="flex w-screen h-screen items-center justify-center">
        <p className="text-red-500 text-sm mb-2">
          {' '}
          <i>
            <b>{error && `Something went wrong: ${error}`}</b>
          </i>
        </p>
        <div className="flex flex-col">
          <h1 className="text-white text-xl font-bold">
            👋 Welcome {data.user.name}!
          </h1>
          <p className="text-slate-300">{data.user.email}</p>
        </div>
      </div>
    </Wrapper>
  );
};
