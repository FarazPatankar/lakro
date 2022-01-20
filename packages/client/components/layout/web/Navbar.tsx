import { useState } from 'react';
import { Search } from '../../icons/Search';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

// TODO Clean this up
type Props = {
  data: any;
};

export const Navbar: React.FC<Props> = ({ data }) => {
  const [search, setSearch] = useState('');

  const searchRequestHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <nav className="flex items-center justify-between drop-shadow-md bg-bg-default relative px-12 h-20 w-full">
      <div className="flex items-center">
        <img
          className="rounded-full h-10 w-10 mr-4 hover:cursor-pointer"
          src={data.user.picture}
          referrerPolicy="no-referrer"
          alt="profile pic"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold h-fit">{data.user.name}</h1>
          <p className="text-sm text-text-primary">{data.user.email}</p>
        </div>
      </div>
      <form
        className="flex items-center bg-bg-secondary h-12 rounded-lg text-text-primary px-4"
        onSubmit={searchRequestHandler}
      >
        <Search />
        <Input
          id="search"
          name="search"
          placeholder="Search Lakro"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.currentTarget.value)
          }
        />
      </form>
    </nav>
  );
};
