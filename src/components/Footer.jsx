import React from 'react';
import Link from 'next/link';
import { Container } from '.';

const policiesData = [
  { id: 1, title: 'Refund policy', path: '/refund-policy' },
  { id: 2, title: 'Shipping policy', path: '/shipping-policy' },
  { id: 3, title: 'Privacy policy', path: '/privacy-policy' },
  { id: 4, title: 'Terms of service', path: '/terms-of-service' },
];

const Footer = () => {
  return (
    <footer className="col-start-1 py-4">
      <Container>
        <ul className="flex flex-wrap items-center gap-x-5 md:justify-start md:gap-6">
          {policiesData.map((data) => (
            <li key={data.id} className="my-1">
              <Link
                href={data.path}
                className="whitespace-nowrap py-2 text-sm text-primary-300 underline transition-all hover:text-primary-400"
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
