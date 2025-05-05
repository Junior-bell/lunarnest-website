'use client';
import Link from 'next/link';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesPage() {
  const mainServices = [
    {
      name: 'Managed Account Services',
      description: 'Let our expert traders manage your capital with a focus on strategic growth and risk management.',
      link: '/contact?service=managed-accounts',
    },
    {
      name: 'Direct Trading Platform Access',
      description: 'Access our advanced trading platforms with real-time data and powerful tools for executing your own strategies.',
      link: '/contact?service=platform-access',
    },
    {
      name: 'Investment Advisory',
      description: 'Receive personalized investment advice and guidance tailored to your financial goals and risk tolerance.',
      link: '/contact?service=advisory',
    },
  ];

  const futureServices = [
    {
      title: "Wealth Management",
      description: "Grow and protect your wealth with personalized investment strategies.",
    },
    {
      title: "Quantitative Research",
      description: "Data-driven insights to identify long-term opportunities.",
    },
    {
      title: "Portfolio Optimization",
      description: "Balance risk and return with smart diversification.",
    },
    {
      title: "Algo Trading (Coming Soon)",
      description: "Automated strategies powered by modern algorithms.",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | LunarNest Capital</title>
        <meta name="description" content="Explore trading and investment solutions offered by LunarNest Capital." />
      </Head>

      {/* Main Services */}
      <div className="py-12 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-3 text-lg text-gray-700 sm:mt-4">
              Explore the range of trading and investment solutions offered by LunarNest Capital.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <div
                key={service.name}
                className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                >
                  Learn More
                  <svg className="ml-2 -mr-0.5 h-4 w-4 fill-white" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Ready to take the next step?{' '}
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
                Contact us today
              </Link>{' '}
              to discuss your trading needs.
            </p>
          </div>
        </div>
      </div>

      {/* Additional (Future) Services */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Also Coming to LunarNest</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {futureServices.map((service, index) => (
              <Card key={index} className="bg-slate-800 text-white border-none shadow-md">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
