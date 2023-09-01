import { IIcon } from "../../../interfaces/icons.interface"

export const CommandIcon = ({ className }: IIcon) => {
  return (
    <svg className={className} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.597656 2.4C0.597656 1.07452 1.67217 0 2.99766 0C4.32314 0 5.39766 1.07452 5.39766 2.4V3.6H7.79766V2.4C7.79766 1.07452 8.87217 0 10.1977 0C11.5231 0 12.5977 1.07452 12.5977 2.4C12.5977 3.72548 11.5231 4.8 10.1977 4.8H8.99766V7.2H10.1977C11.5231 7.2 12.5977 8.27452 12.5977 9.6C12.5977 10.9255 11.5231 12 10.1977 12C8.87217 12 7.79766 10.9255 7.79766 9.6V8.4H5.39766V9.6C5.39766 10.9255 4.32314 12 2.99766 12C1.67217 12 0.597656 10.9255 0.597656 9.6C0.597656 8.27452 1.67217 7.2 2.99766 7.2H4.19766V4.8H2.99766C1.67217 4.8 0.597656 3.72548 0.597656 2.4ZM4.19766 3.6V2.4C4.19766 1.73726 3.6604 1.2 2.99766 1.2C2.33491 1.2 1.79766 1.73726 1.79766 2.4C1.79766 3.06274 2.33491 3.6 2.99766 3.6H4.19766ZM5.39766 4.8V7.2H7.79766V4.8H5.39766ZM4.19766 8.4H2.99766C2.33491 8.4 1.79766 8.93726 1.79766 9.6C1.79766 10.2627 2.33491 10.8 2.99766 10.8C3.6604 10.8 4.19766 10.2627 4.19766 9.6V8.4ZM8.99766 8.4V9.6C8.99766 10.2627 9.53491 10.8 10.1977 10.8C10.8604 10.8 11.3977 10.2627 11.3977 9.6C11.3977 8.93726 10.8604 8.4 10.1977 8.4H8.99766ZM8.99766 3.6H10.1977C10.8604 3.6 11.3977 3.06274 11.3977 2.4C11.3977 1.73726 10.8604 1.2 10.1977 1.2C9.53491 1.2 8.99766 1.73726 8.99766 2.4V3.6Z" fill="black"/>
    </svg>
  )
}