import { Button } from '../../ui/Button';

// TODO Clean this up
type Props = {
  data: any;
};

export const Navbar: React.FC<Props> = ({ data }) => {
  console.log(data.user);
  return (
    <nav className="flex items-center justify-between drop-shadow-md bg-bg-default relative px-12 h-20 w-full">
      <div className="flex items-center">
        <img
          className="rounded-full h-10 w-10 mr-4"
          src={data.user.picture}
          referrerPolicy="no-referrer"
          alt="profile pic"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold h-fit">{data.user.name}</h1>
          <p className="text-sm text-text-primary">{data.user.email}</p>
        </div>
      </div>
      <Button>Account Settings</Button>
    </nav>
  );
};
