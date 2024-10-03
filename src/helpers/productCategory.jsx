import { SlEarphones } from "react-icons/sl";
import { FaCamera } from "react-icons/fa";
import { TbDeviceAirpods } from "react-icons/tb";
import { MdMobileScreenShare } from "react-icons/md";
import { PiMouseMiddleClickLight } from "react-icons/pi";
import { FiPrinter } from "react-icons/fi";
import { GiProcessor } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { BiTrim } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { TbDeviceWatchExclamation } from "react-icons/tb";


const productCategory = [
    {id: 1 , label : 'Airpodes', value : 'airpodes',icon: <TbDeviceAirpods />} ,
    {id: 2, label: 'Camera', value: 'camera',icon: <FaCamera />},
    {id: 3, label: 'Earphones', value: 'earphones',icon: <SlEarphones />},
    {id: 4, label: 'Mobiles', value: 'mobiles',icon: <MdMobileScreenShare />,},
    {id: 5, label: 'Mouse', value: 'mouse' , icon: <PiMouseMiddleClickLight />},
    {id: 6, label: 'Printers', value: 'printers',icon: <FiPrinter />,},
    {id: 7, label: 'Processor', value: 'processor' , icon: <GiProcessor />,},
    {id: 8, label: 'Refrigerator', value: 'refrigerator', icon: <CgSmartHomeRefrigerator />},
    {id: 9, label: 'Speakers', value: 'speakers' , icon:<PiSpeakerSimpleHighFill />  },
    {id: 10, label: 'Trimmers', value: 'trimmers' , icon:<BiTrim />  },
    {id: 11, label: 'Televisions', value: 'televisions' , icon:<PiTelevisionSimpleFill /> },
    {id: 12, label: 'Watches', value: 'watches', icon:<TbDeviceWatchExclamation />  }
  ]

  export default productCategory;
  