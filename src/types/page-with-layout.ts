import { NextPage } from 'next';
import SiteLayout from 'components/common/layout';

type PageWithLayoutType = NextPage & { layout: typeof SiteLayout }
export default PageWithLayoutType;
