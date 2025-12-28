import certifAlibaba from './images/certif-alibaba.webp';
import certifNestjs from './images/certif-nestjs.webp';

export interface Certificate {
  id: string;
  src: string;
  alt: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    id: "alibaba-cloud",
    src: certifAlibaba,
    alt: "Certified Developer from Alibaba Cloud",
    title: "Alibaba Cloud Certified Developer",
    issuer: "Alibaba Cloud",
    date: "2024",
    url: "https://www.aliyun.com/certificate/"
  },
  {
    id: "codepolitan",
    src: certifNestjs,
    alt: "Directory Listing App Certificate from codepolitan",
    title: "Directory Listing App Course",
    issuer: "Codepolitan",
    date: "2023"
  }
];
