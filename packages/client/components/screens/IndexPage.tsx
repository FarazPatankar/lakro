import Head from '../../seo/Head';
import { useUser } from '../../lib/auth/Api';
import { Navbar } from '../layout/web/Navbar';
import Link from 'next/link';

// TODO: clean this up

import axios from 'axios';
import { LAKRO_API_URL } from '../../lib/constants';
import { Button } from '../ui/Button';

export const IndexPage: React.FC = () => {
  const { data, error } = useUser();

  const deleteAccHandler = async () => {
    await axios.delete(`${LAKRO_API_URL}/user/delete`, {
      withCredentials: true,
    });
  };

  return (
    <>
      <Head
        title="Lakro • Home"
        description="A platform designed to make networking fun and authentic."
      />
      <div className="flex w-screen flex-col relative">
        {/* will setup state management soon, pls don't shout at me LOL */}
        <Notice />
        <Navbar data={data} />
      </div>
    </>
  );
};

const Notice: React.FC = () => {
  return (
    <div className="bg-accent h-12 text-sm w-screen flex items-center text-center justify-center">
      Seems a bit empty right now, join our discord server for updates.{' '}
      <JoinDiscordCustomButton />
    </div>
  );
};

const JoinDiscordCustomButton: React.FC = () => {
  return (
    <Link href="https://discord.gg/U52nZh52zT">
      <a
        target="_blank"
        className="ml-2 text-sm flex items-center border-solid border-white border h-8 px-2 rounded hover:bg-white hover:text-accent duration-500"
      >
        Discord Server &#x2192;
      </a>
    </Link>
  );
};
