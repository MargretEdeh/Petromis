import { FaRecycle, FaOilCan, FaTruck } from 'react-icons/fa';
import { MdAutorenew } from 'react-icons/md';
import { GiMiner } from 'react-icons/gi';

export const data = [
  {
    icons: <FaOilCan />,
    title: 'Oil and Gas',
    content:
      'The company is known for its strategic partnerships, cutting-edge technologies, and adherence to the highest industry standards.',
    bgcolor: 'white',
    text: 'primary',
  },
  {
    icons: <FaRecycle />,
    title: 'Metal Recycling',
    content:
      'Key player in the Metals Recycling industry, promoting environmental responsibility and resource efficiency.',
    bgcolor: 'sub',
    text: 'white',
  },
  {
    icons: <FaTruck />,
    title: 'Transportation',
    content:
      "Petromis Energy's transportation services are marked by efficiency, reliability, and a commitment to meeting the diverse needs of its clients.",
    bgcolor: 'white',
    text: 'primary',
  },
  {
    icons: <MdAutorenew />,
    title: 'Renewable Energy',
    content:
      "The company contributes to the development and implementation of clean and sustainable energy solutions, playing a pivotal role in Nigeria's transition to a greener future.",
    bgcolor: 'sub',
    text: 'white',
  },
  {
    icons: <GiMiner />,
    title: 'Precious Stone Mining',
    content:
      'Petromis Energy Limited specializes in the ethical extraction and processing of high-quality gemstones.',
    bgcolor: 'white',
    text: 'primary',
  },
];
