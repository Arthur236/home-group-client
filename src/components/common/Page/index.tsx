import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

type PageProps = {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const Page: FC<PageProps> = (props) => {
  const { className, children, title = 'Home Group' } = props;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className={className}>
        {children}
      </div>
    </React.Fragment>
  );
}

export default Page;
