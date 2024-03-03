export default interface ICountry {
  code: string;
  commonName: string;
  flagEmoji: string;
  flagImg: string;
  capital: [string];
  region: string;
  population: number;
  officialName?: string;
  googleMapURL?: string;
}
