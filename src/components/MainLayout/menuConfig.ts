import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

type MenuConfig = {
    name: string;
    Icon: any;
    selected?: boolean
}
const menuConfig: MenuConfig[] = [
  {
    name: "Home",
    Icon: HomeOutlinedIcon,
    selected: true,
  },
  {
    name: "Orders",
    Icon: DescriptionOutlinedIcon,
  },
  {
    name: "Products",
    Icon: ShoppingCartOutlinedIcon,
  },
  {
    name: "Customers",
    Icon: PeopleAltOutlinedIcon,
  },
  {
    name: "Discounts",
    Icon: LocalOfferOutlinedIcon,
  },
  {
    name: "Gift cards",
    Icon: CardGiftcardOutlinedIcon,
  },
  {
    name: "Settings",
    Icon: SettingsOutlinedIcon,
  },
];

export default menuConfig;
