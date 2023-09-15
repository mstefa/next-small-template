import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { Divider } from '@nextui-org/divider';
// import { Image } from '@nextui-org/image';
import { Avatar } from '@nextui-org/avatar';

import { StoreNavbar } from '@/modules/shared/components/SiteNavbar';

export default function About() {
  return (
    <>
      <StoreNavbar></StoreNavbar>
      <div className="flex justify-center">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Avatar
              isBordered
              radius="md"
              src="https://drive.google.com/uc?export=download&id=1X1x_1WzLmBElR2t4g7lCrDNJ2OUjeTRm"
            />
            <div className="flex flex-col">
              <p className="text-md">Matias Stefanutti</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              I&apos;ve developed this web application and am eager to discuss
              my approach, decisions, and potential enhancements in an upcoming
              interview.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://www.linkedin.com/in/matiasstefanutti/"
              target="_blank"
            >
              Check my Linkedin profile
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
