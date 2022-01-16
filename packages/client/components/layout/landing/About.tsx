export const About: React.FC = () => {
  const features = [
    'Connections',
    'DMs',
    'Groups',
    'Friends System',
    'Video & Voice Chat',
    'User Profiles',
    'Social Media Connections',
    'Creator Support',
    'Link Embeds',
    'Keyboard Shortcuts',
    'Payment System',
    'Communities',
    'Highlights',
  ];

  return (
    <div className="flex flex-col text-center items-center justify-center w-full h-fit ">
      <h1 className="font-extrabold text-white tracking-tight leading-none mb-5 text-[1.9rem] md:text-[2.4rem]">
        What we&apos;re <span className="text-accent">about</span>.
      </h1>
      <p className="text-[1rem] md:text-[1.3rem] text-text-primary font-light mb-8 px-0 md:px-24">
        Lakro is a professional network built around authenticity and
        individuals being themselves. Lakro offers a lot of the features that
        are built into LinkedIn but with add-ons and a more friendly user
        interface. Here are some of the things we offer are:
      </p>
      <ul className="block list-disc md:px-10">
        {features.map((feature) => (
          <Feature key={feature}>{feature}</Feature>
        ))}
      </ul>
    </div>
  );
};

const Feature: React.FC = ({ children }) => {
  return (
    <li className="inline-block items-center pt-2 pb-2 px-4 mb-5 drop-shadow-xl font-bold mx-2 rounded-full text-sm text-white bg-bg-secondary w-fit justify-center">
      {children}
    </li>
  );
};
