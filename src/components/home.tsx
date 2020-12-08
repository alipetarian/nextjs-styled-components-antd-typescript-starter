import Link from 'next/link';

const HomeComp: React.FC = () => (
  <>
    <h1>
      Welcome to
      {' '}
      <a href="https://nextjs.org">Next.js!</a>
    </h1>

    <Link href="/connects">
      <a>Connects</a>
    </Link>
    <br />
    <Link href="/connects/add-connect">
      <a>Add New Connect</a>
    </Link>
  </>
);

export default HomeComp;
